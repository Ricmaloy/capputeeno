import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.4rem;
  color: #737380;
  position: relative;

  @media (max-width: 700px) {
    margin-top: 1.5rem;
    align-self: flex-end;
  }
`;

export const MainLayer = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface DropdownMenuOpenProps {
  isDropdownMenuOpen: boolean;
}

export const DropDownMenu = styled.ul<DropdownMenuOpenProps>`
  width: max-content;
  padding: 1.2rem 1.6rem;
  border-radius: 4px;
  list-style: none;
  background-color: #ffffff;

  display: ${(props) => (props.isDropdownMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.4rem;

  position: absolute;
  top: 2.5rem;
  right: 0;

  z-index: 2;
`;

export const MenuItem = styled.li`
  cursor: pointer;

  opacity: 0.9;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const Select = styled.select`
  font-family: Saira;
  font-size: 1.4rem;

  color: #737380;
  padding-right: 2rem;
  border: none;
  background-color: transparent;

  appearance: none;
  background-image: url('arrow.png');
  background-repeat: no-repeat;
  background-position: 100% 50%;
`;
