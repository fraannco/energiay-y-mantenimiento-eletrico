import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const miembros = [
  {
    image: "./images/about-us/avatars/prueba.png",
    name: "Samuel de Luque",
    position: "Ceo of Sex",
    desc: "Exercise addict and lifelong learner",
    links: [
      { type: "whatsapp", url: "https://wa.me/51929311362" },
    ],
  },
];

const renderIcon = (type) => {
  switch (type) {
    case "whatsapp":
      return <WhatsAppIcon />;
    case "github":
      return <GitHubIcon />;
    default:
      return null;
  }
};

const Company = () => {
  return (
    <>
      <Box py={8}>
        <Container maxWidth="lg">
          <Box px={4} py={2}>
            <Typography variant="h5" color="secondary">
              Compañía
            </Typography>
            <Typography sx={{ maxWidth: { md: "500px" } }} variant="body1">
              Contamos con un equipo con alta experiencia y conocimiento del
              mercado para poder ofrecete los mejores productos y servicios.
            </Typography>
          </Box>

          <Box pr={4}>
            <Grid container>
              {miembros.map((miembro) => (
                <Grid item md={3} sm={6} xs={12} pl={4} pt={2}>
                  <Paper variant="outlined" sx={{ padding: "20px" }}>
                    <Grid container>
                      <Grid item md={6} sm={4} xs={6}>
                        <Avatar
                          alt="Remy Sharp"
                          src={miembro.image}
                          sx={{
                            borderRadius: "8px",
                            height: "70px",
                            width: "70px",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        sm={8}
                        xs={6}
                        display="flex"
                        justifyContent="right"
                        align="right"
                      >
                        <Box>
                          {miembro.links.map((link) => (
                              <IconButton
                                aria-label="logo-appbar"
                                aria-controls="logo-appbar"
                                href={`${link.url}`}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                {renderIcon(link.type)}
                              </IconButton>
                          ))}
                          </Box>
                      </Grid>
                      <Grid item xs={12}pt={2}>
                        <Typography variant="body2">{miembro.name}</Typography>
                        <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
                          {miembro.position}
                        </Typography>
                        <Divider
                          sx={{
                            marginBlockStart: "0.5em",
                            marginBlockEnd: "0.5em",
                          }}
                        />
                        <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
                          {miembro.desc}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Company;
