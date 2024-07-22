import {
  IServiceMethodProps,
  ServiceActionMethodType,
} from "redux/actions/types/ActionTypes";

interface IReducerServiceTypeState {
  serviceType: string;
}

const initialState: IReducerServiceTypeState = {
  serviceType: "",
};

export const serviceMethodReducer = (
  state = initialState,
  action: IServiceMethodProps,
): IReducerServiceTypeState => {
  switch (action.type) {
    case ServiceActionMethodType.SELECT_SERVICE_METHOD:
      return {
        ...state,
        serviceType: action.payload,
      };

    default:
      return state;
  }
};
