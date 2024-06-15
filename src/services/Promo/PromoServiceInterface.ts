export interface IPromoServiceRequestParams {
  promoName: string;
  discount: number;
  startedDate: Date;
  endDate: Date;
}

export interface IPromoServiceResponseParams {
  id: number;
  promoName: string;
  discount: number;
  startedDate: Date;
  endDate: Date;
}
