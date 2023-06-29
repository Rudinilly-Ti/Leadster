import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 500px;
    background-color: ${props => props.theme.colors.green};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 72px;
    font-weight: 700;
    background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    position: relative;

    span {
        position: absolute;
        top: -34px;
        right: -20px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 38px;
    font-weight: 500;
    color: #444;

    margin-top: 20px;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 550px;

    margin-top: 20px;

    font-size: 14.5px;
    font-weight: 500;
    color: #333;

    hr {
        width: 110%;
    }

    p {
        margin-top: 10px;
    }

    p span {

        font-weight: 700;
    }
`;
