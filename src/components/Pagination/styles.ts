import styled from 'styled-components';

export const Container = styled.div`
    max-width: 112rem;
    height: 100%;
    margin: 2.4rem auto 3.2rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;

    @media(max-width: 1200px) {
        padding: 0 2.5rem;
    }
`

interface ItemContainerProps {
    isItemSelected?: boolean;
    isItemDisabled?: boolean;
}

export const ItemContainer = styled.div<ItemContainerProps>`
    width: 3.2rem;
    height: 3.2rem;

    font-size: 1.6rem;
    background-color: #e9e9f0;
    color: #737380;
    border-radius: 0.8rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.95);
    }

    ${props => props.isItemSelected && (
        `
            background-color: #F5F5FA;
            color: #FFA585;
            border: 1px solid #FFA585;

            &:hover {
                filter: brightness(1);
            }
        `
    )}

    ${props => props.isItemDisabled && (
        `
            opacity: 0.25;
            pointer-events: none;
        `
    )}

    @media(max-width: 700px) {
        font-size: 1.4rem;    
    }
`