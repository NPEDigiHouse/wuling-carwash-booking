import FormLayout from "features/Admin/layouts/Form/FormLayout";
import moment from "moment";
import { ITimeslotFormPropsType } from "features/Admin/interfaces/TimeslotFormInterface";
import BaseTimeslotForm from "features/Admin/components/Form/BaseTimeslotForm";
import { useParams } from "react-router-dom";
import { useGetTimeslotInitialData } from "shared/hooks/ui/Form/useGetTimeslotInitialData";
import { LoadingOverlay } from "@mantine/core";

const EditTimeslotPage = () => {
  // const navigate = useNavigate();
  const params = useParams();
  const timeslotDetail = useGetTimeslotInitialData(params.id);

  const handleSubmitForm = (values: ITimeslotFormPropsType) => {
    const params = {
      date: moment(values.date).format(),
      time: values.time,
    };

    console.log("values : ", params);
  };

  console.log("timeslot detail : ", timeslotDetail.timeslotInitialValues);

  // useEffect(() => {
  //   if (postTimeslot.isSuccess && !postTimeslot.isPending) {
  //     navigate("/admin/timeslot");
  //   }
  // }, [postTimeslot.isSuccess, postTimeslot.isPending, navigate]);

  if (timeslotDetail.loading) {
    return <LoadingOverlay />;
  }

  return (
    <FormLayout title="Tambah Timeslot">
      <BaseTimeslotForm
        initialValues={{
          date: timeslotDetail.timeslotInitialValues?.date,
          time: timeslotDetail.timeslotInitialValues?.time,
        }}
        onSubmit={handleSubmitForm}
      />
    </FormLayout>
  );
};

export default EditTimeslotPage;
