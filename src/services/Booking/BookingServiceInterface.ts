export interface IBookingResponseParams {
  id: string;
  carType: string;
  licensePlate: string;
  bookingDate: string;
  timeslotId: number;
  amount: number;
  receipt?: number;
  customerId: string;
  status: string;
  productId: number;
  paymentStatus: string;
  promoId: number;
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
