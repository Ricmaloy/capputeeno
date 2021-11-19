import { memo } from 'react';
import { useStore } from '../../hooks/useStore';
import { Container, Select } from './styles';

type OrderOptionProps =
  | 'news'
  | 'ascending'
  | 'descending'
  | 'topseller'
  | 'none';

interface orderFilterOptionsProps {
  title: string;
  order: OrderOptionProps;
}

const orderFilterOptions: orderFilterOptionsProps[] = [
  // {title: 'Organizar por', order: 'none'},
  { title: 'Novidades', order: 'news' },
  { title: 'Preço: Maior - menor', order: 'descending' },
  { title: 'Preço: Menor - maior', order: 'ascending' },
  { title: 'Mais vendidos', order: 'topseller' },
];

function OrderDropdownComponent() {
  const { handleSetSortOrder } = useStore();

  function handleSelectOrderFilter(orderOption: string) {
    const parsedOrderOption = orderFilterOptions.find(
      (option) => option.title === orderOption,
    ).order;
    handleSetSortOrder(parsedOrderOption);
  }

  return (
    <Container>
      <Select
        defaultValue={`Organizar por`}
        onChange={(ev) => handleSelectOrderFilter(ev.target.value)}
      >
        <option disabled hidden>
          Organizar por
        </option>
        {orderFilterOptions.map((option) => {
          return <option key={option.order}>{option.title}</option>;
        })}
      </Select>
    </Container>
  );
}

export const OrderDropdown = memo(OrderDropdownComponent);
