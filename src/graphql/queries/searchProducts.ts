const SEARCH_PRODUCTS = /* GraphQL */ `
  query GET_PRODUCTS(
    $page: Int
    $perPage: Int
    $sortField: String
    $sortOrder: String
  ) {
    allProducts(
      page: $page
      perPage: $perPage
      sortOrder: $sortOrder
      filter: { name: $sortField }
    ) {
      id
      name
      imageUrl: image_url
      priceInCents: price_in_cents
      category
    }
    _allProductsMeta(
      perPage: $perPage
      page: $page
      filter: { name: $sortField }
    ) {
      count
    }
  }
`;

export default SEARCH_PRODUCTS;
