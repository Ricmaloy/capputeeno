import styled from 'styled-components';

export const Container = styled.div`
    max-width: 112rem;
    height: 100%;
    margin: 2.5rem auto;

    display: grid;
    grid-template-columns: 1fr 35.2rem;
    column-gap: 3.2rem;
`
export const GoBackSection = styled.div`
    width: fit-content;
    height: fit-content;

    color: #617480;
    margin-bottom: 2.2rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
        font-size: 1.8rem;
    }

    p {
        font-size: 1.4rem;
    }
`
export const CheckoutContainer = styled.div`
    background-color: #ffffff;
    padding: 1.6rem 2.4rem;
    margin-top: 1.5rem;
`

export const CheckoutTitle = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
    text-transform: uppercase;
    
    color: #41414d;
    margin-bottom: 2.9rem;
`

export const CheckoutSection = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4;
        color: #41414d;
    }

    h3 {
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2.4rem;
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color:  #dce2e6;
    margin: 2.4rem 0 0.8rem;
`

export const CheckoutButton = styled.button`
    width: 100%;
    font-family: Saira;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-transform: uppercase;

    padding: 1rem 0;
    border: none;
    border-radius: 0.4rem;
    background-color: #51b853;
    margin-top: 4rem;
    margin-bottom: 28.1rem;
    color: #F5F5Fa;

    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.9);
    }
`

export const CheckoutLink = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.1rem;
    text-transform: uppercase;
    color: #737380;
    text-decoration: underline;

    & + & {
        margin-top: 1.2rem;
    }
`