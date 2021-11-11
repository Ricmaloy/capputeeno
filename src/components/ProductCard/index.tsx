import Image from 'next/image'
import Link from 'next/link';
import { api } from '../../services/axios/api';
import { queryClient } from '../../services/react-query/queryClient';
import { formatPrice } from '../../utils/formatPrice';
import { CardContainer, Details, Title, Divider, Price } from './styles';


interface ProductCardProps {
    id: string,
    name: string,
    image_url: string,
    price_in_cents: number
}

export function ProductCard({id, name, image_url, price_in_cents}: ProductCardProps) {

    async function handlePrefetchProduct(productId: string) {
        await queryClient.prefetchQuery(['@capputeeno:product', productId], async () => {
            const response = await api.get(`products/${productId}`);

            return response.data
        }, {
            staleTime: 1000 * 60 * 10
        })
    }

    return (
        <Link href={`/products/${id}`} passHref>
            <CardContainer 
                as='button' 
                onMouseEnter={() => handlePrefetchProduct(id)}
                aria-label={`product: ${name}`}
            >
                <Image 
                    src={image_url}
                    alt={`Image about the product`}
                    objectFit="cover"
                    width={256}
                    height={300}
                />
                <Details>
                    <Title>{name}</Title>
                    <Divider />
                    <Price>{formatPrice(price_in_cents)}</Price>
                </Details>
            </CardContainer>
        </Link>
    )
}