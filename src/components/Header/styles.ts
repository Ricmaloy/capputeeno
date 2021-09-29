import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 8rem;
    background-color: #ffffff;
`
export const Content = styled.div`
    max-width: 112rem;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;

    @media(max-width: 1200px) {
        padding: 0 2.5rem;
    }
`

export const Logo = styled.h1`
    font-size: 4rem;
    font-family: Saira Stencil One;
    font-weight: 400;

    color: #5d5d6d;

    @media(max-width: 780px) {
        font-size: 3.5rem;
    }
`
export const UserInteractive = styled.div`
    margin-left: auto;

    display: flex;
    align-items: center;
`
export const Bag = styled.div`
    margin-left:  2.7rem;
    position: relative;

    cursor: pointer;

    span {
        width: 1.7rem;
        height: 1.7rem;
        background-color: #de3838;
        color: #ffffff;
        padding: .5rem;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: -0.8rem;
        right: -0.8rem;
    }

    svg {
        font-size: 2.2rem;
        color: #737380;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const SearchBar = styled.div`
    width: 35.2rem;
    height: 4.2rem;
    background-color: #f3f5f6;
    border-radius: 0.8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
        height: 100%;
        font-family: Saira;
        font-size: 1.4rem;

        flex: 1;
        padding-left: 1.6rem;
        border: none;
        background-color: transparent;
    }

    button {
        height: 100%;
        font-size: 2rem;
        background-color: transparent;
        color: #737380;

        border: none;
        padding: 0 1.5rem;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 700px) {
        display: none;
    }
`