import { useQuery } from "@tanstack/react-query";
import { TimeslotServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryTimeslots = () => {
  const token = TokenConfig.getToken();
  return useQuery({
    queryKey: [CLIENT_KEY.TIMESLOTS.GET_ALL_TIMESLOTS],
    queryFn: ({ signal }) => TimeslotServiceApi.getAllTimeslots(signal),
    enabled: !!token,
  });
};
