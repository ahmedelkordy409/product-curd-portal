import {  productService  } from "../services/product"
// types
import { Product, ProductDto } from '../../src/@types/products';


export const resolvers = {

    Query: {

      products: async (parent: any, args: any, contextValue: any, info: any) => {
        try {

            const data = await productService.listProduct()

            console.log("data::",data)



            return {
                data,
            }
        } catch(error) {
          return {
            error: error
          }
        }
      },

      product: async (parent: any, args: any, contextValue: any, info: any) => {
        try {


            const data = await productService.getProduct({
               id: args.id as string
            })

            return {
                data,
            }
        } catch(error) {
            return {
                error: error
            }
        }
      },

    },
    Mutation: {

        createProduct: async (parent: any, args: any, contextValue: any, info: any) => {
            try {

                const data = await productService.createProduct({
                   input: args.input as ProductDto
                })
    
                return {
                    data,
                    error: undefined
                }
            } catch(error) {

                return {
                    error: error as string
                }
            }
        },

        updateProduct: async (parent: any, args: any, contextValue: any, info: any) => {
            try {

                const data = await productService.updateProduct({
                   id: args.id,
                   input: args.input as ProductDto
                })
    
                return {
                    data,
                }
            } catch(error) {

                console.log(error)
                return {
                    error
                }
            }
        },


        deleteProduct: async (parent: any, args: any, contextValue: any, info: any) => {
            try {

                const data = await productService.deleteProduct({
                   id: args.id as string
                })
    
                return {
                    data,
                }
            } catch(error) {
                return {
                    error
                }
            }
        },

    }
};

