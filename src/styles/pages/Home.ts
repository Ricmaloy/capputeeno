import styled from 'styled-components';

export const Container = styled.div`
  max-width: 112rem;
  height: 100%;
  margin: 3.2rem auto;
`;

export const FiltersSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 0 2.5rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
