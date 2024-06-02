import { object, string } from "yup";

const registerSchema = object().shape({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
  confirmPassword: string().required("Confirm password is required"),
  profilePicture: string().required("Profile picture is required"),
});

export default registerSchema;
