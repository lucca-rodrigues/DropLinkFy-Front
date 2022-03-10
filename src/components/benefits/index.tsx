import { Grid, Typography } from "@mui/material";
import { ButtonPrimary } from "components/buttonPrimary";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./benefits.module.css";

interface IBenefitItem {
  id: number;
  description: string;
}
interface IBenefitsProps {
  benefitsData: Array<IBenefitItem>;
  observationData?: string;
}

function Benefits({ benefitsData, observationData }: IBenefitsProps) {
  return (
    <Grid container className={styles.section_benefits} pb={2}>
      <Grid item lg={6} md={12}></Grid>
      <Grid item lg={5} md={12}>
        <ul className={styles.section_benefits_list}>
          {benefitsData?.map((item: any) => (
            <li key={item?.id} className={styles.section_benefits_list_item}>
              <>
                <FaCheckCircle
                  className={styles.section_benefits_list_item_icon}
                  size={22}
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
        <Typography
          className={styles.section_benefits_list_item_observation}
          mb={3}
        >
          Obs: {observationData}
        </Typography>
        <ButtonPrimary title="QUERO AUMENTAR MEU FATURAMENTO" />
      </Grid>

      <Grid container className={styles.section_beneficts_footer} pt={5}>
        <Grid item lg={4} md={4} sm={12}>
          <Typography variant="body1">Copyright © Droplinkfy 2022</Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={12}>
          <Typography variant="body1">
            E-mail: suporte@droplinkfy.com
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={12}>
          <Typography variant="body1">
            *Não somos responsáveis pelos bloqueios de contas dos usuários
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export { Benefits };
