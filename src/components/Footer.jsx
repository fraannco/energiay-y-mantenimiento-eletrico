import {
  Box,
  Button,
  Container,
  GlobalStyles,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ textDecoration: "none", fontWeight: "300" }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://mui.com/"
        sx={{ textDecoration: "none", fontWeight: "300" }}
      >
        Energía & Mantenimiento Eléctrico S.A.C
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Empresa",
    description: ["Sobre nosotros", "Historia", "Contactanos"],
  },
  {
    title: "Redes",
    description: ["Facebook"],
  },
  {
    title: "Explora",
    description: ["Revistas"],
  },
  {
    title: "Productos",
    description: ["Privacy policy", "Terms of use"],
  },
];

const useStyles = makeStyles({
  imgLogo: {
    maxHeight: "32px",
    paddingBottom: "0.5rem",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <Box
        sx={{
          borderTop: "1px solid #E5E7EB",
        }}
        py={4}
      >
        <Container maxWidth="lg" component="footer">
          <Grid container py={2}>
            <Grid item md={6} xs={12} pb={{ xs: 4 }}>
              <Box pr={10}>
                <img
                  src="./logo512.png"
                  alt="footer-logo"
                  className={classes.imgLogo}
                />
                <Typography variant="body2" sx={{ fontSize: "0.875rem", py: 1 }}>
                  Crea su mejor anuncio y <br /> exponga su mejor tecnología.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "0.875rem" }}>
                  energiaymantenimientoelect@gmail.com
                </Typography>
                {/*                 <form>
                  <Grid container py={2}>
                    <Grid item xs={8}>
                      <TextField
                        fullWidth
                        sx={{ backgroundColor: "#E4E4E4" }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Button sx={{ width: "100%", height: "100%" }}>
                        Suscribirse
                      </Button>
                    </Grid>
                  </Grid>
                </form> */}
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container spacing={4} justifyContent="space-evenly">
                {footers.map((footer) => (
                  <Grid item xs={6} sm={3} key={footer.title}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      gutterBottom
                    >
                      {footer.title}
                    </Typography>
                    <ul>
                      {footer.description.map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            variant="body1"
                            color="text.secondary"
                            sx={{ textDecoration: "none" }}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Copyright />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
