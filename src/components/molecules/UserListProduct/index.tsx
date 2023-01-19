// @
import TableRow from '@ui-framework/TableRow'
import TableHead from '@ui-framework/TableHead'
import TableCell from '@ui-framework/TableCell'



// ----------------------------------------------------------------------

type UserListProductProps = {
  //order: 'asc' | 'desc';
  //orderBy: string;
 // rowCount: number;
  headLabel: any[];
  //numSelected: number;
  //onRequestSort: (id: string) => void;
 // onSelectAllClick: (checked: boolean) => void;
};

export default function UserListProduct({
  //order,
 // orderBy,
 // rowCount,
  headLabel,
  //numSelected,
 // onRequestSort,
 // onSelectAllClick,
}: UserListProductProps) {
  return (
    <TableHead>
      <TableRow>
       {/* <TableCell>
                #
        </TableCell>
      */}
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            component="th"
           // align={headCell.alignRight ? 'right' : 'left'}
           // sortDirection={orderBy === headCell.id ? order : false}
          >
              {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}