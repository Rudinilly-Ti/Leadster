import NormalButton from '@/components/NormalButton';
import VideoCard from '@/components/VideoCard';
import { ButtonsContainer, Container, FilterContainer, FilterSelect, InteractionContainer, VideoContainer } from './styles';

export default function Videos() {
    return (
        <Container>
            <InteractionContainer>
                <ButtonsContainer>
                    <NormalButton>Agências</NormalButton>
                    <NormalButton>ChatBot</NormalButton>
                    <NormalButton>Marketing Digital</NormalButton>
                    <NormalButton active={true}>Geração de Leads</NormalButton>
                    <NormalButton>Mídia Paga</NormalButton>
                </ButtonsContainer>
                <FilterContainer>
                    <span>Ordenar por</span>
                    <FilterSelect>
                        <option value="1">Mais recentes</option>
                        <option value="2">Mais antigos</option>
                        <option value="3">Mais curtidos</option>
                        <option value="4">Mais comentados</option>
                        <option value="5">Data de Publicação</option>
                    </FilterSelect>
                </FilterContainer>
            </InteractionContainer>
            <VideoContainer>
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </VideoContainer>
        </Container>
    )
}