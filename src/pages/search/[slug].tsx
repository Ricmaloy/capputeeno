import { GetServerSideProps } from "next"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { ProductsDisplay } from "../../components/ProductsDisplay"
import client from "../../graphql/client"
import SEARCH_PRODUCTS from "../../graphql/queries/searchProducts"
import { Container, Title, Subtitle } from "../../styles/pages/Search"

interface ProductsProps {
    id: string,
    name: string,
    imageUrl: string,
    priceInCents: string,
    category: string,
    count: number,
    slug: string
}

export default function Products({ 
    id, 
    name, 
    imageUrl, 
    priceInCents, 
    category, 
    count = 0,
    slug
}: ProductsProps) {
    return (
        <>
            <Header /> 
            <Container>
                <Title>Você pesquisou por: <span>{slug}</span></Title>
                <Subtitle>Encontramos <span>{count}</span> produtos para você !</Subtitle>

                <Pagination />
                <ProductsDisplay />
                <Pagination />
            </Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { slug } = params;

    const vars = {
        page: 0,
        perPage: 12,
        sortOrder: '',
        sortField: slug,
    }
    
    const data = await client.request(SEARCH_PRODUCTS, vars);

    const { allProducts } = data;
    const { count } = data._allProductsMeta;

    return {
        props: {
            ...allProducts,
            count,
            slug
        }
    }
}