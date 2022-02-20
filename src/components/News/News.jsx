import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  articleImge: {
    width: "100%",
    height: "100%px",
  },
});

const News = () => {
  const classes = useStyles();

  const publicdadRef1 = React.useRef();
  const publicdadRef2 = React.useRef();
  const publicdadRef3 = React.useRef();
  const [publicidad1, setPublicidad1] = React.useState({ width: 0, height: 0 });
  const [publicidad2, setPublicidad2] = React.useState({ width: 0, height: 0 });
  const [publicidad3, setPublicidad3] = React.useState({ width: 0, height: 0 });

  React.useLayoutEffect(() => {
    if (publicdadRef1.current) {
      setPublicidad1({
        width: publicdadRef1.current.offsetWidth,
        height: publicdadRef1.current.offsetHeight,
      });
      setPublicidad2({
        width: publicdadRef2.current.offsetWidth,
        height: publicdadRef2.current.offsetHeight,
      });
      setPublicidad3({
        width: publicdadRef3.current.offsetWidth,
        height: publicdadRef3.current.offsetHeight,
      });
    }
  }, []);

  return (
    <Box py={4}>
      <Container>
        <Grid
          container
          sx={{ marginLeft: "-20px", width: "calc(100% + 20px)" }}
        >
          <Grid item md={3} xs={12} sx={{ paddingLeft: "20px" }}>
            <Typography variant="h6">Destacados</Typography>
            <Box>
              <Grid container>
                <Grid xs={12} item py={1}>
                  <a
                    href="/nose"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src="/images/articles/article1.jpg"
                      alt="a"
                      className={classes.articleImge}
                    />
                    <Typography
                      sx={{ "&:hover": { color: "#f97316" } }}
                      variant="body2"
                    >
                      Enel Distribución Perú aplica innovadora técnica de
                      trabajo en “líneas vivas” para garantizar la continuidad
                      del servicio de sus clientes
                    </Typography>
                  </a>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    Enel Distribución Perú continúa implementando soluciones
                    innovadoras de atención a sus clientes. Es así que, en el
                    2021, la empresa inició con la ejecución...
                  </Typography>
                </Grid>
                <Grid xs={12} item py={1}>
                  <a
                    href="/nose"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src="/images/articles/article1.jpg"
                      alt="a"
                      className={classes.articleImge}
                    />
                    <Typography
                      sx={{ "&:hover": { color: "#f97316" } }}
                      variant="body2"
                    >
                      Enel Distribución Perú aplica innovadora técnica de
                      trabajo en “líneas vivas” para garantizar la continuidad
                      del servicio de sus clientes
                    </Typography>
                  </a>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    Enel Distribución Perú continúa implementando soluciones
                    innovadoras de atención a sus clientes. Es así que, en el
                    2021, la empresa inició con la ejecución...
                  </Typography>
                </Grid>
                <Grid xs={12} item py={1}>
                  <a
                    href="/nose"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src="/images/articles/article1.jpg"
                      alt="a"
                      className={classes.articleImge}
                    />
                    <Typography
                      sx={{ "&:hover": { color: "#f97316" } }}
                      variant="body2"
                    >
                      Enel Distribución Perú aplica innovadora técnica de
                      trabajo en “líneas vivas” para garantizar la continuidad
                      del servicio de sus clientes
                    </Typography>
                  </a>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    Enel Distribución Perú continúa implementando soluciones
                    innovadoras de atención a sus clientes. Es así que, en el
                    2021, la empresa inició con la ejecución...
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sx={{ paddingLeft: "20px" }}>
            <Typography variant="h6">Actualidad</Typography>
            <Box py={1}>
              <Grid container>
                <Grid xs={12} item>
                  <a
                    href="/nose"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src="/images/articles/article1.jpg"
                      alt="a"
                      className={classes.articleImge}
                    />
                    <Typography
                      sx={{ "&:hover": { color: "#f97316" } }}
                      variant="body2"
                    >
                      Enel Distribución Perú aplica innovadora técnica de
                      trabajo en “líneas vivas” para garantizar la continuidad
                      del servicio de sus clientes
                    </Typography>
                  </a>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    Enel Distribución Perú continúa implementando soluciones
                    innovadoras de atención a sus clientes. Es así que, en el
                    2021, la empresa inició con la ejecución...
                  </Typography>
                </Grid>
              </Grid>
              <Box pt={1}>
                <Paper
                  ref={publicdadRef1}
                  elevation={0}
                  sx={{
                    width: "100%",
                    height: "150px",
                    borderRadius: "0px",
                    backgroundColor: "#f97316",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  id="publicidad1"
                >
                  <Typography variant="h5">
                    {`${publicidad1.width} x ${publicidad1.height}`}
                  </Typography>
                </Paper>
              </Box>
              <Box>
                {/* ARTICULOS PEQUEÑOS */}
                <Grid
                  container
                  sx={{ marginLeft: "-20px", width: "calc(100% + 20px)" }}
                  pt={1}
                >
                  <Grid xs={6} item sx={{ paddingLeft: "20px" }}>
                    <a
                      href="/nose"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src="/images/articles/article1.jpg"
                        alt="a"
                        className={classes.articleImge}
                      />
                      <Typography
                        sx={{ "&:hover": { color: "#f97316" } }}
                        variant="body2"
                      >
                        Enel Distribución Perú aplica innovadora técnica de
                        trabajo en “líneas vivas” para garantizar la continuidad
                        del servicio de sus clientes
                      </Typography>
                    </a>
                    <Typography sx={{ fontSize: "0.875rem" }}>
                      Enel Distribución Perú continúa implementando soluciones
                      innovadoras de atención a sus clientes. Es así que, en el
                      2021, la empresa inició con la ejecución...
                    </Typography>
                  </Grid>
                  <Grid xs={6} item sx={{ paddingLeft: "20px" }}>
                    <a
                      href="/nose"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src="/images/articles/article1.jpg"
                        alt="a"
                        className={classes.articleImge}
                      />
                      <Typography
                        sx={{ "&:hover": { color: "#f97316" } }}
                        variant="body2"
                      >
                        Enel Distribución Perú aplica innovadora técnica de
                        trabajo en “líneas vivas” para garantizar la continuidad
                        del servicio de sus clientes
                      </Typography>
                    </a>
                    <Typography sx={{ fontSize: "0.875rem" }}>
                      Enel Distribución Perú continúa implementando soluciones
                      innovadoras de atención a sus clientes. Es así que, en el
                      2021, la empresa inició con la ejecución...
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} xs={12} sx={{ paddingLeft: "20px" }}>
            <Typography variant="h6">Ultimo evento</Typography>
            <Box py={1}>
              <Grid xs={12} item>
                <a
                  href="/nose"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    src="/images/articles/article1.jpg"
                    alt="a"
                    className={classes.articleImge}
                  />
                  <Typography
                    sx={{ "&:hover": { color: "#f97316" } }}
                    variant="body2"
                  >
                    Enel Distribución Perú aplica innovadora técnica de trabajo
                    en “líneas vivas” para garantizar la continuidad del
                    servicio de sus clientes
                  </Typography>
                </a>
                <Typography sx={{ fontSize: "0.875rem" }}>
                  Enel Distribución Perú continúa implementando soluciones
                  innovadoras de atención a sus clientes. Es así que, en el
                  2021, la empresa inició con la ejecución...
                </Typography>
              </Grid>
            </Box>
            <Box py={1}>
              <Paper
                ref={publicdadRef2}
                elevation={0}
                sx={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "0px",
                  backgroundColor: "#f97316",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="publicidad1"
              >
                <Typography variant="h5">
                  {`${publicidad2.width} x ${publicidad2.height}`}
                </Typography>
              </Paper>
            </Box>

            <Box py={1}>
              <Paper
                ref={publicdadRef3}
                elevation={0}
                sx={{
                  width: "100%",
                  height: "600px",
                  borderRadius: "0px",
                  backgroundColor: "#f97316",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="publicidad1"
              >
                <Typography variant="h5">
                  {`${publicidad3.width} x ${publicidad3.height}`}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default News;
