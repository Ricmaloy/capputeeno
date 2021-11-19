import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  margin-top: 3.2rem;
  padding-bottom: 5.4rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3.2rem;
  row-gap: 2.4rem;

  @media (max-width: 1200px) {
    padding: 0 2.5rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    padding: 0 6rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;
