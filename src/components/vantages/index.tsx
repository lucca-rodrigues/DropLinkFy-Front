import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import globalStyles from "../../styles/globals.module.css";
import styles from "./vantages.module.css";

import IconOne from "../../../public/images/icon-1.png";
import IconTwo from "../../../public/images/icon-2.png";
import IconTree from "../../../public/images/icon-4.png";
import IconFour from "../../../public/images/icon-4.png";
import IconFive from "../../../public/images/icon-5.png";

function Vantages() {
  return (
    <Grid container className={styles.vantages_section} pb={10}>
      <Grid item lg={12} mt={10} mb={10}>
        <Box className={styles.vantages_section_title}>
          <Typography
            variant="body1"
            className={globalStyles.titleBlack}
            mr={1}
          >
            Vantagens do
          </Typography>
          <Typography variant="body1" className={globalStyles.titleBlue}>
            Droplinkfy
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        className={styles.vantages_section_list_item}
      >
        <Box>
          <Image src={IconOne} alt="icon.1" />
        </Box>
      </Grid>
      <Grid
        container
        spacing={2}
        className={styles.vantages_section_list}
        pt={5}
      >
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          className={styles.vantages_section_list_item_content}
        >
          <Box>
            <Image src={IconTwo} alt="icon.2" />
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          className={styles.vantages_section_list_item_content}
        >
          <Box>
            <Image src={IconTree} alt="icon.3" />
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          className={styles.vantages_section_list_item_content}
          mt={10}
        >
          <Box>
            <Image src={IconFour} alt="icon.4" />
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          className={styles.vantages_section_list_item_content}
        >
          <Box>
            <Image src={IconFive} alt="icon.5" />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export { Vantages };
