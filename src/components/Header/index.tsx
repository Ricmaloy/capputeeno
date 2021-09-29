import { FormEvent, useState } from 'react';
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
    const [searchContent, setSearchContent] = useState('');

    function handleSearchItem(event: FormEvent) {
        event.preventDefault()

        // redirecionar para uma página com os resultados da busca
    }

    return (
        <Container>
            <Content>
                <Logo>capputeeno</Logo>
    
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
                    <Bag>
                        <FiShoppingBag />
                        <span>2</span>
                    </Bag>
                </UserInteractive>
            </Content>
        </Container>
    )
}