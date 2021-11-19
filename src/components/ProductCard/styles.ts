import { Clickable } from 'reakit/Clickable';
import styled from 'styled-components';

export const CardContainer = styled(Clickable)`
  background-color: #ffffff;
  border-radius: 8px 8px 4px 4px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s;
  text-align: left;

  border: none;
  font-family: Saira, 'Helvetica Neue', sans-serif;

  img {
    border-radius: 8px 8px 0px 0px;
    transition: transform 0.3s;
    transform: scale(1.15);
  }

  div {
    width: 100%;
  }

  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1);
    }
  }
`;
export const Details = styled.div`
  padding: 0.8rem 1.2rem;
`;

export const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: #41414d;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dce2e6;
  margin: 0.6rem 0;
`;

export const Price = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: #09090a;
`;
