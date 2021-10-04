import { GetServerSideProps } from "next"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { ProductsDisplay } from "../../components/ProductsDisplay"
import client from "../../graphql/client"
import SEARCH_PRODUCTS from "../../graphql/queries/searchProducts"
import { Container, Title, Subtitle } from "../../styles/pages/Search"

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
    slug: string
}

export default function Products({ 
    products,
    count = 0,
    slug
}: ProductsProps) {
    
    return (
        <>
            <Header /> 
            <Container>
                <Title>Você pesquisou por: <span>{slug}</span></Title>
                {
                    products.length > 0 ? (
                        <>
                            <Subtitle>Encontramos <span>{count}</span> produtos para você !</Subtitle>

                            <Pagination />
                            <ProductsDisplay products={products} />
                            <Pagination />
                        </>
                    ) : (
                        <Subtitle>Não encontramos nenhum que condiz com sua busca, <span>tente algo diferente.</span></Subtitle>
                    )
                }
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
            products: allProducts,
            count,
            slug
        }
    }
}