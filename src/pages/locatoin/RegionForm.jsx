import { useForm } from "react-hook-form";
import useValidate from "../../hooks/useValidate";
import Form from "../../ui/Form";
import { InputsRow } from "../../ui/InputsRow";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Row from "../../ui/Row";
import Button from "../../ui/Button";

function RegionForm({ handleClose }) {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm({
    defaultValues: {},
  });

  const validate = useValidate(errors);

  const onSubmit = (values) => {
    handleClose();
    console.log(values);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsRow dir="column">
          <FormRow error={validate("name")} label={"Name EN"}>
            <Input {...register("name")} />
          </FormRow>
          <FormRow error={validate("name")} label={"Name AR"}>
            <Input {...register("name")} />
          </FormRow>
        </InputsRow>

        <Row margin="20px 10px" type="horizontal" justify="end" gap="15px">
          <Button isLoading={false} size="medium" $variation="primary">
            Add Region
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default RegionForm;
