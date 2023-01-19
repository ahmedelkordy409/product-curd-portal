
export type ListItemTextProps = {
    primary: string;
    secondary?: string;
}


export default function ListItemText({
  primary,
  secondary
}: ListItemTextProps) {

    return(
        <div>
            <span className="ml-4 text-sm font-semibold">
              {primary}
            </span>
        </div>
    )
}


