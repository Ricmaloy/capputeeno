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

interface varsProps {
    page: number,
    perPage: number,
    sortFilter?: string,
    sortField?: string,
    sortOrder?: string,
}

type FilterOptionProps = 'all' | 't-shirts' | 'mugs';
type OrderOptionProps = 'news' | 'ascending' | 'descending' | 'topseller' | 'none';

const formatOrderList = {
    'news' : [ 'created_at', 'DESC' ],
    'topseller' : [ 'sales', 'DESC' ],
    'descending' : [ 'price_in_cents', 'DESC' ],
    'ascending' : [ 'price_in_cents', 'ASC' ]
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
    sortField: FilterOptionProps;
    handleSetSortField: (newSortField: FilterOptionProps) => void;
    sortOrder: OrderOptionProps;
    handleSetSortOrder: (newSortOrder: OrderOptionProps) => void;
    slug: string;
    handleSetSlug: (newSlug: string) => void;
    vars: varsProps;
}

export const StoreContext = createContext({} as StoreContextData);

export function StoreContextProvider({ children }: StoreContextProviderProps) {
    const [searchField, setSearchField] = useState('');
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [count, setCount] = useState(0);
    const [sortField, setSortField] = useState<FilterOptionProps>('all');
    const [sortOrder, setSortOrder] = useState<OrderOptionProps>('none');
    const [slug, setSlug] = useState('');
    const [vars, setVars] = useState({page: 0, perPage: 12})

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

    function handleSetSortField(newSortField: FilterOptionProps) {
        setSortField(newSortField);
    }

    function handleSetSortOrder(newSortOrder: OrderOptionProps) {
        setSortOrder(newSortOrder);
    }

    function handleSetSlug(newSlug: string) {
        setSlug(newSlug);
    }

    function handleGetProducts() {
        const formatedFilter = sortField === 'all' ? {} : { "category": `${sortField}` };
        const formatedOrder = sortOrder === 'none' ? '' : [...formatOrderList[`${sortOrder}`]];

        const vars = {
            page: currentPage,
            perPage: 12,
            sortFilter: formatedFilter,
            sortField: formatedOrder[0],
            sortOrder: formatedOrder[1],
        }
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
            slug,
            vars
        }} >
            {children}
        </StoreContext.Provider>
    )
}