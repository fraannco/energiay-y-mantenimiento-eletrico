import { Button, Container, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const logos = [
  "./images/about-us/logos/logo-LOGYTEC.png",
  "./images/about-us/logos/LOGO-KNIPEX.png",
  "./images/about-us/logos/logo-INGETROL.png",
  "./images/about-us/logos/logo-IFITSA.png",
  "./images/about-us/logos/logo-able.png",
  "./images/about-us/logos/logo-Energotec.png",
];

const useStyles = makeStyles({
  imgLogo: {
    height: "56px",
  },
});

const Intro = () => {
  const classes = useStyles();

  return (
    <Box bgcolor="white">
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignContent="center" py={7} px={5}>
          <Grid item md={12} sm={12} xs={12} align="center">
            <Typography
              color="secondary"
              variant="body2"
              fontWeight="bold"
              component="div"
              py={1}
            >
              Sobre nosotros
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              component="div"
              sx={{ color: "#505050", maxWidth: "700px" }}
            >
              Novedosa publicación peruana con enfoque al desarrollo y difusión
              de investigaciones y nuevas tecnologías.
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ color: "#505050", maxWidth: "500px" }}
              py={1}
            >
              Cubrimos mercados importantes del sector eléctrico como
              Generación, Transmisión y Distribución de inversiones y proyectos.
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12} align="center" py={2}>
            <Link
              rel="noopener noreferrer"
              href="https://www.facebook.com/energiaymantenimientoelectrico"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                style={{
                  boxShadow: "0px 0px 0px 0px",
                  paddingLeft: "4em",
                  paddingRight: "4em",
                  paddingBlock: "1em",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {"Visitanos tambien en Facebook"}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Box p={4}>
          <Grid container alignContent="center" justifyContent="center">
            {logos.map((logo, index) => (
              <Grid item md={2} p={1}>
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  key={index}
                  className={classes.imgLogo}
                />
              </Grid>
            ))}
            <Typography variant="body2" mt={2} sx={{maxWidth: "400px", color: "#707070"}} align="center">
              Destacadas empresas y marcas de prestigio nacional e internacional
              siempre presentes en lanzamientos de nuevos productos.
            </Typography>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Intro;
