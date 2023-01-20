import { useMemo } from 'react';
import Link from 'next/link'
import { useTable } from 'react-table';
//
import { useQuery } from 'react-query';
// services
import { listProduct } from '@/services/product';
import { Icon } from '@iconify/react';
// components
import AppLayout from '@/templates/AppLayout'
import DashboardHead  from '@/organisms/DashboardHead'
import LinkButton from '@/atoms/LinkButton'
//import Table from '@ui-framework/Table'
import TableSkeleton from '@ui-framework/TableSkeleton'
import Card from '@ui-framework/Card'
import ProductControl  from '@/molecules/ProductControl';

// @types
import { Product } from '@/types/products'
// path
import { Table, Button,Modal, Dropdown } from 'flowbite-react'

//<TablePagination />



export const COLUMNS = [
  {
      Header: 'Products Name',
      accessor: 'name',
  },
  {
      Header: 'Category',
      accessor: 'category',
  },
  {
      Header: 'Price',
      accessor: 'price',
  },
  {
    Header: 'Sku',
    accessor: 'sku',
  },
];



export default function ProductPage(){

   const { 
     isLoading,
     isError,
     data,
     error: serverError
    } = useQuery('products', listProduct)


    const columns = useMemo(() => COLUMNS, []);


    const { 
      getTableProps, 
      getTableBodyProps, 
      headerGroups,
      rows, 
      prepareRow
     } = useTable({ columns, data: data?.products || [] });


     // TODO; add pagination <TablePagination />
     // TODO; add search and filter  <TableToolBar />
     // TODO; custom table styles

return(
  <AppLayout>
        
    <DashboardHead
      title="Dashboard"
      action={
             <LinkButton 
                style={{
                  backgroundColor: '#f59e0b',
                }}
                href={'/product/create'} 
                icon={<Icon icon="uil:create-dashboard" fontSize={25}/>}
              >
                  Create
              </LinkButton>
      }
    />


    <Card>

      <Table 
        {...getTableProps()}
        className={isLoading ? 'animate-pulse' : ''}
      >


        <Table.Head {...headerGroups}>
            {headerGroups[0].headers.map((column) => (
                  <Table.HeadCell {...column.getHeaderProps()} key={column.id} className='py-2'>
                    {column.render('Header')}
                  </Table.HeadCell>
              ))}

                  <Table.HeadCell>
                    {""}
                  </Table.HeadCell>
        </Table.Head>



      { isLoading && (
        <Table.Body {...getTableBodyProps()}>
          <TableSkeleton 
            col={5}
            row={5}
          />
        </Table.Body>
      )}

      { !isLoading && !isError && (
      <Table.Body {...getTableBodyProps()}>

                          {rows.map((row) => {
                              prepareRow(row);
                              return (
                                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" {...row.getRowProps()} key={row.id}>
                                      {row.cells.map((cell, index) => {
                                          return (
                                            <Table.Cell  className='py-2'  {...cell.getCellProps()} key={index}>
                                                  {cell.render('Cell')}
                                            </Table.Cell> 
                                          );
                                      })}

                                     <Table.Cell>
                                      <ProductControl 
                                        product={row.original as Product}
                                      />
                                     </Table.Cell>

                                  </Table.Row>
                              );
                          })}

      </Table.Body>
      )}



      {/** error table */}

      { isError && (
        <Table.Body {...getTableBodyProps()}>
          <Table.Row>

            <Table.Cell colSpan={5}>
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {'Something went wrong'}

                  {/* refetch the request */}
                  <button
                    className="text-blue-500 underline"
                  //  onClick={() => refetch()}
                  >
                    {'Try again'}
                  </button>

                </p>
              </div>
            </Table.Cell>

          </Table.Row>
        </Table.Body>
      )}


      {/** empty table */}
      { !isLoading && !isError && rows.length === 0 && (
        <Table.Body {...getTableBodyProps()}>
          <Table.Row>

            <Table.Cell colSpan={5}>
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  No data found
                </p>
              </div>
            </Table.Cell>

          </Table.Row>
        </Table.Body>
      )}


      </Table>


    </Card>
  </AppLayout>
 )
}
