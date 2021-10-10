import { memo } from 'react';
import { useStore } from '../../hooks/useStore';
import { Container, NavList, NavLink } from './styles';

type FilterOptionProps = 'all' | 't-shirts' | 'mugs';

interface filterOptionsListProps {
    title: string,
    category: FilterOptionProps
}

const filterOptionsList: filterOptionsListProps[] = [
    {title: "Todos os Produtos", category: "all"},
    {title: "Camisetas", category: "t-shirts"},
    {title: "Canecas", category: "mugs"},
]

function FilterNavComponent() {
    const { handleSetSortField, sortField } = useStore();

    return (
        <Container>
            <NavList>
                {
                    filterOptionsList.map(option => {
                        return (
                            <NavLink 
                                key={option.category}
                                isActive={option.category === sortField}
                                onClick={() => handleSetSortField(option.category)}
                            >
                                {option.title}
                            </NavLink>
                        )
                    })
                }
            </NavList>
        </Container>
    )
}

export const FilterNav = memo(FilterNavComponent);