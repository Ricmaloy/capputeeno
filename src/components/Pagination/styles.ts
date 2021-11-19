import { Group } from 'reakit/Group';
import { Button } from 'reakit/Button';
import styled from 'styled-components';

export const Container = styled(Group)`
  max-width: 112rem;
  height: 100%;
  margin: 2.4rem 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 1200px) {
    padding: 0 2.5rem;
  }
`;

interface ItemContainerProps {
  isitemselected?: number;
  isitemdisabled?: number;
}

export const ItemContainer = styled(Button)<ItemContainerProps>`
  width: 3.2rem;
  height: 3.2rem;

  border: none;
  font-family: Saira, 'Helvetica Neue', sans-serif;
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

  ${(props) =>
    props.isitemselected &&
    `
            background-color: #F5F5FA;
            color: #FFA585;
            border: 1px solid #FFA585;

            &:hover {
                filter: brightness(1);
            }
        `}

  ${(props) =>
    props.isitemdisabled &&
    `
            opacity: 0.25;
            pointer-events: none;
        `}

    @media(max-width: 700px) {
    font-size: 1.4rem;
  }
`;
