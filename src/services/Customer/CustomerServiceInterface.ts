export interface ICustomerDetailResponseParams {
  id: string;
  name: string;
  phoneNumber: string;
  booking: {
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
}
