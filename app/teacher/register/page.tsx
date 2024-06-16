import BaseRegister from "@/app/common/BaseRegister";
import { Role } from "@prisma/client";

export default function Register() {
  return <BaseRegister role={Role.TEACHER} />;
}
