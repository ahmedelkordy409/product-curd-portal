
export type ListItemProps = {
  children: React.ReactNode;
  secondaryAction?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>



export default function ListItem({
  children,
  secondaryAction,
  className,
  ...props
}: ListItemProps) {


    return(
        <li 
          className={`relative flex items-center p-4 text-white ${className as string}`}
          {...props}
         >

            {children}

            {secondaryAction && (
              <div className="absolute right-[16px] top-[50%] translate-y-[-50%]">
                {secondaryAction}
              </div>
            )}

        </li>
    )
}