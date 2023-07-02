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

            display: none;
        }
    }

    .title {
        width: 250px;
        height: 40px;

        font-weight: 700;
        font-size: 14px;
        display: flex;
        
        flex: 1;
        justify-content: center;
        align-items: center;

        color: #333;
    }
    

    &:hover, &:focus {
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    
        .image {
            .cover {
                transition: all 0.2s ease-in-out;
                background-color: ${({theme}) =>   theme.colors.primary}80;

                display: flex;
                justify-content: center;
                align-items: center;
            }   
        }

        .title {
            color: ${({theme}) =>   theme.colors.primary};
        }
    }
`;