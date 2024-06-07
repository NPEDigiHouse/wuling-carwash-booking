export enum ServiceActionMethodType {
  SELECT_SERVICE_METHOD = "SELECT_SERVICE_METHOD",
}

export interface IServiceMethodProps {
  type: ServiceActionMethodType.SELECT_SERVICE_METHOD;
  payload: string;
}
