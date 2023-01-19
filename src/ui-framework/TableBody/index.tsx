import classNames from 'classnames'


export type TableBodyProps<T>  = {
    children: React.ReactNode
    className?: string;
    style?: React.CSSProperties;
}
  



export default function TableBody({ 
  children, 
  className, 
  ...props
 }: TableBodyProps<HTMLTableSectionElement>) {
  
      const classes = classNames(className,'divide-y');
      

      return(
        <tbody 
          className={classes}
          {...props}
        >
          {  children }         
        </tbody>
      )
  }
  