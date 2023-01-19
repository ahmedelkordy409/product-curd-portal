
import Link from 'next/link'
// icons
import { Icon } from '@iconify/react';
// components
import ProductDelete  from '@/molecules/ProductDelete'
// @types
import { Product } from '@/types/products'


export type ProductControlProps = {
    product: Product
}
  
export default function ProductControl({ product }: ProductControlProps) {


return(
    <div className="flex items-center space-x-4">

        <Link
          href={`/product/${product.id}`}
          passHref
        >
        <Icon icon="tabler:edit" fontSize={25}/>
        </Link>

        <ProductDelete product={product} />
    </div>
 )
}

  