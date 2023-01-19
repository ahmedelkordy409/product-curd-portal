import classNames from 'classnames'


export type TableRowProps<T>  = {
    children: React.ReactNode
    className?: string;
    style?: React.CSSProperties;
    component?: React.ElementType;
}
  
  
export default function Card({ 
    children, 
    className, 
    component: Component = "div",
    ...props 
}: TableRowProps<HTMLTableCellElement>) {
  
      const classes = classNames(className,'flex rounded-lg bg-white dark:border-gray-700 dark:bg-gray-800 flex-col');

      return(
        <Component 
          className={classes}
          data-testid="table-row-element"
          style={{
            boxShadow: 'rgb(145 158 171 / 24%) 0 0 2px 0px, rgb(145 158 171 / 38%) 0px 12px 24px -4px',
            ...props.style    
          }}
          {...props}
        >
          {  children }         
        </Component>
      )
}
  