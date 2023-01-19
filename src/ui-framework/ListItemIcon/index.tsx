 

export type ListItemIconProps = {
  children: React.ReactNode
  className?: string;
} & React.HTMLAttributes<HTMLElement>


export default function ListItemIcon({ children, className, ...props }: ListItemIconProps) {

    return(
        <div
          style={{
            minWidth: '35px',
            flexShrink: 0,
            display: 'inline-flex'
          }}   
          className={className} 
          {...props}
        >
            {  children }         
        </div>
    )
}
