import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import client from '../../graphql/client';
import GET_PRODUCT_BY_ID from '../../graphql/queries/getProductByID';
import { dehydrate, DehydratedState } from 'react-query/hydration';
import { QueryClient } from 'react-query';

import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';

import { formatPrice } from '../../utils/formatPrice';
import { FiShoppingBag } from 'react-icons/fi'
import {  Container, Content, Descriptions, Text, AddCartButton } from '../../styles/pages/Product';
import { getProduct, useProduct } from '../../hooks/useProduct';

export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading, isFetching, error } = useProduct(`${id}`);

    return (
        <>  
            <Header />
            <Container>
            
            <BackButton />

            {
                isLoading ? (
                    <h1>Carregando</h1>
                ) : error ? (
                    <Content>
                        <Text
                            fontSize='3.2rem'
                            fontWeight='300'
                            lineHeight='4.8rem'
                            color='#41414d'
                            marginTop='1.2rem'
                        >
                            Não foi possível encontrar o produto!
                        </Text>
                    </Content>
                ) : (
                    <Content>
                        <Image
                            src={`${data.product.imageUrl}`}
                            alt={`${data.product.description}`}
                            width={640}
                            height={580}
                            objectFit='fill'
                        />
                        <Descriptions>
                            <Text
                                fontSize='1.6rem'
                                fontWeight='400'
                                lineHeight='2.4rem'
                                color='#41414d'
                            >
                                {data.product.category === 'mugs' ? 'Caneca' : 'Camiseta'}
                            </Text>
                            <Text
                                fontSize='3.2rem'
                                fontWeight='300'
                                lineHeight='4.8rem'
                                color='#41414d'
                                marginTop='1.2rem'
                            >
                                {data.product.name}
                            </Text>
                            <Text
                                fontSize='2rem'
                                fontWeight='600'
                                lineHeight='3rem'
                                color='#09090A'
                                marginTop='0.4rem'
                            >
                                {formatPrice(data.product.priceInCents)}
                            </Text>
                            <Text
                                fontSize='1.2rem'
                                fontWeight='400'
                                lineHeight='1.8rem'
                                color='#09090A'
                                marginTop='2.4rem'
                            >
                                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
                            </Text>
                            <Text
                                fontSize='1.6rem'
                                fontWeight='500'
                                lineHeight='24px'
                                color='#737380'
                                transform='uppercase'
                                marginTop='5.8rem'
                            >
                                Descrição
                            </Text>
                            <Text
                                fontSize ='14px'
                                fontWeight='400'
                                lineHeight ='21px'
                                color='#41414d'
                                marginTop='0.8rem'
                            >
                                {data.product.description}
                            </Text>
                            <AddCartButton>
                                <FiShoppingBag />
                                ADICIONAR AO CARRINHO
                            </AddCartButton>
                        </Descriptions>
                    </Content>
                )   
            }
            </Container>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }): Promise<{
    props: { dehydratedState: DehydratedState };
  }> => {
    const { id } = params;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery('@capputeeno:product', () => getProduct(`${id}`));
    return { props: { dehydratedState: dehydrate(queryClient) } };
};