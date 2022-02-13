import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  containerImage: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/5061368/pexels-photo-5061368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const InConstruction = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerImage}>
      <Grid container>
        <Grid item align="center" xs={12} p={1}>
          <Typography variant="h2" gutterBottom component="div">
            En construcción...
          </Typography>
          <Typography variant="h6" gutterBottom component="div" p={1}>
            Nuestro sitio web se encuentra actualmente en mantenimiento
            programado. <br /> Deberíamos estar de vuelta en breve. Gracias por
            tu paciencia.
          </Typography>
        </Grid>
        <Grid item align="center" xs={12} p={1}>
          <Typography variant="h5" gutterBottom component="div">
            ¿Alguna consulta?
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            950 758 317 - 996 043 847 - jjsilvaperu@gmail.com
          </Typography>
        </Grid>
        <Grid item align="center" xs={12} p={2}>
          <Link href="https://www.facebook.com/energiaymantenimientoelectrico" outline="none">
            <Button variant="contained" size="large">
              Visitanos en Facebook
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InConstruction;
