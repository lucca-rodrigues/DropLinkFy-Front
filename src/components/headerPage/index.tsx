import { Button, Grid, Typography, Box } from "@mui/material";

function Header() {
  return (
    <Grid container lg={12}>
      <Grid item lg={4} md={12}>
        Dúvidas fale conosco
      </Grid>
      <Grid item lg={4} md={12}>
        <img src="../assets/logo.png" alt="logo dropfy" />
      </Grid>
      <Grid item lg={4} md={12}>
        Teste
      </Grid>
      <Grid item lg={4} md={12} mt={5}>
        <Box mb={5}>
          <Typography variant="h4">
            Tenha até 3x mais lucro em sua operação de dropshipping. Processando
            pedidos fora do aliexpress.
          </Typography>
        </Box>

        <Typography variant="span" mt={4}>
          Economize no pagamento dos seus produtos e potencialize seu lucro com
          a ferramenta mais poderosa de processamento de pedidos do mercado.
        </Typography>
      </Grid>
      <Grid item lg={12} md={12} mt={5}>
        <Button variant="contained" color="primary">
          QUERO LUCRAR MAIS
        </Button>
      </Grid>
    </Grid>
  );
}

export { Header };
