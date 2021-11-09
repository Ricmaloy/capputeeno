import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { CartContext } from '../../contexts/cartContext'
import { mocked } from 'ts-jest/utils';
import { Header } from '.';

jest.mock('next/router');

describe('Header Component', () => {
    const ctx = {
        cart: [],
        cartSize: 3,
        cartTotal: 189.9,
        addProductToCart: jest.fn(),
        removeProductFromCart: jest.fn(),
        updateProductQuantity: jest.fn(),
        updateCartSize: jest.fn(),
        handleBuyProducts: jest.fn(),
        getIsFreeFreight: jest.fn(),
    }
    
    it('renders correctly', () => {
        const screen = render(
            <CartContext.Provider value={{...ctx}} >
                <Header />
            </CartContext.Provider>
        );

        expect(screen.getByText('capputeeno')).toBeInTheDocument();
    });

    it('renders amount of itens', () => {

        const screen = render(
            <CartContext.Provider value={{...ctx}} >
                <Header />
            </CartContext.Provider>
        );

        expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('redirects to search page when user clicks search button', () => {
        const useRouterMocked = mocked(useRouter);

        const pushMock = jest.fn();

        useRouterMocked.mockReturnValueOnce({
            push: pushMock,
        } as any)

        const screen = render(
            <CartContext.Provider value={{...ctx}} >
                <Header />
            </CartContext.Provider> 
        );

        const searchButton = screen.getByRole('button', { name: 'search button' });

        fireEvent.click(searchButton);

        expect(pushMock).toHaveBeenCalledWith('/search/');
    })
})