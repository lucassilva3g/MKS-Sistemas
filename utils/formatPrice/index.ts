const formatPrice = (
  price: number | string,
  locale: string = "pt-BR",
  currency: string = "BRL",
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(Number(price));
};

export default formatPrice;
