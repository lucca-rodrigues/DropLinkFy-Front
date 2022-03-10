import React from "react";
import { Button as MuiButton } from "@mui/material";
import styles from "./buttonPrimary.module.css";

interface IButtonPrimaryProps {
  title: string;
}

function ButtonPrimary({ title }: IButtonPrimaryProps) {
  return (
    <MuiButton variant="contained" className={styles.button}>
      {title}
    </MuiButton>
  );
}

export { ButtonPrimary };
