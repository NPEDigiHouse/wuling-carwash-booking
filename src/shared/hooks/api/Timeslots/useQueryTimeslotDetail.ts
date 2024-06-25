import { useQuery } from "@tanstack/react-query";
import { TimeslotServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryTimeslotDetail = (timeslotId?: string) => {
  const token = TokenConfig.getToken();
  return useQuery({
    queryKey: [CLIENT_KEY.TIMESLOTS.GET_DETAIL_TIMESLOT],
    queryFn: ({ signal }) =>
      TimeslotServiceApi.getTimeslotDetail(timeslotId, signal),
    enabled: !!token,
  });
};
