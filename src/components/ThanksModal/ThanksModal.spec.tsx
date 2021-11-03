import { render, screen, fireEvent } from '@testing-library/react';
import { ThanksModal } from '.';

describe('Thanks Modal Component', () => {
    it('renders correctly when modal is open', () => {
        const closeModal = jest.fn();
        const screen = render(<ThanksModal isModalOpen={true} onModalClose={closeModal} />);

        expect(screen.getByText('🔥 Obrigado por comprar na Capputeeno 🔥')).toBeInTheDocument();
    });

    it('does not render when modal is not open', () => {
        const closeModal = jest.fn();
        const screen = render(<ThanksModal isModalOpen={false} onModalClose={closeModal} />);

        expect(screen.queryByText('Em breve você receberá um email com os dados de rastreio do seu pedido!')).not.toBeInTheDocument();
    });

    it('closes modal when button is clicked', () => {
        const closeModal = jest.fn();
        const screen = render(<ThanksModal isModalOpen={true} onModalClose={closeModal} />);

        const closeButton = screen.getByText('Entendido');

        fireEvent.click(closeButton);

        expect(closeModal).toHaveBeenCalled();
    })
})