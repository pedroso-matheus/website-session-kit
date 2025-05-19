import React from "react";

interface Props {
  price: number | string;
  salesPrice?: number | string;
  installments?: number;
  className?: string;
}

const PriceShow = ({
  price,
  salesPrice,
  installments,
  className = "",
}: Props) => {
  const formatCurrency = (value: number): string =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

  const parsedPrice = Number(price);
  const parsedSalesPrice = Number(salesPrice);
  const hasDiscount = !isNaN(parsedSalesPrice) && parsedSalesPrice < parsedPrice;

  const displayPrice = hasDiscount ? parsedSalesPrice : parsedPrice;
  const installmentValue = installments ? displayPrice / installments : null;

  return (
    <div className={`custom-color-light-blue ${className}`}>
      <p className="text-xl fs-5">
        {hasDiscount ? (
          <>
            De <s>{formatCurrency(parsedPrice)}</s> por apenas<br />
          </>
        ) : (
          <>Por apenas<br /></>
        )}
      </p>

      <p className="fs-6">
        {installments
          ? `${installments}x de ${formatCurrency(installmentValue!)}`
          : `${formatCurrency(displayPrice)}`}
      </p>
    </div>
  );
};

export default PriceShow;
