import { useState } from "react";

import { FilterNav } from "../components/FilterNav";
import { Header } from "../components/Header";
import { OrderDropdown } from "../components/OrderDropdown";
import { Pagination } from "../components/Pagination";
import { ProductsDisplay } from "../components/ProductsDisplay";

import { useStore } from "../hooks/useStore";

import { formatPagesCount } from "../utils/formatPagesCount";

import { Container, FiltersSection } from '../styles/pages/Home';
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const { sortField, sortOrder } = useStore();
  const [selectedPage, setSelectedPage] = useState(0);

  const { data, isLoading, isFetching, error } = useProducts(sortField, sortOrder, selectedPage);

  function handleChangePage(newPage: number) {

    setSelectedPage(newPage);
  }

  return (
    <>
      <Header />
      <Container>
        
        <FiltersSection>
          <FilterNav />
          <OrderDropdown />
        </FiltersSection>

        {
          isLoading ? (
            <h1>carregando</h1>
          ) : error ? (
            <h1>Falha ao obter dados</h1>
          ) : (
            <>
            <Pagination selectedPage={selectedPage} totalPages={formatPagesCount(data.count)} handleOnChangePage={handleChangePage}/>

            <ProductsDisplay products={data.products} />

            <Pagination selectedPage={selectedPage} totalPages={formatPagesCount(data.count)} handleOnChangePage={handleChangePage}/>
            </>
          )
        }

      </Container>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {

//   const vars = {
//       page: 0,
//       perPage: 12,
//   }
  
//   const data = await client.request(GET_PRODUCTS, vars);

//   const { allProducts } = data;
//   const { count } = data._allProductsMeta;

//   return {
//       props: {
//           products: allProducts,
//           count,
//       }
//   }
// }