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
    cartSize: number;
    cartTotal: number;
    addProductToCart: (id: string, name: string, description: string, price: number, imageUrl: string, sales: number) => void;
    removeProductFromCart: (id: string) => void;
    updateProductQuantity: (id: string, quantity: number) => void;
    updateCartSize: (newQuantity: number) => void;
    handleBuyProducts: () => void;
    getIsFreeFreight: () => boolean;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const cookies = parseCookies();

    const [cart, setCart] = useState<ProductProps[]>(() => { 
        const cartSaved = cookies['@capputeeno:cart'] ?  JSON.parse(cookies['@capputeeno:cart']) : []
        return cartSaved;
    });

    const [cartSize, setCartSize] = useState(() => cart.reduce((acc, product) => product.quantity + acc, 0));

    const [cartTotal, setCartTotal] = useState(() => cart.reduce((acc, product) => (product.quantity * product.price) + acc, 0));

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
            });

            setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
                path: '/',
                maxAge: 30 * 24 * 60 * 60,
            });
            setCart(newCart);
        } else {
            const newCart = [...cart,  {...product, quantity: 1}]

            setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
                path: '/',
                maxAge: 30 * 24 * 60 * 60,
            });

            setCart(newCart);
        }

        setCartSize(cartSize + 1);
        setCartTotal(cartTotal + price);
    }

    function removeProductFromCart(id: string) {
        const newCart = cart.filter(item => item.id !== id);
        const newCartTotal = newCart.reduce((acc, product) => (product.quantity * product.price) + acc, 0);
        const itemQuantity = cart.find(item => item.id === id).quantity;

        setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        })

        setCart(newCart);
        setCartSize(cartSize - itemQuantity);
        setCartTotal(newCartTotal);
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

        const newCartSize = newCart.reduce((acc, product) => product.quantity + acc, 0);
        const newCartTotal = newCart.reduce((acc, product) => (product.quantity * product.price) + acc, 0);

        setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        })
        setCart(newCart);
        setCartSize(newCartSize);
        setCartTotal(newCartTotal);
    }

    function handleBuyProducts() {
        updateProductsSales.mutateAsync();

        const newCart = [];

        setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        })
        setCart(newCart);
        setCartSize(0);
        setCartTotal(0);
    }

    function updateCartSize(newQuantity: number) {
        setCartSize(newQuantity);
    }

    function getIsFreeFreight() {

        return cartTotal > 90000;
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
        <CartContext.Provider value={{
            cart, 
            cartSize, 
            cartTotal, 
            updateCartSize, 
            getIsFreeFreight, 
            addProductToCart, 
            removeProductFromCart, 
            updateProductQuantity, 
            handleBuyProducts
        }} >
            {children}
        </CartContext.Provider>
    )

}