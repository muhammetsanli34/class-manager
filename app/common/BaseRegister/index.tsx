import Role from "@/types/Role";
import style from "./style.module.scss";
import {
  Card,
  CardContent,
  FormControl,
  Grid,
  Input,
  Typography,
} from "@mui/material";

interface BaseRegisterProps {
  role: Role;
}

export default function BaseRegister(props: BaseRegisterProps) {
  return (
    <div className="container vertical-center">
      <FormControl className={style.register}>
        <Typography variant="h4" align="center" style={{ marginTop: "5rem" }}>
          Register
        </Typography>
        <Card>
          <CardContent>
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
              <Grid item xs={6}>
                <Input type="file" placeholder="Profile Picture" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </FormControl>
    </div>
  );
}
