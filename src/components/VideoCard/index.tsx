import thumb from '@/assets/thumbnail.png';
import Image from "next/image";
import { IoPlay } from 'react-icons/io5';
import { Container } from "./styles";

export default function VideoCard() {
    return (
        <Container>
            <div className='image'>
                <div className='cover'>
                    <IoPlay size={50} color='#fff' />
                </div>
                <Image alt="thumb" src={thumb} width={280} />
            </div>
            <div className='title'>
                <span>Como aumentar sua geraçao de Leads feat.Traktor</span>
            </div>
        </Container>
    )
}