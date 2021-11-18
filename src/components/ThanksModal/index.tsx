import Modal from 'react-modal';
import Confetti from 'react-dom-confetti';
import { Container, ModalContainer, Description, Title, Button, ConfettiContainer } from './styles';
import { memo, useMemo } from 'react';

interface ThanksModalProps {
    isModalOpen: boolean,
    onModalClose: () => void;
}

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.65)'
  }
};

const confettiStyles = {
  angle: 105,
  spread: 330,
  startVelocity: 40,
  elementCount: 200,
  dragFriction: 0.12,
  duration: 3330,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
}

function ThanksModalComponent({ isModalOpen, onModalClose }: ThanksModalProps) {
    return (
        <Container>
          <ConfettiContainer>
            <Confetti active={isModalOpen} config={confettiStyles } />
          </ConfettiContainer>
        <Modal
            isOpen={isModalOpen}
            style={modalStyles}
            preventScroll={true}
            ariaHideApp={false}
        >   
            <ModalContainer>
                <Title>🔥 Obrigado por comprar na Capputeeno 🔥</Title>
                <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt et consectetur minima distinctio nostrum nemo, rem dolores accusamus quisquam doloribus impedit, quas, expedita eligendi consequatur? Eligendi doloremque magnam odit tempore?</Description>
                <Description>Em breve você receberá um email com os dados de rastreio do seu pedido!</Description>
                <Description>Todo esse projeto foi desenvolvido com muito cuidado e carinho by Ricardo. :)</Description>

                <Button onClick={onModalClose} >Entendido</Button>
            </ModalContainer>
        </Modal>
        </Container>
    )
}

export const ThanksModal = memo(ThanksModalComponent)