import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Container,ItemContainer } from './styles';

interface Pagination {
    selectedPage: number,
    totalPages: number,
    handleOnChangePage: (newPage: number) => void,
}

export function Pagination({selectedPage, totalPages, handleOnChangePage}: Pagination) {

    const pages = [... Array(totalPages)].map((_, index) => index);

    function handleChangePage(newSelectedPage: number) {
        handleOnChangePage(newSelectedPage);
    }

    return (
        <Container>
            {
               pages.length > 1 ? (
                   pages.map(page => {
                       return (
                            <ItemContainer 
                                key={page} 
                                isItemSelected={page === selectedPage} 
                                onClick={() => handleChangePage(page)}
                            >
                                {page + 1}
                            </ItemContainer>
                       )
                   }) 
               ) : (
                    <ItemContainer 
                        key={0} 
                        isItemSelected={true} 
                        onClick={() => handleChangePage(0)}
                    >
                        {1}
                    </ItemContainer>
                )
            }
            <ItemContainer onClick={() => handleChangePage(selectedPage - 1)} isItemDisabled={selectedPage === 0} ><FiChevronLeft/></ItemContainer>
            <ItemContainer onClick={() => handleChangePage(selectedPage + 1)} isItemDisabled={selectedPage + 1 === totalPages}><FiChevronRight/></ItemContainer>
        </Container>
    )
}