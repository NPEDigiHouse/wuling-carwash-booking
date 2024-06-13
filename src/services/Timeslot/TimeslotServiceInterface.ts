export interface ITimeslotApiRequestParams {
  day: string;
  time: string;
  adminId: string;
}

export interface ITimeslotApiResponseParams {
  id: number;
  day: string;
  time: string;
  adminId: string;
  avaiableTime: boolean;
}
