import classNames from 'classnames'


export type TableHeadProps<T>  = {
    children: React.ReactNode
    className?: string;
    style?: React.CSSProperties;
}
  
  
export default function TableHead({ children, className, ...props }: TableHeadProps<HTMLTableSectionElement>) {
  
      const classes = classNames(className,'bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400');
      
      return(
        <thead 
          className={classes}
          {...props}
        >
          {  children }         
        </thead>
      )
  }
  