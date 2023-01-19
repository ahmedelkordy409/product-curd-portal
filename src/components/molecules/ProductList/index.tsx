import Link from 'next/link'
// 
import Table from '@ui-framework/Table'
import TableRow from '@ui-framework/TableRow'
import TableHead from '@ui-framework/TableHead'
import TableCell from '@ui-framework/TableCell'
import TableBody from '@ui-framework/TableBody'
import TableSkeleton from '@ui-framework/TableSkeleton'
import Card from '@ui-framework/Card'
//
import UserListProduct  from '../UserListProduct'
// @types
import { Product } from '@/types/products'
// path


//<TablePagination />



const TABLE_HEAD = [
  { id: 'PRODUCT_NAME	', label: 'Products Name	', alignRight: false },
  { id: 'COLOR', label: 'Color', alignRight: false },
  { id: 'Category	', label: 'Category', alignRight: false },
  { id: 'Price', label: 'Price', alignRight: false },
  { id: '' },
];




export type ProductListProps = {
    products?: Product[];
    isLoading: boolean;
    error?: any
}


export default function ProductList({
  products,
  isLoading,
  error
}: ProductListProps) {


    return(
     <div>

      <Card>

       <Table 
         loading={isLoading}
        >

        {/** table head */}
        <UserListProduct
          headLabel={TABLE_HEAD}
        />

          { isLoading ? (

             <TableSkeleton 
              row={5}
              col={5}
             />

          ): (

            <TableBody>
            {!error && products && products.map((product: Product) =>(
                <TableRow key={product.id}>
                   <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {product.name}
                   </TableCell>
                    <TableCell>
                    {product.sku}
                    </TableCell>
                    <TableCell>
                    {product.category}
                    </TableCell>
                    <TableCell>
                    {product.price}
                    </TableCell>
                    <TableCell>
                       <Link
                          href={`/product/${product.id}`}
                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Edit
                        </Link>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
          )}


</Table>


</Card>


     </div>
    )
}