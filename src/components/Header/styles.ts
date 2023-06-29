import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.colors.green};

    display: flex;
    justify-content: center;
    align-items: center;
`;