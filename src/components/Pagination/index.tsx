import PaginationButton from "../PaginationButton";
import { Container } from "./styles";

interface PaginationProps {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}

export default function Pagination({ totalPages, activePage, onChange }: PaginationProps) {
    return (
        <Container>
            <span>Página</span>
            <div>
                {Array.from(Array(totalPages).keys()).map((item, index) => (
                    <PaginationButton
                        key={index}
                        active={activePage === item}
                        onClick={() => onChange(item)}
                    >
                        {item + 1}
                    </PaginationButton>
                ))}
            </div>
        </Container>
    )
}