

export type ChipProps = {
    color: 'default'|'primary'|'secondary'|'error'|'info'|'success'|'warning';
    label: string;
}


export default function Chip( props:ChipProps ){

    const { color, label } = props;

    return(
      <span> {label} </span>
    )
}

