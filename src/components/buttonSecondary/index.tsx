import React, { ButtonHTMLAttributes } from "react";
import { Button as MuiButton } from "@mui/material";
import styles from "./buttonSecondary.module.css";

interface IButtonSecondaryProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  width?: number;
}

function ButtonSecondary({ title, width }: IButtonSecondaryProps) {
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

export { ButtonSecondary };
