

type ListProps = {
  children: React.ReactNode;
  disableGutters?: boolean;
} & React.HTMLAttributes<HTMLElement>



export default function List( props: ListProps) {

    return(
        <ul 
          style={{
            position: 'relative',
            paddingTop: '8px',
            paddingBottom: '8px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
            paddingLeft: props.disableGutters ? '0' : '16px',
            paddingRight: props.disableGutters ? '0' : '16px',
            maxWidth: '105ch',
            minWidth: '0',
            ...props.style
          }}
        {...props}
        >
            {props.children}
        </ul>
    )
}