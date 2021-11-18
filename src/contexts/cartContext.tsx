import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useMutation } from "react-query";
import client from "../graphql/client";
import UPDATE_PRODUCT_SALES from "../graphql/mutations/updateProductSales";

interface CartContextProviderProps {
  children: ReactNode;
}

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl:string;
  sales: number;
  quantity?: number;
}

interface AddProductToCartParams {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  sales: number;
}

interface CartContextProps {
  cart: ProductProps[];
  cartSize: number;
  cartTotal: number;
  addProductToCart: (params: AddProductToCartParams) => void;
  removeProductFromCart: (id: string) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
  handleBuyProducts: () => void;
  isFreeFreight: boolean;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const cookies = parseCookies();
  
  const [cart, setCart] = useState<ProductProps[]>(() => { 
    const cartSaved = cookies['@capputeeno:cart'] ?  JSON.parse(cookies['@capputeeno:cart']) : []

    return cartSaved;
  });

  const calculateCartSize = useCallback(() => {
    return cart.reduce((acc, product) => product.quantity + acc, 0)
  }, [cart]);
  
  const calculateCartTotal = useCallback(() => {
    return cart.reduce((acc, product) => (product.quantity * product.price) + acc, 0);
  }, [cart]);

  const cartSize = useMemo(() => calculateCartSize(), [calculateCartSize]);
  const cartTotal = useMemo(() => calculateCartTotal(), [calculateCartTotal]);

  const isFreeFreight = cartTotal > 90000;

  useEffect(() => {
    if (cart.length > 0) {
      setCookie(undefined, '@capputeeno:cart', JSON.stringify(cart), {
        path: '/',
        maxAge: 30 * 24 * 60 * 60 // 30 days,
      })
    } else {
      destroyCookie(undefined, '@capputeeno:cart')
    }
  }, [cart])

  function addProductToCart({
    id,
    name,
    description,
    price,
    imageUrl,
    sales,
  }: AddProductToCartParams) {
    const product = {
      id: id,
      name: name,
      description: description,
      price: price,
      imageUrl: imageUrl,
      sales: sales
    }
    
    const isProductInCart = cart.some(item => item.id === id)
    
    if (isProductInCart) {
      setCart(state => {
        return state.map(item => {
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
      });
    } else {
      setCart(state => [...state,  {...product, quantity: 1}]);
    }
  }
  
  function removeProductFromCart(id: string) {
    const newCart = cart.filter(item => item.id !== id);
    
    setCart(newCart);
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

    setCart(newCart);
  }
  
  function handleBuyProducts() {
    updateProductsSales.mutateAsync();
    
    setCart([]);
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
      isFreeFreight, 
      addProductToCart, 
      removeProductFromCart, 
      updateProductQuantity, 
      handleBuyProducts
    }}>
      {children}
    </CartContext.Provider>
  )
}