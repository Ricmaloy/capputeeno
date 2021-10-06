import { useRouter } from 'next/router';
import { useCart } from '../../hooks/useCart';
import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { CartItemCard } from '../../components/CartItemCard';
import { formatPrice } from '../../utils/formatPrice';

import { 
    Container, 
    CheckoutContainer, 
    CheckoutTitle, 
    CheckoutSection, 
    Divider,
    CheckoutButton,
    CheckoutLink,
    BagList,
    BagPrice,
    BagItemsList,
    PriceContainer
} from '../../styles/pages/Cart';

export default function Cart() {
    const router = useRouter();
    const { cart, getCartSize, getCartTotal, handleBuyProducts, getIsFreeFreight } = useCart();

    function handleBuyCart() {
        handleBuyProducts();
        router.push('/');
    }

    return (
        <>
            <Header/>
            <Container>
                <BagList>

                    <BackButton />

                    <h1>seu carrinho</h1>

                    <BagPrice>
                        <p>Total ({getCartSize()} produtos) </p>
                        <span>{formatPrice(getCartTotal())}</span>
                    </BagPrice>

                    <BagItemsList>
                        {
                            cart.length > 0 ? (

                                cart.map(item => {
                                    return (
                                        <CartItemCard
                                            key={item.id}
                                            id={item.id}
                                            description={item.description}
                                            imageURL={item.imageUrl}
                                            name={item.name}
                                            price={item.price}
                                            quantity={item.quantity}
                                        />
                                    )
                                })
                            ) : (
                                <>
                                    <h1>Seu carrinho parece estar vazio! 😔</h1>
                                </>
                            )
                        }
                    </BagItemsList>

                </BagList>

                <CheckoutContainer>
                    <CheckoutTitle>Resumo do Pedido</CheckoutTitle>
                    <CheckoutSection>
                        <p>Subtotal de produtos</p>
                        <p>{formatPrice(getCartTotal())}</p>
                    </CheckoutSection>
                    <CheckoutSection>
                        <p>Entrega</p>
                        <PriceContainer isFreefreight={getIsFreeFreight()} >
                            <p>R$ 40,00</p>
                            <span>gratuito</span>
                        </PriceContainer>
                    </CheckoutSection>

                    <Divider />

                    <CheckoutSection>
                        <h3>Total</h3>
                        {
                            getIsFreeFreight() ? (
                                <h3>{formatPrice(getCartTotal())}</h3>
                            ) : (
                                <h3>{formatPrice(getCartTotal() + 4000)}</h3>
                            )
                        }
                    </CheckoutSection>

                    {
                        cart.length === 0 ? (
                            <CheckoutButton disabled={true}>Carrinho vazio</CheckoutButton>
                        ) : (

                            <CheckoutButton onClick={handleBuyCart}>Finalizar a compra</CheckoutButton>
                        )
                    }


                    <CheckoutLink>ajuda</CheckoutLink>
                    <CheckoutLink>reembolsos</CheckoutLink>
                    <CheckoutLink>entregas e fretes</CheckoutLink>
                    <CheckoutLink>trocas e devoluções</CheckoutLink>
                </CheckoutContainer>
            </Container>
        </>
    )
}