import Role from "@/types/Role";
import style from "./style.module.scss";
import { FormControl, Grid, Input } from "@mui/material";

interface BaseRegisterProps {
  role: Role;
}

export default function BaseRegister(props: BaseRegisterProps) {
  return (
    <div>
      <FormControl className={style.register}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Input placeholder="First Name" />
          </Grid>
          <Grid item xs={6}>
            <Input placeholder="Last Name" />
          </Grid>
          <Grid item xs={6}>
            <Input placeholder="Email" />
          </Grid>
          <Grid item xs={6}>
            <Input placeholder="Password" />
          </Grid>
          <Grid item xs={6}>
            <Input type="" placeholder="Confirm Password" />
          </Grid>
          // profile picture
          <Grid item xs={6}>
            <Input type="file" placeholder="Profile Picture" />
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
}
