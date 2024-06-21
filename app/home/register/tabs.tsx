"use client";
import BaseRegister from "@/app/common/BaseRegister";
import TabPanel from "@/components/TabPanel";
import { Tab, Tabs } from "@mui/material";
import { Role } from "@prisma/client";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const pathname = usePathname();

  const [role, setRole] = useState<2 | 1>(2);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: 2 | 1) => {
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
        <Tab label="Teacher" value={1} />
        <Tab label="Student" value={2} />
      </Tabs>
        <TabPanel value={1} index={role}>
          <BaseRegister role={Role.TEACHER} />
        </TabPanel>
        <TabPanel value={2} index={role}>
          <BaseRegister role={Role.STUDENT} />
        </TabPanel>
    </>
  );
}
