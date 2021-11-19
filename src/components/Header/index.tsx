import { FormEvent, memo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';
import {
  Container,
  Content,
  Logo,
  UserInteractive,
  Bag,
  SearchBar,
} from './styles';

function HeaderComponent() {
  const router = useRouter();
  const [searchContent, setSearchContent] = useState('');
  const { cartSize } = useCart();

  function handleSearchItem(event: FormEvent) {
    event.preventDefault();

    router.push(`/search/${searchContent}`);
    setSearchContent('');
  }

  return (
    <Container>
      <Content>
        <Link href={`/`} passHref>
          <Logo>capputeeno</Logo>
        </Link>

        <UserInteractive>
          <form onSubmit={handleSearchItem}>
            <SearchBar>
              <input
                type="text"
                placeholder="Procurando por algo específico ? "
                value={searchContent}
                onChange={(ev) => setSearchContent(ev.target.value)}
              />
              <button type="submit" aria-label="search button">
                <FiSearch />
              </button>
            </SearchBar>
          </form>
          <Link href="/cart" passHref>
            <Bag>
              <FiShoppingBag aria-label="go to cart page" />
              {cartSize > 0 && <span>{cartSize}</span>}
            </Bag>
          </Link>
        </UserInteractive>
      </Content>
    </Container>
  );
}

export const Header = memo(HeaderComponent);
