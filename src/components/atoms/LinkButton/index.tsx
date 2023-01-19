import Link, { LinkProps } from 'next/link'
import { twMerge } from 'tailwind-merge'


export type LinkButtonProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
} & LinkProps;
  
  
export default function LinkButton({ icon, children , ...props }: LinkButtonProps){
  
    const classes = twMerge(
      'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex items-center justify-center px-5 py-2 text-center font-medium focus:z-10 rounded-lg',
       props.className
    )


    return(
      <Link 
        {...props}
        className={classes}
        style={props.style}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        {icon && (
          <span className="mr-2">{icon}</span>
        )}

        {children}
      </Link>
    )
  }
  
  
  