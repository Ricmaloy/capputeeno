import { createContext, ReactNode, useState } from 'react';

interface StoreContextProviderProps {
    children: ReactNode;
}

type FilterOptionProps = 'all' | 't-shirts' | 'mugs';
type OrderOptionProps = 'news' | 'ascending' | 'descending' | 'topseller' | 'none';

interface StoreContextData {
    sortField: FilterOptionProps;
    handleSetSortField: (newSortField: FilterOptionProps) => void;
    sortOrder: OrderOptionProps;
    handleSetSortOrder: (newSortOrder: OrderOptionProps) => void;
}

export const StoreContext = createContext({} as StoreContextData);

export function StoreContextProvider({ children }: StoreContextProviderProps) {
    const [sortField, setSortField] = useState<FilterOptionProps>('all');
    const [sortOrder, setSortOrder] = useState<OrderOptionProps>('none');

    function handleSetSortField(newSortField: FilterOptionProps) {
        setSortField(newSortField);
    }

    function handleSetSortOrder(newSortOrder: OrderOptionProps) {
        setSortOrder(newSortOrder);
    }

    return (
        <StoreContext.Provider value={{
            handleSetSortField,
            handleSetSortOrder,
            sortField,
            sortOrder,
        }} >
            {children}
        </StoreContext.Provider>
    )
}