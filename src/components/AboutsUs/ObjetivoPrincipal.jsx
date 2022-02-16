import { Box, Container, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

const objetivos = [
  "Información valiosa y de interés del sector.",
  "Comercio Ferretero, dirigida a toda la comunidad de Ferreterías y proveedores.",
  "V Congreso Internacional de Mantenimiento Eléctrico PERÚ 2022.",
  "Nuevos modelos de  Tiendas  virtuales y Expo Ferias",
];

const ObjetivoPrincipal = () => {
  return (
    <Box bgcolor="#F9F9F9">
      <Container>
        <Grid container p={5}>
          <Grid item md={7} xs={12} py={4}>
            <Typography variant="h2">Nuestro objetivo principal</Typography>
            <Typography variant="body1" my={1}>
              Venimos trabajando con esmero con el único objetivo de poderles
              brindar una excelente herramienta que les permita crecer y
              aumentar las ventas y de la misma manera posesionar aún más los
              negocios. Estos dos últimos años la pandemia nos ha golpeado muy
              fuerte, pero ello no nos amilana para seguir adelante con lo que
              ya nos hemos comprometido. Empezamos en el año 2010 publicando la
              revista Energía & Negocios Perú, que luego de unos años paso a ser
              lo que ahora la revista Energía & mantenimiento Eléctrico, medio
              exclusivo de los eventos que realiza como es el Congreso
              Internacional de Mantenimiento Eléctrico, Congreso de Trabajos con
              Tensión TCT PERÚ, Seminario Internacional de Prospectiva,
              Innovación y Tecnología- INNOVATEC PERÚ, entre otros. Ya somos una
              comunidad numerosa que la conforma entre ellos profesionales y
              técnicos de las áreas de mantenimiento eléctrico, seguridad
              eléctrica, proyectos eléctricos, trabajos en líneas energizadas,
              etc.
            </Typography>
            {objetivos.map((objetivo) => (
              <Box key={objetivo} sx={{ display: "flex" }}>
                <CheckIcon
                  sx={{ maxWidth: "18px", marginRight: "0.5rem" }}
                  color="primary"
                />
                <Typography variant="body2">{objetivo}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ObjetivoPrincipal;
