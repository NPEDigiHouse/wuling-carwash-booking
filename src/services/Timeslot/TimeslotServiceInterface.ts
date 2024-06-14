export interface ITimeslotApiRequestParams {
  day: string;
  time: string;
  adminId: string;
}

export interface ITimeslotApiResponseParams {
  id: number;
  date: Date;
  time: string;
  avaiableTime: boolean;
}
