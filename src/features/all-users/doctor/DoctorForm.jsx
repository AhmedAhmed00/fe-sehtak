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
import Select from "../../../ui/Select";
import DoctorSchema from "../../../schemas/DoctorSchema";

function DoctorForm() {
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
    // resolver: zodResolver(DoctorSchema),
    defaultValues: {},
  });

  const validate = useValidate(errors);

  const onSubmit = (values) => {
    navigate("/all-users/doctor/branch-form/1");
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
          <FormRow error={validate("password")} label={"Password* "}>
            <Input {...register("password")} />
          </FormRow>
        </InputsRow>
        <InputsRow>
          <FormRow error={validate("title")} label={"Title*"}>
            <Select
              register={register("title")}
              items={[]}
              chooseValue="id"
              renderValue={"name"}
            />
          </FormRow>
          <FormRow error={validate("bio")} label={"Bio*"}>
            <Input {...register("bio")} />
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
          <FormRow error={validate("specialization")} label={"Specialization"}>
            <Select register={register("specialization")} items={[]} />
          </FormRow>
          <FormRow
            error={validate("sub_specialization")}
            label={"Sub Specialization"}
          >
            <Select register={register("sub_specialization")} items={[]} />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow
            error={validate("tax_registration")}
            label={"Tax Regestration*"}
          >
            <Input {...register("tax_registration")} />
          </FormRow>
          <FormRow label={"Gender *"}>
            <Row type="horizontal" justify="start" gap="20px">
              <label>
                <Row type="horizontal" justify="start" gap="8px">
                  <p>Male</p>
                  <input {...register("gender")} name="gender" type="radio" />
                </Row>
              </label>
              <label>
                <Row type="horizontal" justify="start" gap="8px">
                  <p>Male</p>
                  <input {...register("gender")} name="gender" type="radio" />
                </Row>
              </label>
            </Row>
          </FormRow>
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
                  name="services"
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

export default DoctorForm;
