import styled from 'styled-components';

export const Container = styled.div`
    max-width: 300px;
    height: 220px;

    border-radius: 15px;

    box-shadow: 0 5px 20px #ccc;


    display: flex;
    flex-direction: column;
    align-items: center;

    .image {
        position: relative;
        .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 15px 15px 0 0;

            z-index: 2;
        }
    }

    .title {
        width: 250px;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;

    }
    

    &:hover, &:focus {
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    
        .image {
            .cover {
                opacity: 0.5;
                transition: all 0.2s ease-in-out;
                background-color: ${props => props.theme.colors.primary};
            }   
        }
    }
`;