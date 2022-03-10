import React, { ButtonHTMLAttributes } from "react";
import { Button as MuiButton } from "@mui/material";
import styles from "./buttonPrimary.module.css";

interface IButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  width?: number;
}

function ButtonPrimary({ title, width }: IButtonPrimaryProps) {
  return (
    <MuiButton
      variant="contained"
      className={styles.button}
      style={{ width: width }}
    >
      {title}
    </MuiButton>
  );
}

export { ButtonPrimary };
