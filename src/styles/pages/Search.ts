import styled from 'styled-components';

export const Container = styled.div`
    max-width: 112rem;
    height: 100%;
    margin: 3.2rem auto;

    display: flex;
    flex-direction: column;

    @media(max-width: 1200px) {
        & > p {
            padding: 0 2.5rem;
        }
    }
`
export const Title = styled.p`
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.4rem;

    span {
        font-weight: 600;
    }

    @media(max-width: 500px) {
        font-size: 1.6rem;
    }
`

export const Subtitle = styled.p`
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.4rem;
    margin-top: 0.5rem;
    
    span {
        font-weight: 600;
    }

    @media(max-width: 500px) {
        font-size: 1.3rem;
    }
`