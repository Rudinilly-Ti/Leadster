import { Button } from "./styles";

interface NormalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

export default function NormalButton({ active, ...props}: NormalButtonProps) {
    return (
        <Button active={active} {...props}>
            {props.children}
        </Button>
    )
}