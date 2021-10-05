import { useEffect, useState } from "react";

import GET_PRODUCTS from "../graphql/queries/getProducts";
import client from "../graphql/client";

import { FilterNav } from "../components/FilterNav";
import { Header } from "../components/Header";
import { OrderDropdown } from "../components/OrderDropdown";
import { Pagination } from "../components/Pagination";
import { ProductsDisplay } from "../components/ProductsDisplay";

import { useStore } from "../hooks/useStore";

import { formatPagesCount } from "../utils/formatPagesCount";
import { formatVars } from "../utils/formatVars";

import { Container, FiltersSection } from '../styles/pages/Home';

interface varsProps {
  page: number,
  perPage: number,
  sortFilter: { category: string } | { category?: undefined },
  sortField: string,
  sortOrder: string,
}

export default function Home() {
  const { sortField, sortOrder } = useStore();
  const [productsList, setProductsList] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  async function handleChangePage(newPage: number) {

    setSelectedPage(newPage);

    const updatedVars = formatVars(sortField, sortOrder, newPage);
    const { allProducts } = await client.request(GET_PRODUCTS, updatedVars);

    setProductsList(allProducts);
}

async function getData(vars: varsProps) {
  const { allProducts, _allProductsMeta } =  await client.request(GET_PRODUCTS, vars);
  
  setProductsList(allProducts);
  setTotalPages(formatPagesCount(_allProductsMeta.count));
}

useEffect(() => {
  setSelectedPage(0)

  const updatedVars = formatVars(sortField, sortOrder, 0);
  getData(updatedVars);
}, [sortOrder, sortField])


  return (
    <>
      <Header />
      <Container>
        
        <FiltersSection>
          <FilterNav />
          <OrderDropdown />
        </FiltersSection>

        <Pagination selectedPage={selectedPage} totalPages={totalPages} handleOnChangePage={handleChangePage}/>

        <ProductsDisplay products={productsList} />

        <Pagination selectedPage={selectedPage} totalPages={totalPages} handleOnChangePage={handleChangePage}/>

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