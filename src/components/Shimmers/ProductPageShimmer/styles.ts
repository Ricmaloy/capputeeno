import styled from 'styled-components';

export const Container = styled.div`
  max-width: 112rem;
  height: 100%;
  margin: 2.5rem auto;

  @media (max-width: 1200px) {
    padding: 0 2.5rem;
  }

  @media (max-width: 950px) {
    padding: 0 12.5rem;
  }

  @media (max-width: 700px) {
    padding: 0 6.5rem;
  }

  @media (max-width: 500px) {
    padding: 0 2.5rem;
  }
`;

export const Details = styled.div`
  width: 44.8rem;
  display: flex;

  margin-left: auto;
`;
