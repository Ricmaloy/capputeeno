import Image from 'next/image';
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';
import { Container, Content, Header, Description, Footer, Select } from './styles';

interface CartItemProps {
    id: string,
    name: string,
    description: string,
    imageURL: string,
    price: number,
    quantity: number,
}

interface SelectOprionProps {
    label: string,
    value: number
}

export function CartItemCard({id, name, description, imageURL, price, quantity}: CartItemProps) {
    const { updateProductQuantity, removeProductFromCart } = useCart();
    const [productQuantity, setProductQuantity] = useState(quantity);
    
    function handleChangeProductQuantity(quantity: number) {
        setProductQuantity(quantity);
        updateProductQuantity(id, quantity);
    }
    
    const selectOptions: SelectOprionProps[] = [
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: 3},
        {label: '4', value: 4},
        {label: '5', value: 5},
        {label: '6', value: 6},
        {label: '7', value: 7},
        {label: '8', value: 8},
        {label: '9', value: 9},
        {label: '10', value: 10},
    ]

    return (
        <Container>
            <Image 
                src={imageURL}
                alt={description}
                width='256px'
                height='211px'
                objectFit='cover'
            />
            <Content>
                <Header>
                    <h1>{name}</h1>

                    <button onClick={() => removeProductFromCart(id)} >
                        <FiTrash2/>
                    </button>
                </Header>
                <Description>
                    {description}
                </Description>
                <Footer>
                    <Select defaultValue={productQuantity}  onChange={(ev) => handleChangeProductQuantity(Number(ev.target.value))} >
                        {
                            selectOptions.map(option => {
                                return (
                                    <option key={`SelectOption ${option.label}`}>
                                        {option.value}
                                    </option>
                                )
                            })
                        }
                    </Select>
                    <h3>{formatPrice(price)}</h3>
                </Footer>
            </Content>
        </Container>
    )
}