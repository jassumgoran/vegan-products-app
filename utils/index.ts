export const formatCurrency = (value: number, currency: string = "USD"): string => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  } catch (error) {
    return value.toString();
  }
};
