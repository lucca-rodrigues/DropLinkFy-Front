import { Grid, Typography } from "@mui/material";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./benefits.module.css";

interface IBenefitsProps {
  id: number;
  description: string;
  benefitsData: object[];
}

function Benefits({ benefitsData }: IBenefitsProps) {
  return (
    <Grid container className="section_benefits">
      <Grid item lg={6} md={12}></Grid>
      <Grid item lg={6} md={12}>
        <ul className="section_benefits_list">
          {benefitsData?.map((item: any) => (
            <li key={item?.id} className={styles.section_benefits_list_item}>
              <>
                <FaCheckCircle
                  className={styles.section_benefits_list_item_icon}
                  size={30}
                />
                <Typography
                  color="red"
                  className={styles.section_benefits_list_item_title}
                >
                  {item?.description}
                </Typography>
              </>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export { Benefits };
