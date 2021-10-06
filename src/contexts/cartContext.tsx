import { createContext, ReactNode, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from 'nookies';

interface CartContextProviderProps {
    children: ReactNode;
}

interface ProductProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl:string;
    quantity?: number;
}

interface CartContextProps {
    cart: ProductProps[];
    addProductToCart: (id: string, name: string, description: string, price: number, imageUrl: string) => void;
    removeProductFromCart: (id: string) => void;
    getCartSize: () => number;
    getCartTotal: () => number;
    updateProductQuantity: (id: string, quantity: number) => void;
    handleBuyProducts: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const cookies = parseCookies();

    const [cart, setCart] = useState<ProductProps[]>(() => { 
        const cartSaved = cookies['@capputeeno:cart'] ?  JSON.parse(cookies['@capputeeno:cart']) : []
        return cartSaved
    })

    function addProductToCart(id: string, name: string, description: string, price: number, imageUrl: string) {
        const product = {
            id: id,
            name: name,
            description: description,
            price: price,
            imageUrl: imageUrl,
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

        return cartTotal
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
        const newCart = [];

        setCookie(null, '@capputeeno:cart', JSON.stringify(newCart), {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        })
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{cart, addProductToCart, removeProductFromCart, getCartSize, getCartTotal, updateProductQuantity, handleBuyProducts}} >
            {children}
        </CartContext.Provider>
    )

}