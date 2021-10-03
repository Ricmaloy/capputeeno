import Image from 'next/image';
import { FiShoppingBag } from 'react-icons/fi'
import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';

import { 
    Container, 
    Content, 
    Descriptions,
    Text,
    AddCartButton
} from '../../styles/pages/Product';

export default function Product() {
    return (
        <>  
            <Header />
            <Container>
            
            <BackButton />

            <Content>
                <Image
                    src={`https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg`}
                    alt={`Nice lookin mug`}
                    width={640}
                    height={580}
                    objectFit='fill'
                />
                <Descriptions>
                    <Text
                        fontSize='1.6rem'
                        fontWeight='400'
                        lineHeight='2.4rem'
                        color='#41414d'
                    >
                        Caneca
                    </Text>
                    <Text
                        fontSize='3.2rem'
                        fontWeight='300'
                        lineHeight='4.8rem'
                        color='#41414d'
                        marginTop='1.2rem'
                    >
                        Caneca de cerâmica Rústica
                    </Text>
                    <Text
                        fontSize='2rem'
                        fontWeight='600'
                        lineHeight='3rem'
                        color='#09090A'
                        marginTop='0.4rem'
                    >
                        R$ 40,00
                    </Text>
                    <Text
                        fontSize='1.2rem'
                        fontWeight='400'
                        lineHeight='1.8rem'
                        color='#09090A'
                        marginTop='2.4rem'
                    >
                        *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
                    </Text>
                    <Text
                        fontSize='1.6rem'
                        fontWeight='500'
                        lineHeight='24px'
                        color='#737380'
                        transform='uppercase'
                        marginTop='5.8rem'
                    >
                        Descrição
                    </Text>
                    <Text
                        fontSize ='14px'
                        fontWeight='400'
                        lineHeight ='21px'
                        color='#41414d'
                        marginTop='0.8rem'
                    >
                        Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de 
                        exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.
                    </Text>
                    <AddCartButton>
                        <FiShoppingBag />
                        ADICIONAR AO CARRINHO
                    </AddCartButton>
                </Descriptions>
            </Content>
            </Container>
        </>
    )
}