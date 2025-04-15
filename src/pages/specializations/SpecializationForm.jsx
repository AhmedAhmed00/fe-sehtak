import { useForm } from "react-hook-form";
import useValidate from "../../hooks/useValidate";
import Form from "../../ui/Form";
import { InputsRow } from "../../ui/InputsRow";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Row from "../../ui/Row";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

function SpecializationForm({ handleClose }) {
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
        <InputsRow>
          <FormRow error={validate("name")} label={"Name"}>
            <Input {...register("name")} />
          </FormRow>
        </InputsRow>

        <Row type="horizontal">
          <InputsRow>
            <FormRow error={validate("image")} label={"Image*"}>
              <FileInput control={control} name="image" />
            </FormRow>
          </InputsRow>
        </Row>

        <Row margin="20px 10px" type="horizontal" justify="end" gap="15px">
          <Button isLoading={false} size="medium" $variation="primary">
            Add Specialization
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default SpecializationForm;
