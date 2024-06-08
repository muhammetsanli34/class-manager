"use client";

import style from "./style.module.scss";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import FormBase from "@/components/form/FormBase";
import BaseInput from "@/components/form/BaseInput";
import registerSchema from "@/app/validations/Register";
import { Role } from "@prisma/client";
import Alert from "@mui/material/Alert";
import { useContext } from "react";
import { AlertContext } from "@/providers/AlertProvider";

interface BaseRegisterProps {
  role: Role;
}

export default function BaseRegister(props: BaseRegisterProps) {
  const alert = useContext(AlertContext);

  const formValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profile_picture: "",
    role: props.role,
  };

  const submit = async () => {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }).then((res) => {
      res
        .json()
        .then((data) => {
          if (res.ok) {
            alert(data.message, "success");
          } else {
            alert(data.message, "error");
          }
        })
        .catch((err) => {
          alert("Error registering user", "error");
        });
    });
  };

  return (
    <div className="container vertical-center">
      <FormBase
        className={style.register}
        submit={() => {
          submit();
        }}
        values={formValues}
        rules={registerSchema}
      >
        <Typography variant="h4" align="center" style={{ marginTop: "5rem" }}>
          Register
        </Typography>
        <Card className="w-1/2 mx-auto mt-5">
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <BaseInput placeholder="First Name" name="firstName" />
              </Grid>
              <Grid item xs={6}>
                <BaseInput placeholder="Last Name" name="lastName" />
              </Grid>
              <Grid item xs={6}>
                <BaseInput placeholder="Email" name="email" />
              </Grid>
              <Grid item xs={6}>
                <BaseInput
                  placeholder="Password"
                  name="password"
                  type="password"
                />
              </Grid>
              <Grid item xs={6}>
                <BaseInput
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
              </Grid>
              <Grid item xs={6}>
                <BaseInput
                  type="file"
                  placeholder="Profile Picture"
                  name="profilePicture"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full"
                  type="submit"
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </FormBase>
    </div>
  );
}
