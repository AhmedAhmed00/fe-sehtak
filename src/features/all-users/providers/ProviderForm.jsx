import Button from "../../../ui/Button";
import Row from "../../../ui/Row";
import FileInput from "../../../ui/FileInput";
import FormRow from "../../../ui/FormRow";
import { InputsRow } from "../../../ui/InputsRow";
import Input from "../../../ui/Input";
import Form from "../../../ui/Form";
import useValidate from "../../../hooks/useValidate";
import useDetectMode from "../../../hooks/useDetectMode";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import ToggleSwitch from "../../../ui/ToogleSwitch";
import { services } from "../../../data/selectData";

function ProviderForm() {
  const { id, isEditingSession } = useDetectMode();
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    reset,
    watch,
    setError,
  } = useForm({
    defaultValues: {},
  });

  const validate = useValidate(errors);

  const onSubmit = (values) => {
    navigate("/all-users/providers/branch-form/1");
    console.log(values);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsRow>
          <FormRow error={validate("name")} label={"Name"}>
            <Input {...register("name")} />
          </FormRow>

          <FormRow error={validate("phone")} label={"Phone*"}>
            <Input {...register("phone")} />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow error={validate("email")} label={"Email*"}>
            <Input {...register("email")} />
          </FormRow>
          <FormRow error={validate("Password")} label={"password* "}>
            <Input {...register("password")} />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow error={validate("address")} label={" Address "}>
            <Input {...register("address")} />
          </FormRow>
          <FormRow
            error={validate("discount_percentage")}
            label={"Discount percentage*"}
          >
            <Input {...register("discount_percentage")} />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow
            error={validate("tax_registration")}
            label={"Tax Regestration*"}
          >
            <Input {...register("tax_registration")} />
          </FormRow>
          <FormRow></FormRow>
        </InputsRow>

        <Row type="horizontal">
          <div style={{ width: "100%" }}>
            <InputsRow>
              <FormRow error={validate("image")} label={"Image*"}>
                <FileInput control={control} name="image" />
              </FormRow>
            </InputsRow>
            <InputsRow>
              <FormRow error={validate("taxes_images")} label={"Taxes Images*"}>
                <FileInput control={control} name="attachments" />
              </FormRow>
            </InputsRow>
          </div>
          <div style={{ width: "100%" }}>
            <Row>
              {services?.map((service) => (
                <ToggleSwitch
                  key={service.id}
                  control={control}
                  name="custom_permissions"
                  permission={service}
                />
              ))}
            </Row>
          </div>
        </Row>

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

export default ProviderForm;
