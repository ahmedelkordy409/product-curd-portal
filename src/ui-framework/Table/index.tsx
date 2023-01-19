import classNames from 'classnames'

export type TableBodyProps<T>  = {
    children: React.ReactNode
    className?: string;
    style?: React.CSSProperties;
    loading?: boolean;
}
  


export default function TableBody({ 
  children, 
  className, 
  loading,
  ...props
 }: TableBodyProps<HTMLTableElement>) {
  

      const loadingClass = loading ? 'animate-pulse' : ''
      
      const classes = classNames(className,`w-full text-left text-sm text-gray-500 dark:text-gray-400 ${loadingClass}`);

      return(
        <table 
          className={classes}
          {...props}
        >
          {  children }         
        </table>
      )
  }
  