// 
import Table from '@ui-framework/Table'
import TableRow from '@ui-framework/TableRow'
import TableHead from '@ui-framework/TableHead'
import TableCell from '@ui-framework/TableCell'
import TableBody from '@ui-framework/TableBody'
import Card from '@ui-framework/Card'



export type TableSkeletonProps = {
    col: number;
    row: number;
}


export default function TableSkeleton({
    col,
    row
}: TableSkeletonProps) {

    return(
     <>
     {  [...Array(row)].map((e, i) => (
        <TableRow key={i}>
            { [...Array(col)].map((e, i) => (
                <TableCell key={i}>
                    <div className="md:h-10 bg-gray-200  dark:bg-gray-700 w-full rounded-md	" />
                </TableCell>
            ))
            }
       </TableRow>
     ))

     }

     </>
    )
}