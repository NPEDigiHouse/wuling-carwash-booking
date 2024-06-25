import FormLayout from "features/Admin/layouts/Form/FormLayout";
import moment from "moment";
import { ITimeslotFormPropsType } from "features/Admin/interfaces/TimeslotFormInterface";
import BaseTimeslotForm from "features/Admin/components/Form/BaseTimeslotForm";
import { useQueryTimeslotDetail } from "shared/hooks/api/Timeslots/useQueryTimeslotDetail";
import { useParams } from "react-router-dom";

const EditTimeslotPage = () => {
  // const navigate = useNavigate();
  const params = useParams();
  const timeslotDetail = useQueryTimeslotDetail(params.id);

  console.log("timeslot detail : ", timeslotDetail);

  const handleSubmitForm = (values: ITimeslotFormPropsType) => {
    const params = {
      date: moment(values.date).format(),
      time: values.time,
    };

    console.log("values : ", params);
  };

  // useEffect(() => {
  //   if (postTimeslot.isSuccess && !postTimeslot.isPending) {
  //     navigate("/admin/timeslot");
  //   }
  // }, [postTimeslot.isSuccess, postTimeslot.isPending, navigate]);

  return (
    <FormLayout title="Tambah Timeslot">
      <BaseTimeslotForm onSubmit={handleSubmitForm} />
    </FormLayout>
  );
};

export default EditTimeslotPage;
