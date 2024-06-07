import { ServiceActionMethodType } from "./types/ActionTypes";

export const selectServiceTypeAction = (service: string) => {
  return {
    type: ServiceActionMethodType.SELECT_SERVICE_METHOD,
    payload: service,
  };
};
