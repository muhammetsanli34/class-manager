import { headers } from "next/headers";

export default function Register() {
  const headerList = headers();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">
        {headerList.get("x-current-path")?.includes("student")
          ? "Student"
          : "Teacher"}
        Registration
      </h1>
    </div>
  );
}
