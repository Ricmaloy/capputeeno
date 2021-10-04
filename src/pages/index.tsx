import { GetServerSideProps } from "next";
import { useState } from "react";
import { FilterNav } from "../components/FilterNav";
import { Header } from "../components/Header";
import { OrderDropdown } from "../components/OrderDropdown";
import { Pagination } from "../components/Pagination";
import { ProductsDisplay } from "../components/ProductsDisplay";
import client from "../graphql/client";
import GET_PRODUCTS from "../graphql/queries/getProducts";

import { Container, FiltersSection } from '../styles/pages/Home'
import { formatPagesCount } from "../utils/formatPagesCount";

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
}

export default function Home({ products, count }: ProductsProps) {
  const [productsList, setProductsList] = useState(products);
  const [selectedPage, setSelectedPage] = useState(0);
  const [totalPages, setTotalPages] = useState(formatPagesCount(count));

  async function handleChangePage(newPage: number) {

    setSelectedPage(newPage);

    const updatedVars = {
        page: newPage,
        perPage: 12,
        sortOrder: '',
        sortField: {},
    }

    const { allProducts } =  await client.request(GET_PRODUCTS, updatedVars);

    setProductsList(allProducts);
}

console.log(productsList)

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


export const getServerSideProps: GetServerSideProps = async () => {

  const vars = {
      page: 0,
      perPage: 12,
  }
  
  const data = await client.request(GET_PRODUCTS, vars);

  const { allProducts } = data;
  const { count } = data._allProductsMeta;

  return {
      props: {
          products: allProducts,
          count,
      }
  }
}