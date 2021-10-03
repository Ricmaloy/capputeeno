import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import client from '../../graphql/client';
import GET_PRODUCT_BY_ID from '../../graphql/queries/getProductByID';
import { FiShoppingBag } from 'react-icons/fi'
import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';

import { 
    Container, 
    Content, 
    Descriptions,
    Text,
    AddCartButton
} from '../../styles/pages/Product';
import { formatPrice } from '../../utils/formatPrice';

interface ProductProps {
    id: string,
    name: string,
    description: string,
    category: string,
    imageUrl: string,
    priceInCents: number,
    sales: number,
    createdAt: string
}

export default function Product({
    id,
    name,
    description,
    category,
    imageUrl,
    priceInCents,
    sales,
    createdAt
}: ProductProps) {
    return (
        <>  
            <Header />
            <Container>
            
            <BackButton />

            {
                id ? (
                    <Content>
                        <Image
                            src={`${imageUrl}`}
                            alt={`${description}`}
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
                                {category === 'mugs' ? 'Caneca' : 'Camiseta'}
                            </Text>
                            <Text
                                fontSize='3.2rem'
                                fontWeight='300'
                                lineHeight='4.8rem'
                                color='#41414d'
                                marginTop='1.2rem'
                            >
                                {name}
                            </Text>
                            <Text
                                fontSize='2rem'
                                fontWeight='600'
                                lineHeight='3rem'
                                color='#09090A'
                                marginTop='0.4rem'
                            >
                                {formatPrice(priceInCents)}
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
                                {description}
                            </Text>
                            <AddCartButton>
                                <FiShoppingBag />
                                ADICIONAR AO CARRINHO
                            </AddCartButton>
                        </Descriptions>
                    </Content>
                ) : (
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


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params;

    const { Product } = await client.request(GET_PRODUCT_BY_ID, { "id": id })

    return {
        props: {
            ...Product
        }
    }
}