import { Group } from 'reakit/Group';
import { Button } from 'reakit/Button';
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

export const NavList = styled(Group)`
    display: flex;
    gap: 3.5rem;

    list-style: none;

    @media(max-width: 700px) {
        gap: 2rem;
    }
`

interface isActiveLink {
    isactive: number;
}

export const NavLink = styled(Button)<isActiveLink>`
    text-transform: uppercase;

    border: none;
    background-color: transparent;
    font-size: 1.6rem;
    font-family: Saira, 'Helvetica Neue', sans-serif;
    font-weight: ${props => props.isactive ? '600' : '400'};
    color: ${props => props.isactive ? '#41414D' : '#737380'};
    border-bottom: ${props => props.isactive ? '4px solid #ffa585' : 'none'};
    cursor: pointer;

`