import Button from "../../../ui/Button";
import Row from "../../../ui/Row";
import FileInput from "../../../ui/FileInput";
import FormRow from "../../../ui/FormRow";
import { InputsRow } from "../../../ui/InputsRow";
import Input from "../../../ui/Input";
import Form from "../../../ui/Form";
import useValidate from "../../../hooks/useValidate";
import useDetectMode from "../../../hooks/useDetectMode";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import ToggleSwitch from "../../../ui/ToogleSwitch";
import { services } from "../../../data/selectData";
import Select from "../../../ui/Select";
import DatePickerInput from "../../../ui/DatePicker";
import Appointments from "../../../ui/Appointments";
import { DevTool } from "@hookform/devtools";
import Services from "../../../ui/Services";
import { capitalize } from "../../../utils/helpers";

function ServiceForm() {
  const { userType, userId } = useParams();
  const navigate = useNavigate();
  const { setTitle } = useOutletContext();
  setTitle(
    `All Users > ${capitalize(userType)} > Add Service To ${capitalize(userType)} Number #${userId}`
  );

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    reset,
    watch,
    setError,
  } = useForm({
    defaultValues: {
      services: [
        {
          service_name: "",
          contract_price: "",
          service_price: "",
          app_price: "",
        },
      ],
    },
  });

  const validate = useValidate(errors);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Services control={control} register={register} errors={errors} />
        <Row margin="20px 10px" type="horizontal" justify="end" gap="15px">
          <Button isLoading={false} size="medium" $variation="primary">
            Next
          </Button>
        </Row>
      </Form>
      {/* <DevTool control={control} /> */}
    </>
  );
}

export default ServiceForm;
