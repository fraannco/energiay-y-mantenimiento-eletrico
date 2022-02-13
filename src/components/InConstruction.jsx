import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  rightImage: {
    backgroundImage:
      "url(https://images.pexels.com/photos/6990303/pexels-photo-6990303.jpeg?cs=srgb&dl=pexels-artem-podrez-6990303.jpg&fm=jpg)",
  },
});

const InConstruction = () => {
  const classes = useStyles();

  return (
    <>
      <Grid fixed bgcolor="blue">
        <Grid item maxWidth="xl" align="left" p={12} md={6} bgcolor="red">
          <Typography variant="h2" gutterBottom component="div">
            En construcción...
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Nuestro sitio web se encuentra actualmente en mantenimiento
            programado. Deberíamos estar de vuelta en breve. Gracias por tu
            paciencia.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default InConstruction;
