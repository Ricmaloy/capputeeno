const UPDATE_PRODUCT_SALES = /* GraphQL */ `
    mutation UPDATE_PRODUCT_SALE($id: ID!, $sales: Int!) {
        updateProduct(
            id: $id, 
            sales: $sales
        ){
            id
            name
            sales
        }
    }
`

export default UPDATE_PRODUCT_SALES;