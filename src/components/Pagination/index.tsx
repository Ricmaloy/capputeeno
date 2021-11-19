import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useStore } from '../../hooks/useStore';
import { Container, ItemContainer } from './styles';

interface Pagination {
  totalPages: number;
}

export function Pagination({ totalPages }: Pagination) {
  const { currentPage, handleChangeProductPage } = useStore();
  const pages = [...Array(totalPages)].map((_, index) => index);

  return (
    <Container>
      {pages.length > 1 ? (
        pages.map((page) => {
          return (
            <ItemContainer
              key={page}
              isitemselected={page === currentPage ? 1 : 0}
              onClick={() => handleChangeProductPage(page)}
            >
              {page + 1}
            </ItemContainer>
          );
        })
      ) : (
        <ItemContainer
          key={0}
          isitemselected={1}
          onClick={() => handleChangeProductPage(0)}
        >
          {1}
        </ItemContainer>
      )}
      <ItemContainer
        onClick={() => handleChangeProductPage(currentPage - 1)}
        isitemdisabled={currentPage === 0 ? 1 : 0}
        disabled={currentPage === 0}
        aria-label={
          currentPage === 0 ? 'can not go to next page' : 'go to next page'
        }
      >
        <FiChevronLeft />
      </ItemContainer>
      <ItemContainer
        onClick={() => handleChangeProductPage(currentPage + 1)}
        isitemdisabled={currentPage + 1 === totalPages ? 1 : 0}
        disabled={currentPage + 1 === totalPages}
        aria-label={
          currentPage + 1 === totalPages
            ? 'can not go to previous page'
            : 'go to previous page'
        }
      >
        <FiChevronRight />
      </ItemContainer>
    </Container>
  );
}
