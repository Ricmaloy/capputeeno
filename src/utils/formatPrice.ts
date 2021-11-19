export function formatPrice(priceInCents: number): string {
  return (priceInCents / 100).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
