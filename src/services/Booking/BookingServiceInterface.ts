export interface IBookingResponseParams {
  id: string;
  name: string;
  phoneNumber: string;
  carType: string;
  carPlate: string;
  status: string;
  amount: number;
  bookingDate: string;
  bookingTime: string;
  service: string;
  promo: string;
}

export interface IBookingRequestParams {
  carType: string;
  licencePlate: string;
  customerId: string;
  timeslotId: number;
  amount: number;
  productId: number;
  promoId?: number;
}
