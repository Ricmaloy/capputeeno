import { useQuery } from 'react-query';
import client from '../graphql/client';
import UNIQUE_GET_PRODUCTS from '../graphql/queries/getProducts';

type FilterOptionProps = 'all' | 't-shirts' | 'mugs';
type OrderOptionProps = 'news' | 'ascending' | 'descending' | 'topseller' | 'none';

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

export async function getProducts(sortField: FilterOptionProps, sortOrder: OrderOptionProps, page: number): Promise<ProductsProps> {

    const formatOrderList = {
        'news' : [ 'created_at', 'DESC' ],
        'topseller' : [ 'sales', 'DESC' ],
        'descending' : [ 'price_in_cents', 'DESC' ],
        'ascending' : [ 'price_in_cents', 'ASC' ]
    }

    const formatedFilter = sortField === 'all' ? {} : { "category": `${sortField}` };
    const formatedOrder = sortOrder === 'none' ? '' : [...formatOrderList[`${sortOrder}`]];

    const vars = {
        page: page,
        perPage: 12,
        sortFilter: formatedFilter,
        sortField: formatedOrder[0],
        sortOrder: formatedOrder[1],
    }

    const { allProducts, _allProductsMeta } = await client.request(UNIQUE_GET_PRODUCTS, vars);

    console.log(allProducts)

    return {
        products: allProducts,
        count: _allProductsMeta.count
    }
}

export function useProducts(sortField: FilterOptionProps, sortOrder: OrderOptionProps, page: number) {
    return useQuery(['@capputeeno:products', sortField, sortOrder, page], () => getProducts(sortField, sortOrder, page), {
        staleTime: 1000 * 60 * 10
    })
}