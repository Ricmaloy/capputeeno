import { useContext } from "react"
import { StoreContext } from "../contexts/storeContext"

export const useStore = () => {
    return useContext(StoreContext)
}