import Link from 'next/link';
//
import ActiveLink from './../ActiveLink';

export type ListItemLinkProps = {
  children: React.ReactNode;
  secondaryAction?: React.ReactNode;
  className?: string;
  activeClassName:string;
  href: string;
} 


export default function ListItemLink({
  children,
  secondaryAction,
  className,
  ...props
}: ListItemLinkProps) {


    return(
        <li>

            <ActiveLink 
                  className={`relative flex items-center p-4 text-white ${className as string}`}
                  {...props}
             >

                {children}

                {secondaryAction && (
                  <div className="absolute right-[16px] top-[50%] translate-y-[-50%]">
                    {secondaryAction}
                  </div>
                )}


            </ActiveLink>

        </li>
    )
}