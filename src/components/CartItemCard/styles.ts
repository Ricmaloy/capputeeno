import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 21.1rem;
  background-color: #ffffff;
  border-radius: 0.8rem;

  display: flex;

  img {
    border-radius: 0.8rem 0 0 0.8rem;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    height: 41.1rem;

    img {
      border-radius: 0.8rem 0.8rem 0 0;
    }
  }

  @media (max-width: 1200px) {
    height: 43.1rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.6rem 1.6rem 2.4rem 3.1rem;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 300;
    font-size: 2rem;
    line-height: 3rem;
    color: #41414d;
  }

  svg {
    font-size: 2rem;
    color: #de3838;
    cursor: pointer;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

export const Description = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;

  margin-top: 1.2rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: auto;

  h3 {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #09090a;
  }
`;

export const Select = styled.select`
  width: 6.5rem;
  height: 4rem;

  font-family: Saira;
  font-size: 1.4rem;

  color: #737380;
  background-color: #f3f5f6;
  border: 1px solid #a8a8b3;
  border-radius: 0.8rem;
  padding: 0 1rem;

  appearance: none;
  background-image: url('arrow.png');
  background-repeat: no-repeat;
  background-position: 85% 50%;

  option {
    margin: 0 0.5rem;
  }
`;
