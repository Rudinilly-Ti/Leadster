import { Button } from "./styles";

interface PAginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

export default function PaginationButton({ active = false, ...rest }: PAginationButtonProps) {
    return (
        <Button active={active} {...rest}>
            {rest.children}
        </Button>
    )
}