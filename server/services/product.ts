import prisma from '@/lib/prisma'
import { Prisma } from "@prisma/client";
// types
import { Product, ProductDto } from './../../src/@types/products';


export class ProductService  {

    /**
     * @desc user add address
     * @param accessToken 
     * @returns user
     */
    public async createProduct({
        input
    }:{ 
        input: ProductDto
    }){
        try { 


            const product = await prisma.product.create({
                data: {
                  name: input.name,
                  description: input.description,
                  category: input.category,
                  price: Number(input.price),
                  sale_price: Number(input.sale_price),
                  sku: input.sku,
                  barcode: input.barcode,
                },
            });
          

            return product
                

        } catch (error){

            console.log('create product error', error)

            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw  "Note with that title already exists"
                }
              }

              throw "Internal Error"

        }
    }




    /**
     * @desc update product 
     * @param id string,
     * @param product Product,
     * @returns Product
     */
     public async updateProduct({
        id,
        input
     }:{ 
        id: string
        input: ProductDto;
     }){
        try { 

            const updatedProduct = await prisma.product.update({
                where: { id},
                data: {
                    name: input.name,
                    description: input.description,
                    category: input.category,
                    price: Number(input.price),
                    sale_price: Number(input.sale_price),
                    sku: input.sku,
                    barcode: input.barcode,
                },
            });
          
            return  updatedProduct

        } catch (error){
              console.log('update product error', error)

              if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                  throw "Note with that title already exists"
                }
              }

              throw "Internal Error"

        }
     }


        

    /**
     * @desc user add address
     * @param accessToken 
     * @returns user
     */
    public async deleteProduct({
        id
    }:{ 
        id: string
    }){
        try { 

            await prisma.product.delete({ where: { id } });

            return "success"

          } catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                    throw "Not Found"
                }
              }
            
              throw "Internal Error"
        }
    }



        /**
     * @desc user add address
     * @param accessToken 
     * @returns user
     */
        public async listProduct(){
            try { 

                const page =  1;

                const limit = 1000;

                const skip = (page - 1) * limit;
            
                const products = await prisma.product.findMany({ skip, take: limit });
            
                return {
                  results: products.length,
                  products,
                };

              } catch (e){

                throw "Internal Error"

            }
        }
    

        

    /**
     * @desc get product by id
     * @param accessToken 
     * @returns user
     */
    public async getProduct({
        id
    }:{ 
        id: string
    }){
        try { 

           const product = await prisma.product.findFirst({
               where: { id: id },
           });
        
            if (!product) {
                throw  "NOT_FOUND"
            }
        
            return product
            
          } catch (error){

            if (error === "NOT_FOUND") {
                throw  "Not Found"
            }

            throw "Internal Error"
        }
    }







}


export const productService = new ProductService();