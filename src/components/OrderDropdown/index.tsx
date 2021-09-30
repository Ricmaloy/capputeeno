import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Container, MainLayer, DropDownMenu, MenuItem } from './styles';

const orderFilterOptions = [
    {title: 'Novidades', order: 'news'},
    {title: 'Preço: Maior - menor', order: 'descending'},
    {title: 'Preço: Menor - maior', order: 'ascending'},
    {title: 'Mais vendidos', order: 'topseller'},
]

export function OrderDropdown() {
    const [selectedOrderFilter, setSelectedOrderFilter] = useState('none')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    function handleOpenDropdown() {
        setIsDropdownOpen(!isDropdownOpen)
    }

    function handleSelectOrderFilter(orderOption: string) {
        setSelectedOrderFilter(orderOption)
        setIsDropdownOpen(false)
    }

    return (
        <Container>
        <MainLayer onClick={handleOpenDropdown} >
            {orderFilterOptions.find(option => option.order === selectedOrderFilter)?.title || 'Organizar por'}
            { isDropdownOpen ?  <FiChevronUp/> : <FiChevronDown />}
        </MainLayer>
        <DropDownMenu isDropdownMenuOpen={isDropdownOpen} >
            {
                orderFilterOptions.map(filterOption => {
                    // if(filterOption.order === selectedOrderFilter) {
                    //     return
                    // } else {
                        return (
                            <MenuItem 
                                key={filterOption.order} 
                                onClick={() => handleSelectOrderFilter(filterOption.order)} 
                            >
                                {filterOption.title}
                            </MenuItem>
                        )
                    // }
                })
            }
        </DropDownMenu>
        </Container>
    )
}