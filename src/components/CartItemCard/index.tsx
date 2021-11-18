import Image from 'next/image';
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';
import { failureIcons, infoIcons, toastOptions } from '../../utils/icons';
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
        const firstIcon = Math.floor(Math.random() * infoIcons.length);
        const secondIcon = Math.floor(Math.random() * infoIcons.length);
        toast.info(`${infoIcons[firstIcon]} Produto atualizado ! ${infoIcons[secondIcon]}`, toastOptions);

        setProductQuantity(quantity);
        updateProductQuantity(id, quantity);
    }

    function handleRemoveProductfromCart(id: string) {
        const firstIcon = Math.floor(Math.random() * failureIcons.length);
        const secondIcon = Math.floor(Math.random() * failureIcons.length);
        toast.error(`${failureIcons[firstIcon]} Produto removido ! ${failureIcons[secondIcon]}`, toastOptions);

        removeProductFromCart(id);
    }
    
    const selectOptions = Array.from({ length: 6 }).fill((_, i) => i)

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

                    <button onClick={() => handleRemoveProductfromCart(id)} >
                        <FiTrash2/>
                    </button>
                </Header>
                <Description>
                    {description}
                </Description>
                <Footer>
                    <Select defaultValue={productQuantity}  onChange={(ev) => handleChangeProductQuantity(Number(ev.target.value))} >
                        {
                            selectOptions.map(() => {
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