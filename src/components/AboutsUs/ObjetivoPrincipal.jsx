import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
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
    <Box bgcolor="#F9F9F9" py={5}>
      <Container>
        <Grid container p={4}>
          <Grid item md={7}>
            <Typography variant="h2">Nuestro objetivo principal</Typography>
            <Typography variant="body1" my={1}>
              Buscamos brindar una excelente herramienta que les permita crecer
              y aumentar las ventas y posicionar mejor sus negocios. Ya somos
              una comunidad numerosa conformada por profesionales y técnicos de
              las áreas de mantenimiento eléctrico, seguridad eléctrica,
              proyectos eléctricos, trabajos en líneas energizadas, etc.
            </Typography>
            <Typography variant="body1" my={1}>
              Te ofrecemos lo siguiente de manera honesta:
            </Typography>
            {objetivos.map((objetivo) => (
              <Box key={objetivo} sx={{ display: "flex" }} py={1}>
                <Avatar
                  sx={{
                    maxWidth: "18px",
                    maxHeight: "18px",
                    backgroundColor: "#ffe6c2",
                  }}
                >
                  <CheckIcon
                    sx={{
                      maxWidth: "14px",
                      maxHeight: "14px",
                      color: "#e67a00",
                    }}
                  />
                </Avatar>
                <Typography variant="body2" sx={{ paddingLeft: "0.5em" }}>
                  {objetivo}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ObjetivoPrincipal;
