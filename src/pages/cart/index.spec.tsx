import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { CartContext } from '../../contexts/cartContext'
import { mocked } from 'ts-jest/utils';
import Cart from '.';

describe('Cart Page', () => {
    it('renders correctly when cart is empty', () => {
        const ctx = {
            cart: [],
            cartSize: 0,
            cartTotal: 0,
            addProductToCart: jest.fn(),
            removeProductFromCart: jest.fn(),
            updateProductQuantity: jest.fn(),
            updateCartSize: jest.fn(),
            handleBuyProducts: jest.fn(),
            getIsFreeFreight: () => false,
        }
        
        const screen = render(<CartContext.Provider value={{...ctx}} ><Cart/></CartContext.Provider>);

        expect(screen.getByText('Total (0 produtos)')).toBeInTheDocument()

        expect(screen.getByText(/SEU CARRINHO PARECE ESTAR VAZIO! 😔/i)).toBeInTheDocument()

        expect(screen.queryByText('gratuito')).not.toBeInTheDocument()

        expect(screen.getByText(/carrinho vazio/i)).toBeInTheDocument()
    })

    it('renders correctly when cart has products', () => {
        const ctx = {
            cart: [
                {
                    "id": "e8f00708-ba60-43f0-b8c9-0048099335eb",
                    "name": "Camiseta Broken Saints",
                    "description": "Nulla omnis aut doloribus. Perferendis cum est quo nostrum aliquam commodi est in repudiandae. Aut maiores est quod non eum sunt consequatur. Et porro minima iste sint. Excepturi at eos eligendi aut repellendus sed quis voluptatem. Aut et ut qui amet quae.",
                    "price": 6681,
                    "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
                    "sales": 32,
                    "quantity": 1
                },
                {
                    "id": "e0a4bb6a-278f-4caa-8eac-e9c43ba196c2",
                    "name": "Camiseta evening",
                    "description": "Placeat a voluptatem. Consequuntur exercitationem delectus. Ex numquam illum autem aliquam tempora labore. Facilis dicta distinctio ut. Et occaecati nostrum ab eos veritatis eius iure consectetur. Praesentium excepturi qui perferendis tempore.",
                    "price": 8851,
                    "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
                    "sales": 28,
                    "quantity": 1
                },
                {
                    "id": "35604483-d8fa-458c-8714-c4496ced2438",
                    "name": "Camiseta not today.",
                    "description": "Est nostrum accusamus illum rem. Quisquam rem blanditiis sunt error. Est quod numquam et sapiente odit aspernatur.",
                    "price": 9106,
                    "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
                    "sales": 18,
                    "quantity": 1
                }
            ],
            cartSize: 3,
            cartTotal: 24638,
            addProductToCart: jest.fn(),
            removeProductFromCart: jest.fn(),
            updateProductQuantity: jest.fn(),
            updateCartSize: jest.fn(),
            handleBuyProducts: jest.fn(),
            getIsFreeFreight: () => false,
        }
        
        const screen = render(<CartContext.Provider value={{...ctx}} ><Cart/></CartContext.Provider>);

        expect(screen.getByText('Total (3 produtos)')).toBeInTheDocument()

        expect(screen.getByText(/Finalizar a compra/i)).toBeInTheDocument()

        expect(screen.queryByText('gratuito')).not.toBeInTheDocument()
    })

    it('renders correctly when cart total price is higher than R$ 900000',() => {
        const ctx = {
            cart: [
                {
                    "id": "e8f00708-ba60-43f0-b8c9-0048099335eb",
                    "name": "Camiseta Super Cara",
                    "description": "Nulla omnis aut doloribus. Perferendis cum est quo nostrum aliquam commodi est in repudiandae. Aut maiores est quod non eum sunt consequatur. Et porro minima iste sint. Excepturi at eos eligendi aut repellendus sed quis voluptatem. Aut et ut qui amet quae.",
                    "price": 90100,
                    "imageUrl": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
                    "sales": 32,
                    "quantity": 1
                },
            ],
            cartSize: 1,
            cartTotal: 90100,
            addProductToCart: jest.fn(),
            removeProductFromCart: jest.fn(),
            updateProductQuantity: jest.fn(),
            updateCartSize: jest.fn(),
            handleBuyProducts: jest.fn(),
            getIsFreeFreight: () => true,
        }

        const screen = render(<CartContext.Provider value={{...ctx}} ><Cart/></CartContext.Provider>);

        expect(screen.getByText('gratuito')).toBeInTheDocument()

        expect(screen.getByRole('heading', {name: 'Cart total price with free freight'})).toBeInTheDocument()
    })
})