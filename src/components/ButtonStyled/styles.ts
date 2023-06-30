import styled from 'styled-components';

export const Button = styled.button`
    transition: all 0.2s ease-in-out;
    width: 170px;
    height: 30px;
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 15px 15px 15px 4px;

    font-weight: 700;
    font-size: 12px;
    color : ${props => props.theme.colors.primary};

    &:hover, &:focus {
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
        cursor: pointer;
    }
`;