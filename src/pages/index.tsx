import { FilterNav } from "../components/FilterNav";
import { Header } from "../components/Header";
import { OrderDropdown } from "../components/OrderDropdown";
import { Pagination } from "../components/Pagination";
import { ProductsDisplay } from "../components/ProductsDisplay";

import { Container, FiltersSection } from '../styles/pages/Home'

const products = [
  {
  "id": "e6fd1296-060c-4122-a4db-f48238e68131",
  "name": "Caneca Black Ring",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
  "priceInCents": 8020,
  "category": "mugs"
  },
  {
  "id": "60200d52-e1e9-4aba-9778-7a5d25edb589",
  "name": "Caneca preto fosco",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg",
  "priceInCents": 4642,
  "category": "mugs"
  },
  {
  "id": "3f69242b-ad44-4b48-af9e-46ff392b6bbb",
  "name": "Camiseta not today.",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
  "priceInCents": 8904,
  "category": "t-shirts"
  },
  {
  "id": "aac35e0a-f553-483a-a149-3efb02d3a5f7",
  "name": "Caneca The Grounds",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
  "priceInCents": 3369,
  "category": "mugs"
  },
  {
  "id": "8ada65c5-d8d2-46b0-9fe2-0dd31ed137ed",
  "name": "Camiseta DREAMER",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
  "priceInCents": 5773,
  "category": "t-shirts"
  },
  {
  "id": "d94d7c40-c408-4c93-a5f5-28ec0bb6d097",
  "name": "Camiseta Ramones",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
  "priceInCents": 4736,
  "category": "t-shirts"
  },
  {
  "id": "606e2290-67d0-4c4c-94a7-64442d70f15a",
  "name": "Caneca Decaf! P&Co",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
  "priceInCents": 7735,
  "category": "mugs"
  },
  {
  "id": "0130aad8-ef40-4131-a79c-cbb29080ac81",
  "name": "Camiseta Broken Saints",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
  "priceInCents": 5085,
  "category": "t-shirts"
  },
  {
  "id": "c6c406b6-ba9d-45bd-a529-6a622f18593b",
  "name": "Camiseta Outcast",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
  "priceInCents": 8866,
  "category": "t-shirts"
  },
  {
  "id": "206462da-7a49-4a55-8355-3d8c074fde8e",
  "name": "Caneca Never settle",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
  "priceInCents": 7223,
  "category": "mugs"
  },
  {
  "id": "55c93780-c1be-49d2-a815-26a026d7707a",
  "name": "Caneca de cerâmica rústica",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
  "priceInCents": 5611,
  "category": "mugs"
  },
  {
  "id": "fc0dc451-179c-411e-9e2f-fa03e5b261f5",
  "name": "Camiseta evening",
  "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
  "priceInCents": 5850,
  "category": "t-shirts"
  }
]

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

        <ProductsDisplay products={products} />

        <Pagination />

      </Container>
    </>
  )
}
