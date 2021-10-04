import { ProductCard } from '../ProductCard';
import { Container } from './styles';

interface ProductProsps {
    id: string,
    name: string,
    imageUrl: string,
    priceInCents: number,
    category: string,
}

interface ProductsDisplayProps {
    products: ProductProsps[]
}

export function ProductsDisplay({products}: ProductsDisplayProps) {
    return (
        <Container>
            {
                products.map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image_url={product.imageUrl}
                            name={product.name}
                            price_in_cents={product.priceInCents}
                        />
                    )
                })
            }
        </Container>
    )
}