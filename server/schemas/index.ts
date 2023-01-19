
export const typeDefs = `#graphql


  type Product {
    id: String! 
    name: String!  
    description: String!
    category: String!
    price: Int!
    sale_price: Int!
    sku: String!
    barcode:  String!
    createdAt: String
    updatedAt: String
  }


  type  ProductListFilter {
    limit: Int
    page: Int
  }


  type ProductListPagination {
    results: Int
    products: [Product!]!
  }

  type ProductListResponse {
    data: ProductListPagination!
    error: String
  }

  type ProductGetResponse {
    data: Product
    error: String
  }


  type ProductCreateResponse {
    data: Product
    error: String
  }


  type ProductDeleteResponse {
    data: String
    error: String
  }


  type ProductUpdateResponse {
    data: Product
    error: String
  }

  
  type Query {
    products: ProductListResponse!
    product(id: ID!): ProductGetResponse!
  }


  input ProductDto {
    name: String! 
    description: String!
    category: String!
    price:  Int!
    sale_price: Int!
    sku: String!
    barcode:  String!
  }


  type Mutation {

    createProduct(input: ProductDto!): ProductCreateResponse!

    updateProduct(id: ID!, input: ProductDto!): ProductUpdateResponse

    deleteProduct(id: ID!): ProductDeleteResponse!

  }

`;

