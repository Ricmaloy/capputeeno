import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
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

    function handleSearchItem(event: FormEvent) {
        event.preventDefault()

        // redirecionar para uma página com os resultados da busca
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
                        <span>2</span>
                    </Bag>
                </UserInteractive>
            </Content>
        </Container>
    )
}