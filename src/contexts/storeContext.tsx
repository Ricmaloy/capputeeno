import { createContext, ReactNode, useState } from "react";
import client from "../graphql/client";
import GET_PRODUCT_BY_ID from "../graphql/queries/getProductByID";

interface StoreContextProviderProps {
    children: ReactNode;
}

interface ProductProps {
    id: string,
    name: string,
    imageUrl: string,
    priceInCents: number,
    category: string,
}

interface ProductsProps {
    products: ProductProps[]
    count: number,
    slug: string
}

interface StoreContextData {
    searchField: string;
    handleSetSearchField: (newSearchField: string) => void;
    products: ProductProps[];
    handleSetProducts: (newProducts: ProductProps[]) => void;
    handleGetProducts: () => void;
    handleGetProduct: () => void;
    currentPage: number;
    handleSetCurrentPage: (newPage: number) => void;
    totalPages: number;
    handleSetTotalPages: (newTotalPages: number) => void;      
    count: number;
    handleSetCount: (newCount: number) => void;
    sortField: string;
    handleSetSortField: (newSortField: string) => void;
    sortOrder: string;
    handleSetSortOrder: (newSortOrder: string) => void;
    slug: string;
    handleSetSlug: (newSlug: string) => void;
}

export const StoreContext = createContext({} as StoreContextData);

export function StoreContextProvider({ children }: StoreContextProviderProps) {
    const [searchField, setSearchField] = useState('');
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [count, setCount] = useState(0);
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [slug, setSlug] = useState('');

    function handleSetSearchField(searchField: string) {
        setSearchField(searchField);
    }

    function handleSetProducts(products: ProductProps[]) {
        setProducts(products);
    }

    function handleSetCurrentPage(newPage: number) {
        setCurrentPage(newPage);
    }

    function handleSetTotalPages(pagesCounter: number) {
        setTotalPages(pagesCounter);
    }

    function handleSetCount(newCount: number) {
        setCount(newCount)
    }

    function handleSetSortField(newSortField: string) {
        setSortField(newSortField);
    }

    function handleSetSortOrder(newSortOrder: string) {
        setSortOrder(newSortOrder);
    }

    function handleSetSlug(newSlug: string) {
        setSlug(newSlug);
    }

    async function handleGetProducts() {

    }

    async function handleGetProduct() {
        const { Product } = await client.request(GET_PRODUCT_BY_ID, { "id": slug });
        // console.log(Product)
        setProducts([Product])
    }

    return (
        <StoreContext.Provider value={{
            handleSetSearchField,
            handleSetProducts,
            handleSetCurrentPage,
            handleSetTotalPages,
            handleSetSlug,
            handleSetCount,
            handleSetSortField,
            handleSetSortOrder,
            handleGetProducts,
            handleGetProduct,
            searchField,
            products,
            currentPage,
            totalPages,
            count,
            sortField,
            sortOrder,
            slug
        }} >
            {children}
        </StoreContext.Provider>
    )
}