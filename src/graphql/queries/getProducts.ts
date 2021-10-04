const GET_PRODUCTS = /* GraphQL */ `
    query GET_PRODUCTS($page: Int, $perPage: Int, $sortField: ProductFilter, $sortOrder: String){
        allProducts(page: $page, perPage: $perPage, sortOrder: $sortOrder, filter: $sortField) {
            id
            name
            imageUrl: image_url
            priceInCents: price_in_cents
            category
        }
        _allProductsMeta(perPage: $perPage, page: $page, filter: $sortField) {
            count
        }
    }
      
`

export default GET_PRODUCTS;