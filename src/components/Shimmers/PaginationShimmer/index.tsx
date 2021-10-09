import dynamic from 'next/dynamic';
import { PaginationContainer } from './styles';

const DynamicContentLoader = dynamic(() => import('react-content-loader'), { ssr: false });

export function PaginationShimmer() {
    return (
        <PaginationContainer>
            <DynamicContentLoader 
                speed={2}
                width={228}
                height={32}
                viewBox="0 0 228 32"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="3" ry="3" width="32" height="32" />
                <rect x="38" y="0" rx="3" ry="3" width="32" height="32" />
                <rect x="76" y="0" rx="3" ry="3" width="32" height="32" />
                <rect x="114" y="0" rx="3" ry="3" width="32" height="32" />
                <rect x="152" y="0" rx="3" ry="3" width="32" height="32" />
                <rect x="190" y="0" rx="3" ry="3" width="32" height="32" />
                <rect x="228" y="0" rx="3" ry="3" width="32" height="32" />
            </DynamicContentLoader>
        </PaginationContainer>
    )
}