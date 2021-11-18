import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { dehydrate, DehydratedState } from 'react-query/hydration';
import { QueryClient } from 'react-query';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { ProductsDisplay } from '../../components/ProductsDisplay';

import { formatPagesCount } from '../../utils/formatPagesCount';
import { searchProducts, useSearch } from '../../hooks/useSearch';
import { Container, Title, Subtitle } from '../../styles/pages/Search';
import { ProductsCardDisplayShimmer } from '../../components/Shimmers/ProductsDisplayShimmer';

export default function Products() {
  const router = useRouter();
  const { slug } = router.query;
  
  const { data, isLoading, isFetching, error } = useSearch(0, `${slug}`);
  
  return (
    <>
    <Head>
    <title>Busca | capputeeno</title>
    </Head>
    <Header /> 
    <Container>
    <Title>Você pesquisou por: <span>{slug}</span></Title>
    {
      isLoading ? (
        <ProductsCardDisplayShimmer />
        ) : error ? (
          <Subtitle>Ops ! Algo deu errado, <span>tente novamente.</span></Subtitle>
          ) : data.products.length >  0 ? (
            <>
            <Subtitle>Encontramos <span>{data.count}</span> produtos para você !</Subtitle>
            
            <Pagination totalPages={formatPagesCount(data.count)} />
            <ProductsDisplay products={data.products} />
            <Pagination totalPages={formatPagesCount(data.count)} />
            </>
            ) : (
              <Subtitle>Não encontramos nenhum que condiz com sua busca, <span>tente algo diferente.</span></Subtitle>
              )
            }
            </Container>
            </>
            )
          }
          
          export const getServerSideProps: GetServerSideProps = async ({params}): Promise<{
            props: { dehydratedState: DehydratedState };
          }> => {
            const { slug } = params;
            const queryClient = new QueryClient();
            await queryClient.prefetchQuery('@capputeeno:searches', () => searchProducts(0, `${slug}`));
            return { props: { dehydratedState: dehydrate(queryClient) } };
          };