export interface IBookingFormPropsType {
  name: string;
  carType: string;
  licensePlat: string;
  phoneNumber: string;
  promo: number;
  date: Date;
  timeslotId: string;
}

export interface IAdminBookingFormPropsType {
  name: string;
  carType: string;
  licensePlat: string;
  phoneNumber: string;
  promo: number;
  date: Date;
  timeslotId: string;
  amount: number;
  productId: number;
  customerId: string;
}
