import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  containerImage: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/3877660/pexels-photo-3877660.jpeg?cs=srgb&dl=pexels-ricardo-esquivel-3877660.jpg&fm=jpg')`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
});

const InConstruction = () => {
  const classes = useStyles();

  return (

      <Grid container className={classes.containerImage} >
        <Grid item align="center" p={2} md={12}>
          <Typography variant="h2" gutterBottom component="div">
            En construcción...
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            Nuestro sitio web se encuentra actualmente en mantenimiento
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            programado. Deberíamos estar de vuelta en breve. Gracias por tu
            paciencia.
          </Typography>
        </Grid>
      </Grid>
  );
};

export default InConstruction;
