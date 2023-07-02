import styled from 'styled-components';

export const Button = styled.button<{active: boolean}>`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    outline: none;
    ${({theme, active}) => active ? `
    border: 1px solid ${theme.colors.primary};
    font-weight: 600;
    color: ${theme.colors.primary};
    ` : `border: none` };
    background-color: transparent;

    font-size: 16px;

`;