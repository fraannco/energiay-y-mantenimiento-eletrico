import { Button, Container, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Intro = () => {
  return (
    <Box bgcolor="white">
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignContent="center" py={10}>
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
              sx={{ color: "#505050", maxWidth: "650px" }}
            >
              Novedosa publicación peruana con enfoque al desarrollo y difusión
              de investigaciones
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
          <Grid item md={6} sm={12} xs={12} align="center" py={2}>
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
                {"Visitanos en Facebook"}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
