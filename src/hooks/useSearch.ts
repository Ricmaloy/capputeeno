import { useQuery } from 'react-query';
import client from '../graphql/client';
import SEARCH_PRODUCTS from '../graphql/queries/searchProducts';

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  priceInCents: number;
  category: string;
}

interface ProductsProps {
  products: ProductProps[];
  count: number;
}

export async function searchProducts(
  page: number,
  searchString: string,
): Promise<ProductsProps> {
  const vars = {
    page: page,
    perPage: 12,
    sortField: `${searchString}`,
    sortOrder: '',
  };

  const { allProducts, _allProductsMeta } = await client.request(
    SEARCH_PRODUCTS,
    vars,
  );

  return {
    products: allProducts,
    count: _allProductsMeta.count,
  };
}

export function useSearch(page: number, searchString: string) {
  return useQuery(
    ['@capputeeno:searches', page, searchString],
    () => searchProducts(page, searchString),
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  );
}
