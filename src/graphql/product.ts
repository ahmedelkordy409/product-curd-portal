
import { request, gql } from 'graphql-request'

export const LIST_PRODUCT = gql`
  query ProductList {
    products {
      data {
        products {
          id
          name
          category
          price
          sku
        }
        results
      }
      error
    }
  }
`


export const GET_PRODUCT = gql`
query GetProduct($productId: ID!) {
    product(id: $productId) {
      data {
        barcode
        category
        createdAt
        description
        id
        name
        price
        sku
        sale_price
        updatedAt
      }
    }
  }
`



export const CREATE_PRODUCT = gql`
 mutation CreateProduct($input: ProductDto!) {
    createProduct(input: $input) {
      data {
        id
        updatedAt
        sku
        sale_price
        price
        name
        description
        createdAt
        category
        barcode
      }
      error
    }
  }
`

export const UPDATE_PRODUCT = gql`
 mutation UpdateProduct($id: ID!, $input: ProductDto!) {
    updateProduct(id: $id, input: $input) {
      data {
        id
        name
        price
        sale_price
        sku
        updatedAt
        description
        createdAt
        category
        barcode
      }
      error
    }
  }
`

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      data
      error
    }
  }
`
