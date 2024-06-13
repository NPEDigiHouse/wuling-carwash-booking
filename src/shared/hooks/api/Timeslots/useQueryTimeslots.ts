import { useQuery } from "@tanstack/react-query";
import { TimeslotServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryTimeslots = () => {
  return useQuery({
    queryKey: [CLIENT_KEY.TIMESLOTS.GET_ALL_TIMESLOTS],
    queryFn: ({ signal }) => TimeslotServiceApi.getAllTimeslots(signal),
  });
};
