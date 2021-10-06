import { useContext } from "react"
import { CartContext } from "../contexts/cartContext"

export const useCart = () => {
    return useContext(CartContext)
}