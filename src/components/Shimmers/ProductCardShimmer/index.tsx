import dynamic from 'next/dynamic'
import { CardContainer } from './styles';

const DynamicContentLoader = dynamic(() => import('react-content-loader'), { ssr: false });

export function ProductCardShimmer() {
    return (
        <CardContainer>
            <DynamicContentLoader 
                speed={2}
                width={256}
                height={378}
                viewBox="0 0 256 378"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >   
                <rect x="0" y="0" rx="2" ry="2" width="256" height="300" />
                <rect x="15" y="320" rx="3" ry="3" width="135" height="15" />
                <rect x="15" y="350" rx="3" ry="3" width="70" height="15" />
            </DynamicContentLoader>
        </CardContainer>
    )
}