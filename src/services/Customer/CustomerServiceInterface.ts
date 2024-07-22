export interface ICustomerDetailResponseParams {
  id: string;
  name: string;
  phoneNumber: string;
  bookings: {
    id: string;
    carType: string;
    carPlate: string;
    status: string;
    amount: number;
    bookingDate: string;
    bookingTime: string;
    service: string;
    promo: string;
  }[];
  user: {
    id: string;
    email: string;
    username: string;
  };
}

export interface ICustomerRequestParams {
  name: string;
  phoneNumber: string;
  email: string;
  username: string;
}

export interface ICustomerUpdateRequestParams {
  name?: string;
  phoneNumber?: string;
  email?: string;
  username?: string;
}
