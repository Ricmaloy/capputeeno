import { memo, useCallback } from 'react';
import { useRouter } from 'next/router';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { BackBtn } from './styles';

function BackButtonComponent() {
  const router = useRouter();

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <BackBtn onClick={handleGoBack}>
      <FiArrowLeftCircle />
      <p>Voltar</p>
    </BackBtn>
  );
}

export const BackButton = memo(BackButtonComponent);
