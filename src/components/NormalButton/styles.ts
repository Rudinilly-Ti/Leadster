import styled from 'styled-components';

export const Button = styled.button<{active?: boolean}>`
    transition: all 0.2s ease-in-out;
    padding: 0 15px;
    height: 30px;

    background-color: ${props => props.active ? props.theme.colors.primary : 'transparent'};
    border: 1px solid  ${props => props.active ? props.theme.colors.primary : '#222'};
    border-radius: 15px;

    font-weight: 500;
    font-size: 14px;
    color : ${props => props.active ? '#fff' : '#222'};

    &:hover, &:focus {
        border: 1px solid ${props => props.theme.colors.primary};
        color: ${props => props.active ? '' : props.theme.colors.primary};
        cursor: pointer;
    }
`;