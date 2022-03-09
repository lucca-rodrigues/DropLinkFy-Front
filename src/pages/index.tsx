import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Grid, Typography } from "@mui/material";
import { Logo } from "assets";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Droplinkfy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Grid container pt={5}>
        <Grid item lg={4} md={12}>
          Dúvidas fale conosco
        </Grid>
        <Grid item lg={4} md={12}>
          <img src="../assets/logo.png" alt="logo dropfy" />
        </Grid>
        <Grid item lg={4} md={12}>
          Teste
        </Grid>
        <Grid item lg={4} md={12}>
          <Typography variant="h4">
            Tenha até 3x mais lucro em sua operação de dropshipping. Processando
            pedidos fora do aliexpress.
          </Typography>

          <Typography variant="h4">
            Economize no pagamento dos seus produtos e potencialize seu lucro
            com a ferramenta mais poderosa de processamento de pedidos do
            mercado.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
