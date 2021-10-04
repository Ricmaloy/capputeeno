import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"
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
    count,
    slug
}: ProductsProps) {
    const [productsList, setProductsList] = useState(products)
    const [selectedPage, setSelectedPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [resultsCount, setResultsCount] = useState(count);

    async function handleChangePage(newPage: number) {
        if(newPage === totalPages) return;

        setSelectedPage(newPage);

        const updatedVars = {
            page: newPage,
            perPage: 12,
            sortOrder: '',
            sortField: slug,
        }

        const { allProducts } =  await client.request(SEARCH_PRODUCTS, updatedVars);

        setProductsList(allProducts);
    }

    useEffect(() => {
        async function getData() {
            const { allProducts, _allProductsMeta } =  await client.request(SEARCH_PRODUCTS, {
                page: 0,
                perPage: 12,
                sortOrder: '',
                sortField: slug,
            });

            setProductsList(allProducts);
            setResultsCount(_allProductsMeta.count);
            setTotalPages(_allProductsMeta.count/5);
        }

        getData()
    }, [slug])
    
    return (
        <>
            <Header /> 
            <Container>
                <Title>Você pesquisou por: <span>{slug}</span></Title>
                {
                    productsList.length > 0 ? (
                        <>
                            <Subtitle>Encontramos <span>{resultsCount}</span> produtos para você !</Subtitle>

                            <Pagination selectedPage={selectedPage} totalPages={totalPages} handleOnChangePage={handleChangePage} />
                            <ProductsDisplay products={products} />
                            <Pagination selectedPage={selectedPage} totalPages={totalPages} handleOnChangePage={handleChangePage} />
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