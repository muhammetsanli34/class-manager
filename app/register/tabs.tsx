"use client";

import BaseRegister from "@/app/common/BaseRegister";
import TabPanel from "@/components/TabPanel";
import { Tab, Tabs } from "@mui/material";
import { Role } from "@prisma/client";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import SwipeableViews from "react-{headers} from "next/headers";
import { headers } from "next/headers";

// return current path to component

export default function Register() {
  const headerList = headers();
  const pathname = usePathname();

  const [role, setRole] = useState<Role>(
    pathname.includes("student") ? Role.STUDENT : Role.TEACHER
  );
  const handleChange = (event: React.ChangeEvent<{}>, newValue: Role) => {
    // setRole(newValue);
    setRole(newValue);
  };
  return (
    <>
      <Tabs
        value={role}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Teacher" value={Role.TEACHER} />
        <Tab label="Student" value={Role.STUDENT} />
      </Tabs>
      {/* <SwipeableViews index={role} onChangeIndex={setRole}>
        <TabPanel value={role} index={Role.TEACHER}>
          <BaseRegister role={Role.TEACHER} />
        </TabPanel>
        <TabPanel value={role} index={Role.STUDENT}>
          <BaseRegister role={Role.STUDENT} />
        </TabPanel>
      </SwipeableViews> */}
    </>
  );
}
