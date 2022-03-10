import type { NextPage } from "next";
import { Grid } from "@mui/material";
import { Benefits } from "components/benefits";
import { Header } from "components/headerPage";
import { Vantages } from "components/vantages";

import benefits from "mocks/benefits.json";

const Home: NextPage = () => {
  return (
    <Grid container pt={5}>
      <Header />
      <Vantages />
      <Benefits
        benefitsData={benefits?.data}
        observationData={benefits?.observation}
      />
    </Grid>
  );
};

export default Home;
