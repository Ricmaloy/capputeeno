import { useRouter } from "next/router";
import { FiArrowLeftCircle } from "react-icons/fi";
import { BackBtn } from './styles';

export function BackButton() {
    const router = useRouter();

    function handleGoBack() {
        router.back();
    }

    return (
        <BackBtn onClick={handleGoBack} >
            <FiArrowLeftCircle/>
            <p>Voltar</p>
        </BackBtn>
    )
}