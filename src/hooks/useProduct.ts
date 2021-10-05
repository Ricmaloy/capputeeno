import { useQuery } from 'react-query';
import client from "../graphql/client";
import GET_PRODUCT_BY_ID from "../graphql/queries/getProductByID";

type ProductTypes = {
    id: string,
    name: string,
    description: string,
    category: string,
    imageUrl: string,
    priceInCents: number,
    sales: number,
    createdAt: string
}

interface ProductProps {
    product: ProductTypes
}

export async function getProduct(productId: string): Promise<ProductProps> {

    const vars = {
        id: productId
    }

    const { Product } = await client.request(GET_PRODUCT_BY_ID, vars);

    return {
        product: Product
    }
}

export function useProduct(productId: string) {
    return useQuery(['@capputeeno:product', productId], () => getProduct(productId), {
        staleTime: 1000 * 60 * 10
    })
}
