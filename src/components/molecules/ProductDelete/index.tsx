import { Icon } from '@iconify/react'
// react query
import { useMutation } from 'react-query'
import queryClient from '@/lib/queryClient'
// @types
import { Product } from '@/types/products'
// services
import { deleteProduct } from '@/services/product'
// components
import { Spinner } from 'flowbite-react'
import Button from '@/ui-framework/Button'


export type ProductDeleteProps = {
  product: Product
}

export default function ProductDelete({ product }: ProductDeleteProps) {

  // delete product
  const { mutateAsync, isLoading } = useMutation(
    () => deleteProduct(product.id as any),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products')
      },
    }
  )


  return(

    <>
      {
        isLoading && <Spinner aria-label="Default status example" />
      }


{!isLoading && <button
      onClick={() => mutateAsync()}
    >


      <Icon
          icon="mingcute:delete-2-line"
          fontSize={25}
          color='error'
        />

    </button>

}

    
    </>

  )
}
