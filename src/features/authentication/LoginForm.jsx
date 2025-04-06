import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginschema } from "./loginSchema";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const { isLoading, login, accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginschema),
  });

  async function onSubmit(data) {
    await login(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email Address" orientation="vertical">
        <Input
          style={{ marginBottom: "10px" }}
          type="text"
          id="email_address"
          autoComplete="email_address"
          {...register("email_address")}
        />
      </FormRow>

      {errors.email_address && (
        <p className="text-red-500">{errors.email_address.message}</p>
      )}

      <FormRow label="Password" orientation="vertical">
        <Input type="password" id="password" {...register("password")} />
      </FormRow>

      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
      <FormRow>
        <Button
          isLoading={isLoading}
          style={{ marginTop: "25px" }}
          size="large"
        >
          Login
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
