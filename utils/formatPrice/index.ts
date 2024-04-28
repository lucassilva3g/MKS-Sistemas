const formatPrice = (
  price: number | string,
  locale: string = "pt-BR",
  currency: string = "BRL",
): string => {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(price));

  return formattedPrice.replace(/\s/g, "");
};

export default formatPrice;
