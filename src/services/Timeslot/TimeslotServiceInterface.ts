export interface ITimeslotApiRequestParams {
  date: string;
  time: string;
}

export interface ITimeslotApiOptionalRequestParams {
  date: string;
  time: string;
}

export interface ITimeslotApiResponseParams {
  id: number;
  date: Date;
  time: string;
  avaiableTime: boolean;
}
