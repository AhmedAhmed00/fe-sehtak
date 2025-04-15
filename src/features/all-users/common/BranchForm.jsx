import Button from "../../../ui/Button";
import Row from "../../../ui/Row";
import FormRow from "../../../ui/FormRow";
import { InputsRow } from "../../../ui/InputsRow";
import Input from "../../../ui/Input";
import Form from "../../../ui/Form";
import useValidate from "../../../hooks/useValidate";
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useForm } from "react-hook-form";

import Select from "../../../ui/Select";
import Appointments from "../../../ui/Appointments";

import { capitalize } from "../../../utils/helpers";

function BranchForm() {
  const navigate = useNavigate();

  const { userId, userType } = useParams();
  const { setTitle } = useOutletContext();
  setTitle(
    `All Users > ${capitalize(userType)} > Add Branch To ${capitalize(userType)} Number #${userId} `
  );

  console.log(userType);

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
      appointments: [
        {
          start_time: "",
          end_time: "",
          day: "",
        },
      ],
    },
  });

  const validate = useValidate(errors);

  const onSubmit = (values) => {
    console.log(values);
    navigate(`/all-users/${userType}/service-form/${userId}`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsRow>
          <FormRow error={validate("branch_name")} label={"Branch Name*"}>
            <Input {...register("branch_name")} />
          </FormRow>

          <FormRow error={validate("address")} label={"Address*"}>
            <Input {...register("address")} />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow error={validate("City")} label={"City*"}>
            <Select
              items={[]}
              register={register("city")}
              renderValue={"name"}
              chooseValue="id"
            />
          </FormRow>
          <FormRow error={validate("region")} label={"Region* "}>
            <Select
              items={[]}
              register={register("region")}
              renderValue={"name"}
              chooseValue="id"
            />
          </FormRow>
        </InputsRow>

        <Appointments control={control} register={register} errors={errors} />

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

export default BranchForm;
