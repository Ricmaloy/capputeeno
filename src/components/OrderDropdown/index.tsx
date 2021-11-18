import { memo } from 'react';
import { useStore } from '../../hooks/useStore';
import { Container, Select } from './styles';

type OrderOptionProps = 'news' | 'ascending' | 'descending' | 'topseller' | 'none';

interface orderFilterOptionsProps {
    title: string;
    order: OrderOptionProps;
}

const orderFilterOptions: orderFilterOptionsProps[] = [
    {title: 'Novidades', order: 'news'},
    {title: 'Preço: Maior - menor', order: 'descending'},
    {title: 'Preço: Menor - maior', order: 'ascending'},
    {title: 'Mais vendidos', order: 'topseller'},
]

function OrderDropdownComponent() {
    const { handleSetSortOrder } = useStore();

    function handleSelectOrderFilter(orderOption: string) {
        const parsedOrderOption = orderFilterOptions.find(option => option.title === orderOption).order
        handleSetSortOrder(parsedOrderOption);
    };

    return (
        <Container>
            <Select defaultValue={orderFilterOptions[0].title} onChange={(ev) => handleSelectOrderFilter(ev.target.value)} >
                <option disabled hidden >Selecione a ordem</option>
                {
                    orderFilterOptions.map(option => {
                        return (
                            <option key={option.title}>
                                {option.title}
                            </option>
                        )
                    })
                }
            </Select>
        </Container>
    )
}

export const OrderDropdown = memo(OrderDropdownComponent);