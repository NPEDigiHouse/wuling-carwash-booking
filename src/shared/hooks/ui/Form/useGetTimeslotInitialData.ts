import { useEffect, useState } from "react";
import { ITimeslotApiResponseParams } from "services/Timeslot/TimeslotServiceInterface";
import { useQueryTimeslotDetail } from "shared/hooks/api/Timeslots/useQueryTimeslotDetail";

export const useGetTimeslotInitialData = (timeslotId?: string) => {
  const [timeslotInitialValues, setTimeslotInitialValues] =
    useState<ITimeslotApiResponseParams | null>(null);

  const [loading, setLoading] = useState(true);
  const { data, isLoading, isSuccess, refetch } =
    useQueryTimeslotDetail(timeslotId);
  //   console.log("data : ", data.data);

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);

      if (isSuccess) {
        console.log("is success : ", isSuccess);
        if (data?.data) {
          setTimeslotInitialValues(data?.data);
        }
      } else {
        console.log("is success : ", isSuccess);

        setTimeslotInitialValues({
          date: new Date(),
          avaiableTime: true,
          id: 1,
          time: "",
        });
      }
    } else {
      setLoading(true);
    }
  }, [data, isSuccess, isLoading]);

  return { timeslotInitialValues, loading, refetch };
};
