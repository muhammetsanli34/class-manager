"use client";

import Alert from "@mui/material/Alert";
import { createContext, useEffect, useState } from "react";

type AlertType = "success" | "error";

type Alert = {
  message: string;
  type: AlertType;
  duration: number;
};

export const AlertContext = createContext(
  (message: string, type: "success" | "error") => {}
);

export default function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(() => {
        setAlerts(alerts.slice(1));
      }, alerts[0].duration);
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  const addAlert = (
    message: string,
    type: AlertType,
    duration: number = 5000
  ) => {
    setAlerts([...alerts, { message, type, duration }]);
  };

  return (
    <AlertContext.Provider value={addAlert}>
      {alerts.map((alert, index) => (
        <Alert
          key={index}
          severity={alert.type}
            sx={{ position: "fixed", bottom: 5, right: 5 }}

        >
          {" "}
          {alert.message}{" "}
        </Alert>
      ))}
      {children}
    </AlertContext.Provider>
  );
}
