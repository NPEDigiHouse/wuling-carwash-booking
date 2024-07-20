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
  receipt?: string;
  productPrice: number;
  discount: number;
}

export interface IBookingRequestParams {
  carType: string;
  licensePlate: string;
  timeslotId: number;
  amount: number;
  productId: number;
  promoId?: number;
  customerId: string;
  phoneNumber: string;
}

export interface ICustomerBookingRequestParams {
  carType: string;
  licensePlate: string;
  timeslotId: number;
  amount: number;
  productId?: number;
  promoId?: number;
  customerId?: string;
  phoneNumber: string;
}

export interface ICustomerBookingResponseParams {
  id: string;
  name: string;
  carType: string;
  carPlate: string;
  status: string;
  amount: number;
  bookingDate: string;
  bookingTime: string;
  service: string;
  promo: string;
}
