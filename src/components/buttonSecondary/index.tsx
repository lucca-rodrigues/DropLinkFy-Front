import React from "react";
import { Button as MuiButton } from "@mui/material";
import styles from "./button.module.css";

function ButtonSecondary() {
  return (
    <MuiButton variant="contained" color="primary">
      QUERO LUCRAR MAIS
    </MuiButton>
  );
}

export { ButtonSecondary };
