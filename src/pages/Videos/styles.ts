import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    width: 600px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InteractionContainer = styled.div`
    width: 900px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 230px;

    span {
        font-size: 12.5px;
        font-weight: 600;
    }
`;

export const FilterSelect = styled.select`
    width: 140px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #333;
    font-size: 12.5px;

    font-weight: 600;
`;

export const VideoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 30px 0px;
    
    width: 900px;
    height: auto;

    padding: 60px 0;

    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
`;