import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FormikProps, useFormik } from "formik";
import * as yup from "yup";

import { ChangeEvent } from "react";
import { useAuth } from "../features/auth/useAuth";
import { Link, useNavigate } from "react-router-dom";
interface FormValuesType {
  name?: string;
  email: string;
  password: string;
}

const AuthForm = ({ isLogin }: { isLogin: boolean }) => {
  const { mutate, isLoading, isError, error } = useAuth(isLogin);
  const navigate = useNavigate();

  const formik: FormikProps<FormValuesType> = useFormik<FormValuesType>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: (data) => {
          console.log(data?.data);
          isLogin ? navigate("/products") : navigate("/");
        },
        onError: (error) => {
          console.log(error);
        },
      });
    },
    validationSchema: yup.object().shape({
      name: isLogin ? yup.string() : yup.string().required("Nama wajib diisi"),
      email: yup
        .string()
        .email("Email tidak valid")
        .required("Email wajib diisi"),
      password: yup
        .string()
        .min(6, "Password minimal 6 karakter")
        // .matches(/[A-Z]/, "Harus mengandung huruf besar")
        // .matches(/[a-z]/, "Harus mengandung huruf kecil")
        // .matches(/[0-9]/, "Harus mengandung angka")
        // .matches(/[!@#$%^&*(),.?":{}|<>]/, "Harus mengandung karakter khusus")
        .required("Password wajib diisi"),
    }),
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    formik.setFieldValue(target?.name, target?.value);
  };

  return (
    <Container py={10}>
      <Heading>Form Validation</Heading>
      <Box padding={4} border="1px solid lightgray">
        <form onSubmit={formik?.handleSubmit}>
          <Stack spacing={3}>
            {!isLogin && (
              <FormControl isInvalid={!!formik?.errors?.name}>
                <FormLabel>User Name</FormLabel>
                <Input onChange={handleInput} name="name" />
                <FormErrorMessage>{formik?.errors?.name}</FormErrorMessage>
              </FormControl>
            )}
            <FormControl isInvalid={!!formik?.errors?.email}>
              <FormLabel>Email</FormLabel>
              <Input onChange={handleInput} name="email" />
              <FormErrorMessage>{formik?.errors?.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formik?.errors?.password}>
              <FormLabel>Password</FormLabel>
              <Input onChange={handleInput} name="password" />
              <FormErrorMessage>{formik?.errors?.password}</FormErrorMessage>
            </FormControl>
            {isError && (
              <Box color="red.500">
                {error?.message || "Something went wrong"}
              </Box>
            )}
            <Button type="submit" colorScheme="teal" isLoading={isLoading}>
              {isLogin ? "Login" : "Register"}
            </Button>
            {isLogin ? (
              <Box>
                Don't have an account?{" "}
                <Text as={Link} to="/register" color={"blue.500"}>
                  Register
                </Text>
              </Box>
            ) : (
              <Box>
                Already have an account?{" "}
                <Text as={Link} to="/" color={"blue.500"}>
                  Login
                </Text>
              </Box>
            )}
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AuthForm;
