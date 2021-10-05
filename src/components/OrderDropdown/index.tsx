import { useStore } from '../../hooks/useStore';
import { Container, Select } from './styles';

type OrderOptionProps = 'news' | 'ascending' | 'descending' | 'topseller' | 'none';

interface orderFilterOptionsProps {
    title: string;
    order: OrderOptionProps;
}

const orderFilterOptions: orderFilterOptionsProps[] = [
    {title: 'Organizar por', order: 'none'},
    {title: 'Novidades', order: 'news'},
    {title: 'Preço: Maior - menor', order: 'descending'},
    {title: 'Preço: Menor - maior', order: 'ascending'},
    {title: 'Mais vendidos', order: 'topseller'},
]

export function OrderDropdown() {
    const { handleSetSortOrder } = useStore();

    function handleSelectOrderFilter(orderOption: string) {
        const parsedOrderOption = orderFilterOptions.find(option => option.title === orderOption).order
        handleSetSortOrder(parsedOrderOption);
    };

    return (
        <Container>
        <Select defaultValue={orderFilterOptions[0].title} onChange={(ev) => handleSelectOrderFilter(ev.target.value)} >
            {
                orderFilterOptions.map(option => {
                    if(option.order === 'none') {
                        return (
                            <option key={`SelectOption ${option.order}`} disabled hidden >
                                {option.title}
                            </option>
                        )
                    } else {
                        return (
                            <option key={`SelectOption ${option.order}`}>
                                {option.title}
                            </option>
                        )
                    }
                })
            }
        </Select>
        </Container>
    )
}