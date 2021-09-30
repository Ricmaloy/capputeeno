import styled from 'styled-components';

export const Container = styled.div`
    font-size: 1.6rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 700px) {
        align-self: flex-start;
        font-size: 1.3rem;
    }
`

export const NavList = styled.ul`
    display: flex;
    gap: 3.5rem;

    list-style: none;

    @media(max-width: 700px) {
        gap: 2rem;
    }
`

interface isActiveLink {
    isActive: boolean;
}

export const NavLink = styled.li<isActiveLink>`
    text-transform: uppercase;

    font-weight: ${props => props.isActive ? '600' : '400'};
    color: ${props => props.isActive ? '#41414D' : '#737380'};
    border-bottom: ${props => props.isActive ? '4px solid #ffa585' : 'none'};
    cursor: pointer;    
`