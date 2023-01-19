import classNames from 'classnames'


export type TableRowProps<T>  = {
    children: React.ReactNode
    className?: string;
    style?: React.CSSProperties;
}
  
  
export default function TableRow({ children, className, ...props }: TableRowProps<HTMLTableCellElement>) {
  
      const classes = classNames(className,'bg-white dark:border-gray-700 dark:bg-gray-800');

      return(
        <tr 
          className={classes}
          data-testid="table-row-element"
          {...props}
        >
          {  children }         
        </tr>
      )
  }
  