import { PaginationShimmer } from '../PaginationShimmer';
import { ProductCardShimmer } from '../ProductCardShimmer';
import { Container } from './styles';

export function ProductsCardDisplayShimmer() {
  return (
    <>
      <PaginationShimmer />
      <Container>
        <ProductCardShimmer />
        <ProductCardShimmer />
        <ProductCardShimmer />
        <ProductCardShimmer />
        <ProductCardShimmer />
        <ProductCardShimmer />
        <ProductCardShimmer />
        <ProductCardShimmer />
        <ProductCardShimmer />
        <ProductCardShimmer />
        <ProductCardShimmer />
        <ProductCardShimmer />
      </Container>
    </>
  );
}
