import { Grid, Typography, Box } from "@mui/material";
import { ButtonPrimary } from "components/buttonPrimary";
import { ButtonSecondary } from "components/buttonSecondary";
import Image from "next/image";
// import Logo from "assets/logo.png";
import logo from "../../../public/images/logo.png";
import styles from "./headerPage.module.css";

function Header() {
  return (
    <Grid container className={styles.header} pb={10}>
      <Grid container className={styles.header_menu}>
        <Grid item lg={4} md={12}>
          Dúvidas fale conosco
        </Grid>
        <Grid item lg={4} md={12}>
          <Image src={logo} alt="logo.dropfy" />
        </Grid>
        <Grid item lg={4} md={12}>
          <ButtonSecondary title="Fazer Login" />
        </Grid>
      </Grid>
      <Grid container className={styles.header_content}>
        <Grid item lg={6} md={12} mt={5}>
          <Box mb={5}>
            <Typography variant="h1" className={styles.header_content_title}>
              Tenha até 3x mais lucro em sua operação de dropshipping.
              Processando pedidos fora do aliexpress.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            mt={4}
            className={styles.header_content_description}
          >
            Economize no pagamento dos seus produtos e potencialize seu lucro
            com a ferramenta mais poderosa de processamento de pedidos do
            mercado.
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} mt={5}>
          <ButtonPrimary title="QUERO LUCRAR MAIS" width={400} />
        </Grid>
      </Grid>
      <Grid container className={styles.header_video} pt={10}>
        <Grid item lg={12} md={12}>
          <Box className={styles.header_video_title}>
            <Typography variant="body1" className={styles.titleBlack} mr={1}>
              Assista o vídeo até o final e veja
            </Typography>
            <Typography variant="body1" className={styles.titleBlue}>
              Como Funciona
            </Typography>
          </Box>
          video aqui
        </Grid>
      </Grid>
    </Grid>
  );
}

export { Header };
