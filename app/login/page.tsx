"use client";
import BaseInput from "@/components/form/BaseInput";
import FormBase from "@/components/form/FormBase";
import { AlertContext } from "@/providers/AlertProvider";
import { Button, Card, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Login() {
  const alert = useContext(AlertContext);
  const router = useRouter();

  const formValues = {
    email: "",
    password: "",
  };

  const submit = async () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }).then((res) => {
      res
        .json()
        .then((data) => {
          if (res.status === 200) {
            alert(data.message, "success");
            router.push("/");
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("user", JSON.stringify(data.user));
          } else {
            alert(data.message, "error");
          }
        })
        .catch((err) => {
          alert("Error logging in", "error");
        });
    });
  };

  return (
    <div className="flex flex-col gap-8 container vertical-center">
      <h1 className="text-4xl font-bold text-center mt-5">Login</h1>

      <FormBase
        submit={() => {
          submit();
        }}
        className="container vertical-center"
        values={formValues}
      >
        <Card className="w-1/2 mx-auto mt-5">
          <CardContent className="flex flex-col gap-8">
            <BaseInput type="email" placeholder="Email" name="email" />
            <BaseInput type="password" placeholder="Password" name="password" />
            <Button type="submit" color="primary" variant="contained">
              Login
            </Button>
          </CardContent>
        </Card>
      </FormBase>
    </div>
  );
}
