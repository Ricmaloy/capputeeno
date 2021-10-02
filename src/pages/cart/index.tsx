import { useRouter } from 'next/router';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Header } from '../../components/Header';

import { 
    Container, 
    GoBackSection, 
    CheckoutContainer, 
    CheckoutTitle, 
    CheckoutSection, 
    Divider,
    CheckoutButton,
    CheckoutLink
} from '../../styles/pages/Cart';

export default function Cart() {
    const router = useRouter();

    function handleGoBack() {
        router.back();
    }

    return (
        <>
            <Header/>
            <Container>
                <GoBackSection onClick={handleGoBack} >
                    <FiArrowLeftCircle/>
                    <p>Voltar</p>
                </GoBackSection>

                <CheckoutContainer>
                    <CheckoutTitle>Resumo do Pedido</CheckoutTitle>
                    <CheckoutSection>
                        <span>Subtotoal de produtos</span>
                        <span>R$ 161,00</span>
                    </CheckoutSection>
                    <CheckoutSection>
                        <span>Entrega</span>
                        <span>R$ 40,00</span>
                    </CheckoutSection>

                    <Divider />

                    <CheckoutSection>
                        <h3>Total</h3>
                        <h3>R$ 201,00</h3>
                    </CheckoutSection>

                    <CheckoutButton>Finalizar a compra</CheckoutButton>

                    <CheckoutLink>ajuda</CheckoutLink>
                    <CheckoutLink>reembolsos</CheckoutLink>
                    <CheckoutLink>entregas e fretes</CheckoutLink>
                    <CheckoutLink>trocas e devoluções</CheckoutLink>
                </CheckoutContainer>
            </Container>
        </>
    )
}