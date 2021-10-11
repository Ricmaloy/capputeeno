import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { mocked } from 'ts-jest/utils';
import { BackButton } from '.';

jest.mock('next/router');

describe('Button Component', () => {

    it('should render correctly', () => {
        render(<BackButton />);
        
        expect(screen.getByText('Voltar')).toBeInTheDocument();
    });

    it('should goes back when clicked', () => {
        const useRouterMocked = mocked(useRouter);

        const pushMock = jest.fn();
        const backMock = jest.fn();

        useRouterMocked.mockReturnValueOnce({
            push: pushMock,
            back: backMock
        } as any)

        render(<BackButton />);

        const backButton = screen.getByText('Voltar');

        fireEvent.click(backButton);
        
        expect(backMock).toHaveBeenCalled();
    });
})