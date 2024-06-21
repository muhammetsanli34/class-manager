import { headers } from "next/headers";
import Tabs from "./tabs";

export default function Register() {

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center mt-5">
        Register
      </h1>
      <Tabs />
    </div>
  );
}
