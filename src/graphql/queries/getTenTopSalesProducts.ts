const GET_TOP_TEN_SALES_PRODUCTS = /* GraphQL */ `
  {
    allProducts(page: 0, perPage: 10, sortField: "sales", sortOrder: "DESC") {
      id
    }
  }
`;

export default GET_TOP_TEN_SALES_PRODUCTS;
