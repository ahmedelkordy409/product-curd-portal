import { twMerge } from 'tailwind-merge'


export type DashboardHeadProps = {
    //children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    action?: React.ReactNode;
    title: string;
  };
  
  
  export default function DashboardHead(props: DashboardHeadProps){
  
    const classes = twMerge(
      'flex my-10',
       props.className
    )
  
    return(
      <div 
        {...props}
        className={classes}
        style={props.style}
      >
  
      <div>
         <h3 className="text-3xl font-bold dark:text-white">
           {props.title} 
         </h3>
      </div>
  
  
      <div style={{ flexGrow: 1 }}/>
  
      <div>
         {props.action}
       </div>
  
  
      </div>
    )
  }
  
  