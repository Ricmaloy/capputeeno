import { createContext, ReactNode, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useMutation } from "react-query";
import client from "../graphql/client";
import UPDATE_PRODUCT_SALES from "../graphql/mutations/updateProductSales";

interface CartContextProviderProps {
    children: ReactNode;
}

interface ProductProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl:string;
    sales: number;
    quantity?: number;
}

interface CartContextProps {
    cart: ProductProps[];
    addProductToCart: (id: string, name: string, description: string, price: number, imageUrl: string, sales: number) => void;
    removeProductFromCart: (id: string) => void;
    getCartSize: () => number;
    getCartTotal: () => number;
    updateProductQuantity: (id: string, quantity: number) => void;
    handleBuyProducts: () => void;
    getIsFreeFreight: () => boolean;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const cookies = parseCookies();

    const [cart, setCart] = useState<ProductProps[]>(() => { 
        const cartSaved = cookies['@capputeeno:cart'] ?  JSON.parse(cookies['@capputeeno:cart']) : []
        return cartSaved
    })

    function addProductToCart(id: string, name: string, description: string, price: number, imageUrl: string, sales: number) {
        const product = {
            id: id,
            name: name,
            description: description,
            price: price,
            imageUrl: imageUrl,
            sales: sales
        }

        const isProductInCard = cart.map(item => item.id === id).includes(true);

        if(isProductInCard) {

            const newCart = cart.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return {
                        ...item
                    }
                }
            })

            setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
                path: '/',
                maxAge: 30 * 24 * 60 * 60,
            })
            setCart(newCart);
        } else {
            const newCart = [...cart,  {...product, quantity: 1}]

            setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
                path: '/',
                maxAge: 30 * 24 * 60 * 60,
            })

            setCart(newCart);
        }
    }

    function removeProductFromCart(id: string) {
        const newCart = cart.filter(item => item.id !== id);

        setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        })

        setCart(newCart);
    }

    function getCartSize(): number {
        const cartSize = cart.reduce((acc, item) => acc + item.quantity, 0);

        return cartSize;
    }

    function getCartTotal(): number {
        const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        return cartTotal;
    }

    function updateProductQuantity(id: string, quantity: number) {
        const newCart = cart.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    quantity: quantity
                }
            } else {
                return {
                    ...item
                }
            }
        })

        setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        })
        setCart(newCart);
    }

    function handleBuyProducts() {
        updateProductsSales.mutateAsync();

        const newCart = [];

        setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        })
        setCart(newCart);
    }

    function getIsFreeFreight() {

        return getCartTotal() > 90000
    }

    const updateProductsSales = useMutation(async () => {

        cart.map(async (product) => {
            const vars = {
                id: product.id,
                sales: product.sales + product.quantity,
            }

            await client.request(UPDATE_PRODUCT_SALES, vars);
        });
    })


    return (
        <CartContext.Provider value={{cart, getIsFreeFreight, addProductToCart, removeProductFromCart, getCartSize, getCartTotal, updateProductQuantity, handleBuyProducts}} >
            {children}
        </CartContext.Provider>
    )

}