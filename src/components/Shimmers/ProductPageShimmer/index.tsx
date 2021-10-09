import dynamic from 'next/dynamic'
import { Container, Details } from './styles';

const DynamicContentLoader = dynamic(() => import('react-content-loader'), { ssr: false });

export function ProductPageShimmer() {
    return (
        <Container>
            <Details>
                <DynamicContentLoader 
                    speed={2}
                    width={448}
                    height={500}
                    viewBox="0 0 448 500"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="3" ry="3" width="75" height="18" /> 
                    <rect x="0" y="45" rx="3" ry="3" width="295" height="30" /> 
                    <rect x="0" y="90" rx="3" ry="3" width="100" height="25" /> 
                    <rect x="0" y="150" rx="3" ry="3" width="448" height="9" /> 
                    <rect x="0" y="200" rx="3" ry="3" width="70" height="15" /> 
                    
                    <rect x="0" y="225" rx="3" ry="3" width="67" height="11" /> 
                    <rect x="76" y="225" rx="3" ry="3" width="140" height="11" /> 
                    <rect x="225" y="225" rx="3" ry="3" width="180" height="11" /> 
                    <rect x="127" y="273" rx="3" ry="3" width="53" height="11" /> 
                    <rect x="187" y="273" rx="3" ry="3" width="72" height="11" /> 
                    <rect x="0" y="273" rx="3" ry="3" width="118" height="11" /> 
                    <rect x="0" y="248" rx="3" ry="3" width="158" height="11" /> 
                    <rect x="166" y="248" rx="3" ry="3" width="173" height="11" />
                    <rect x="0" y="296" rx="3" ry="3" width="37" height="11" /> 

                    <rect x="0" y="404" rx="3" ry="3" width="448" height="44" /> 
                </DynamicContentLoader>

            </Details>
        </Container>
    )
}