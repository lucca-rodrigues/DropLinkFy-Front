import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import benefits from "mocks/benefits.json";
import { Benefits } from "components/benefits";
import { Header } from "components/headerPage";

const Home: NextPage = () => {
  return (
    <Grid container pt={5}>
      <Header />
      <Benefits
        benefitsData={benefits?.data}
        observationData={benefits?.observation}
      />
    </Grid>
  );
};

export default Home;
