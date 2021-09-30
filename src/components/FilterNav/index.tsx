import { useState } from 'react';
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

export function FilterNav() {
    const [filterCategory, setFilterCategory] = useState<FilterOptionProps>('all')

    return (
        <Container>
            <NavList>
                {
                    filterOptionsList.map(option => {
                        return (
                            <NavLink 
                                key={option.category}
                                isActive={option.category === filterCategory}
                                onClick={() => setFilterCategory(option.category)}
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