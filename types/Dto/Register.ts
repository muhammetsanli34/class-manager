import { Role } from "@prisma/client";

export default interface RegisterDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  profile_picture: string;
  role: Role;
}
