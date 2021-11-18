import { createContext, ReactNode, useState } from 'react';

interface StoreContextProviderProps {
  children: ReactNode;
}

type FilterOptionProps = 'all' | 't-shirts' | 'mugs';
type OrderOptionProps = 'news' | 'ascending' | 'descending' | 'topseller' | 'none';

interface StoreContextData {
  sortField: FilterOptionProps;
  sortOrder: OrderOptionProps;
  currentPage: number;
  handleSetSortField: (newSortField: FilterOptionProps) => void;
  handleSetSortOrder: (newSortOrder: OrderOptionProps) => void;
  handleChangeProductPage: (newPage: number) => void;
}

export const StoreContext = createContext({} as StoreContextData);

export function StoreContextProvider({ children }: StoreContextProviderProps) {
  const [sortField, setSortField] = useState<FilterOptionProps>('all');
  const [sortOrder, setSortOrder] = useState<OrderOptionProps>('none');
  const [currentPage, setCurrentPage] = useState(0);
  
  function handleSetSortField(newSortField: FilterOptionProps) {
    setSortField(newSortField);
    setCurrentPage(0);
  }
  
  function handleSetSortOrder(newSortOrder: OrderOptionProps) {
    setSortOrder(newSortOrder);
    setCurrentPage(0);
  }
  
  function handleChangeProductPage(newPage: number) {
    setCurrentPage(newPage);
  }
  
  return (
    <StoreContext.Provider value={{
      handleSetSortField,
      handleSetSortOrder,
      handleChangeProductPage,
      sortField,
      sortOrder,
      currentPage
    }}>
      {children}
    </StoreContext.Provider>
  )
}