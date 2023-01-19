import classNames from 'classnames'


export type TableCellProps<T>  = {
    children: React.ReactNode
    className?: string;
    component?: React.ElementType;
    style?: React.CSSProperties;
}
  
  
export default function TableCell({ 
  children, 
  className, 
  component: Component = "td",
  ...props
 }: TableCellProps<HTMLTableCellElement>) {
  
      const classes = classNames(className,'px-6 py-4');
      



      return(
        <Component 
          className={classes}
          {...props}
        >
          {  children }         
        </Component>
      )
  }
  