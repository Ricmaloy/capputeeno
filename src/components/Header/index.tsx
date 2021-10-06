import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';
import { 
    Container, 
    Content,
    Logo, 
    UserInteractive, 
    Bag, 
    SearchBar 
} from './styles';

export function Header() {
    const router = useRouter();
    const [searchContent, setSearchContent] = useState('');
    const { getCartSize } = useCart();

    function handleSearchItem(event: FormEvent) {
        event.preventDefault()

        router.push(`/search/${searchContent}`);
        setSearchContent('')
    }

    return (
        <Container>
            <Content>
                <Logo onClick={() => router.push('/')}>capputeeno</Logo>
    
                <UserInteractive>
                    <form onSubmit={handleSearchItem} >
                    <SearchBar>
                        <input 
                            type='text'
                            placeholder='Procurando por algo específico ? '
                            value={searchContent}
                            onChange={(ev) => setSearchContent(ev.target.value)}
                        />
                        <button 
                            type='submit'
                        >
                            <FiSearch />
                        </button>
                    </SearchBar>
                    </form>
                    <Bag onClick={() => router.push('/cart')}>
                        <FiShoppingBag />
                        {
                            getCartSize() > 0 && (
                                <span>{getCartSize()}</span>
                            )
                        }
                    </Bag>
                </UserInteractive>
            </Content>
        </Container>
    )
}