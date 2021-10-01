import { FilterNav } from "../components/FilterNav";
import { Header } from "../components/Header";
import { OrderDropdown } from "../components/OrderDropdown";
import { Pagination } from "../components/Pagination";
import { ProductsDisplay } from "../components/ProductsDisplay";

import { Container, FiltersSection } from '../styles/pages/Home'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        
        <FiltersSection>
          <FilterNav />
          <OrderDropdown />
        </FiltersSection>

        <Pagination />

        <ProductsDisplay />

        <Pagination />

      </Container>
    </>
  )
}
