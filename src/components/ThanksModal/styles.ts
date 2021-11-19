import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const ModalContainer = styled.div`
  width: 65rem;
  display: flex;
  flex-direction: column;

  overflow: hidden;

  @media (max-width: 780px) {
    width: 35rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 780px) {
    font-size: 1.6rem;
  }
`;
export const Description = styled.p`
  font-size: 1.4rem;

  @media (max-width: 780px) {
    font-size: 1.3rem;
  }
`;

export const Button = styled.button`
  width: 50%;
  font-family: Saira;
  font-size: 1.4rem;
  font-weight: 500;

  margin-top: 2.5rem;
  padding: 0.6rem 0;
  border: none;
  border-radius: 0.4rem;

  color: #ffffff;
  background-color: #51b853;
  align-self: center;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ConfettiContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
`;
