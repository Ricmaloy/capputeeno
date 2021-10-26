import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useStore } from '../../hooks/useStore';
import { Container,ItemContainer } from './styles';

interface Pagination {
    totalPages: number,
}

export function Pagination({totalPages}: Pagination) {
    const { currentPage, handleChangeProductPage } = useStore();
    const pages = [... Array(totalPages)].map((_, index) => index);

    return (
        <Container>
            {
               pages.length > 1 ? (
                   pages.map(page => {
                       return (
                            <ItemContainer 
                                key={page} 
                                isItemSelected={page === currentPage} 
                                onClick={() => handleChangeProductPage(page)}
                            >
                                {page + 1}
                            </ItemContainer>
                       )
                   }) 
               ) : (
                    <ItemContainer 
                        key={0} 
                        isItemSelected={true} 
                        onClick={() => handleChangeProductPage(0)}
                    >
                        {1}
                    </ItemContainer>
                )
            }
            <ItemContainer onClick={() => handleChangeProductPage(currentPage - 1)} isItemDisabled={currentPage === 0} ><FiChevronLeft/></ItemContainer>
            <ItemContainer onClick={() => handleChangeProductPage(currentPage + 1)} isItemDisabled={currentPage + 1 === totalPages}><FiChevronRight/></ItemContainer>
        </Container>
    )
}