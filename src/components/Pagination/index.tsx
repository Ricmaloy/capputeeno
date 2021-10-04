import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Container,ItemContainer } from './styles';

interface Pagination {
    selectedPage: number,
    totalPages: number,
    handleOnChangePage: (newPage: number) => void,
}

export function Pagination({selectedPage, totalPages, handleOnChangePage}: Pagination) {

    const pages = [... Array(totalPages)].map((_, index) => index + 1);

    function handleChangePage(newSelectedPage: number) {
        handleOnChangePage(newSelectedPage);
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
            <ItemContainer onClick={() => handleChangePage(selectedPage + 1)} isItemDisabled={selectedPage === totalPages}><FiChevronRight/></ItemContainer>
        </Container>
    )
}