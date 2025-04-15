import { useFieldArray } from "react-hook-form";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";
import "react-phone-input-2/lib/style.css"; // Import styles
import FormRow from "./FormRow";
import Input from "./Input";
import Heading from "./Heading";
import { StyledDivider } from "./Divider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceRow = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default function Services({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "services", // Must match form field name
  });

  return (
    <Container>
      <Heading
        style={{ color: "var(--grey-color)", marginTop: "10px" }}
        as="h2"
      >
        Services
      </Heading>
      <StyledDivider />

      {fields.map((field, index) => (
        <ServiceRow key={field.id}>
          <FormRow
            orientation="vertical"
            label="Service Name"
            error={errors?.services?.[index]?.service_name?.message}
          >
            <Input
              {...register(`services.${index}.service_name`)}
              name={`services.${index}.service_name`}
            />
          </FormRow>
          <FormRow
            orientation="vertical"
            label="Contract Price"
            error={errors?.services?.[index]?.contract_price?.message}
          >
            <Input
              {...register(`services.${index}.contract_price`)}
              name={`services.${index}.contract_price`}
            />
          </FormRow>
          <FormRow
            orientation="vertical"
            label="Service Price"
            error={errors?.services?.[index]?.service_price?.message}
          >
            <Input
              {...register(`services.${index}.service_price`)}
              name={`services.${index}.service_price`}
            />
          </FormRow>
          <FormRow
            orientation="vertical"
            label="App Price"
            error={errors?.services?.[index]?.app_price?.message}
          >
            <Input
              {...register(`services.${index}.app_price`)}
              name={`services.${index}.app_price`}
            />
          </FormRow>

          <Icons>
            <CiCirclePlus
              size={22}
              onClick={() =>
                append({
                  service_name: "",
                  contract_price: "",
                  service_price: "",
                  app_price: "",
                })
              }
              style={{ cursor: "pointer", color: "green", marginTop: "30px" }}
            />
            {fields.length > 1 && (
              <CiCircleMinus
                size={22}
                onClick={() => remove(index)}
                style={{ cursor: "pointer", color: "red", marginTop: "30px" }}
              />
            )}
          </Icons>
        </ServiceRow>
      ))}
    </Container>
  );
}
