import styled from 'styled-components';

export const Container = styled.div`
    max-width: 112rem;
    height: 100%;
    margin: 2.5rem auto;

    @media(max-width: 1200px) {
        padding: 0 2.5rem;
    }

    @media(max-width: 950px) {
        padding: 0 12.5rem;
    }

    @media(max-width: 700px) {
        padding: 0 6.5rem;
    }

    @media(max-width: 500px) {
        padding: 0 2.5rem;
    }
`
export const GoBackSection = styled.div`
    width: fit-content;

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

export const Content = styled.main`
    display: flex;
    gap: 3.2rem;

    @media(max-width: 950px) {
        flex-direction: column;
    }
`
export const Descriptions = styled.div`
    max-width: 44.8rem;
    display: flex;
    flex-direction: column;
`

interface TextProps {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    color: string;
    transform?: string;
    marginTop?: string;
}

export const Text = styled.p<TextProps>`
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    line-height: ${props => props.lineHeight};
    color: ${props => props.color};
    margin-top: ${props => props.marginTop || '0rem'};
    text-transform: ${props => props.transform || 'none'};
`
export const AddCartButton = styled.button`
    font-family: Saira;
    font-size: 1.4rem;
    line-height: 2.4rem;
    
    color: #f5f5fa;
    background-color: #115d8c;
    border: none; 
    border-radius: 0.4rem;
    padding: 1rem 0rem;
    margin-top: auto;
    
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    
    transition: 0.3s;
    cursor: pointer;

    svg {
        font-size: 2rem;
    }

    &:hover {
        filter: brightness(0.9);
    }

    @media(max-width: 950px) {
        margin-top: 3.5rem;
    }
`

