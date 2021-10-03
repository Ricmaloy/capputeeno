import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { CartItemCard } from '../../components/CartItemCard';

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
    BagItemsList
} from '../../styles/pages/Cart';

const Bag = [
    {
        "id": "e6fd1296-060c-4122-a4db-f48asdasd238e68131",
        "name": "Caneca Black Ring",
        "description": "Et dolore ipsum sapiente et. Sed velit aut mollitia. Tempore ut sapiente dolorem in fugiat voluptas quia. Nemo atque ratione in molestiae quae. Nihil aperiam quia debitis nisi inventore veniam laborum numquam ratione. Labore atque tempora inventore in et.",
        "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        "price_in_cents": 8020
    },
    {
        "id": "60200d52-e1e9-4aba-9778-7a5asdasdd25edb589",
        "name": "Caneca preto fosco",
        "description": "Et dolore ipsum sapiente et. Sed velit aut mollitia. Tempore ut sapiente dolorem in fugiat voluptas quia. Nemo atque ratione in molestiae quae. Nihil aperiam quia debitis nisi inventore veniam laborum numquam ratione. Labore atque tempora inventore in et.",
        "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg",
        "price_in_cents": 4642
    },
    {
        "id": "3f69242b-ad44-4b48-af9e-46asasdff392b6bbb",
        "name": "Camiseta not today.",
        "description": "Et dolore ipsum sapiente et. Sed velit aut mollitia. Tempore ut sapiente dolorem in fugiat voluptas quia. Nemo atque ratione in molestiae quae. Nihil aperiam quia debitis nisi inventore veniam laborum numquam ratione. Labore atque tempora inventore in et.",
        "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        "price_in_cents": 8904
    },
    {
        "id": "3f69242b-ad44-4b48-af9e-46ff3asdasd92b6bbb",
        "name": "Camiseta muito fera",
        "description": "Et dolore ipsum sapiente et. Sed velit aut mollitia. Tempore ut sapiente dolorem in fugiat voluptas quia. Nemo atque ratione in molestiae quae. Nihil aperiam quia debitis nisi inventore veniam laborum numquam ratione. Labore atque tempora inventore in et.",
        "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
        "price_in_cents": 8904
    }
]

export default function Cart() {

    return (
        <>
            <Header/>
            <Container>

                <BagList>

                    <BackButton />

                    <h1>seu carrinho</h1>

                    <BagPrice>
                        <p>Total (3 produtos) </p>
                        <span>R$ 161,00</span>
                    </BagPrice>

                    <BagItemsList>
                        {
                            Bag.map(item => {
                                return (
                                    <CartItemCard
                                        key={item.id}
                                        id={item.id}
                                        description={item.description}
                                        imageURL={item.image_url}
                                        name={item.name}
                                        price={item.price_in_cents}
                                    />
                                )
                            })
                        }
                    </BagItemsList>

                </BagList>

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