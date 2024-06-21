import { useEffect, useState } from "react";

export const useFilterPromoDiscount = (
  promoOption: { label: string; value: string; discount?: number }[],
  promoId?: number,
  productPrice?: number,
) => {
  const [promoDiscount, setPromoDiscount] = useState<number | undefined>(
    undefined,
  );

  const [priceOff, setPriceOff] = useState<number | undefined>(undefined);
  const [amount, setAmount] = useState<number | undefined>(productPrice);

  console.log("price off : ", promoId);

  useEffect(() => {
    const getDiscount = promoOption.find((promo) => {
      return promo.value === promoId?.toString();
    });

    if (!getDiscount) {
      setPromoDiscount(0);
    } else {
      setPromoDiscount(getDiscount?.discount);
    }
  }, [promoId, promoOption]);

  useEffect(() => {
    console.log("price : ", !productPrice);

    if (!!productPrice && !!promoDiscount) {
      const priceOff = productPrice * (promoDiscount / 100);

      setPriceOff(priceOff);

      setAmount(productPrice - priceOff);
    } else if (productPrice) {
      setAmount(productPrice);
      setPriceOff(0);
    }
  }, [priceOff, productPrice, promoDiscount]);

  return { promoDiscount, priceOff, amount };
};
