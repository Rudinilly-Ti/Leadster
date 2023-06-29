import logo from '@/assets/logo.png';
import Image from "next/image";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <Image src={logo} alt="logo" width={150}/>
        </Container>
    )
}