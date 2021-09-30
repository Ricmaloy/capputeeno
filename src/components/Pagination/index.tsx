import { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Container,ItemContainer } from './styles';

export function Pagination() {
    const [selectedPage, setSelectedPage] = useState(1);
    const [pagesQuantity, setPagesQuantity] = useState(5);

    const pages = [... Array(pagesQuantity)].map((page, index) => index + 1);

    function handleChangePage(newSelectedPage: number) {
        setSelectedPage(newSelectedPage);
    }

    return (
        <Container>
            {
               pages.map(page => {
                   return (
                        <ItemContainer 
                            key={page} 
                            isItemSelected={page === selectedPage} 
                            onClick={() => handleChangePage(page)}
                        >
                            {page}
                        </ItemContainer>
                   )
               }) 
            }
            <ItemContainer onClick={() => handleChangePage(selectedPage - 1)} isItemDisabled={selectedPage === 1} ><FiChevronLeft/></ItemContainer>
            <ItemContainer onClick={() => handleChangePage(selectedPage + 1)} isItemDisabled={selectedPage === pagesQuantity}><FiChevronRight/></ItemContainer>
        </Container>
    )
}