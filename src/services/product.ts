import client from '@/lib/graphql-request';
// @types
import { Product, ProductDto  } from '@/types/products'
// @graphql
import { 
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  CREATE_PRODUCT,
  GET_PRODUCT,
  LIST_PRODUCT
} from '@/graphql/product';


/**
 * 
 */
export async function createProduct(productDto: ProductDto) {
   try {


    const productInput = {
      barcode: productDto.barcode,
      category: productDto.category,
      description: productDto.description,
      name: productDto.name,
      price: Number(productDto.price),
      sale_price: Number(productDto.sale_price),
      sku: productDto.sku
    }

    const data = await client.request( CREATE_PRODUCT, {
           input: productInput
     });

    return data.createProduct

  } catch (err) {
    console.log(err);
    throw err;
  }

}




/**
 * 
 */
export async function deleteProduct(id: Product)  {
  try {

    const data = await client.request( DELETE_PRODUCT, {
          id 
     });

    return data.deleteProduct

  } catch (err) {
    console.log(err);
    throw err;
  }
}



/**
 * 
 */
export async function updateProduct({
  id,
  productDto
}:{
  id: string,
  productDto: ProductDto
}) {
  try {

    const productInput = {
      barcode: productDto.barcode,
      category: productDto.category,
      description: productDto.description,
      name: productDto.name,
      price: Number(productDto.price),
      sale_price: Number(productDto.sale_price),
      sku: productDto.sku
    }

    const data = await client.request( UPDATE_PRODUCT, {
          id,
          input: productInput
     });

    return data.updateProduct

  } catch (err) {
    console.log(err);
    throw err;
  }

}


/**
 * 
 */
export async function listProduct() {

  try {

    // to test loading 
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await client.request(LIST_PRODUCT);

    return data.products.data

  } catch (err) {
    console.log(err);
    throw err;
  }

}


/**
 * 
 */
export async function getProduct(id: string)  {
  try {


    const data = await client.request( GET_PRODUCT, {
          productId: id
     });

    console.log(data.product.data.product, "data.product.data.product")

    return data.product.data

  } catch (err) {
    console.log(err);
    throw err;
  }

}

