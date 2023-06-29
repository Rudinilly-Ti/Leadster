import asset from "@/assets/asset-header.png";
import ButtonStyled from "@/components/ButtonStyled";
import Image from "next/image";
import { Container, Subtitle, Text, Title } from "./styles";

export default function First(){
    return (
        <Container>
            <ButtonStyled />
            <Subtitle>Menos conversinha,</Subtitle>
            <Title>
                Mais conversão
                <span>
                    <Image alt="asset" src={asset}/>
                </span>
            </Title>
            <Text>
                <hr />
                <p>Conheça as estratégias que <span>mudaram o jogo</span> e como aplicá-las no seu negócio</p>
            </Text>
        </Container>
    )
}