import { ProductCard } from '../ProductCard';
import { Container } from './styles';

const products = [
    {
    "id": "e6fd1296-060c-4122-a4db-f48238e68131",
    "name": "Caneca Black Ring",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
    "price_in_cents": 8020
    },
    {
    "id": "60200d52-e1e9-4aba-9778-7a5d25edb589",
    "name": "Caneca preto fosco",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg",
    "price_in_cents": 4642
    },
    {
    "id": "3f69242b-ad44-4b48-af9e-46ff392b6bbb",
    "name": "Camiseta not today.",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
    "price_in_cents": 8904
    },
    {
    "id": "aac35e0a-f553-483a-a149-3efb02d3a5f7",
    "name": "Caneca The Grounds",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
    "price_in_cents": 3369
    },
    {
    "id": "8ada65c5-d8d2-46b0-9fe2-0dd31ed137ed",
    "name": "Camiseta DREAMER",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg",
    "price_in_cents": 5773
    },
    {
    "id": "d94d7c40-c408-4c93-a5f5-28ec0bb6d097",
    "name": "Camiseta Ramones",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
    "price_in_cents": 4736
    },
    {
    "id": "606e2290-67d0-4c4c-94a7-64442d70f15a",
    "name": "Caneca Decaf! P&Co",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
    "price_in_cents": 7735
    },
    {
    "id": "0130aad8-ef40-4131-a79c-cbb29080ac81",
    "name": "Camiseta Broken Saints",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
    "price_in_cents": 5085
    },
    {
    "id": "c6c406b6-ba9d-45bd-a529-6a622f18593b",
    "name": "Camiseta Outcast",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
    "price_in_cents": 8866
    },
    {
    "id": "206462da-7a49-4a55-8355-3d8c074fde8e",
    "name": "Caneca Never settle",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
    "price_in_cents": 7223
    },
    {
    "id": "55c93780-c1be-49d2-a815-26a026d7707a",
    "name": "Caneca de cerâmica rústica",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
    "price_in_cents": 5611
    },
    {
    "id": "fc0dc451-179c-411e-9e2f-fa03e5b261f5",
    "name": "Camiseta evening",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
    "price_in_cents": 5850
    }
]

export function ProductsDisplay() {
    return (
        <Container>
            {
                products.map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image_url={product.image_url}
                            name={product.name}
                            price_in_cents={product.price_in_cents}
                        />
                    )
                })
            }
        </Container>
    )
}