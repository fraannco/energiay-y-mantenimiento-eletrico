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
import AboutusData from "./AboutusData";

const { miembros } = AboutusData();

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
      <Box py={7}>
        <Container maxWidth="lg">
          <Box pb={3}>
            <Typography variant="h5" color="secondary">
              Compañía
            </Typography>
            <Typography
              sx={{ maxWidth: { md: "500px" } }}
              variant="body1"
              pt={1}
            >
              Contamos con un equipo con alta experiencia y conocimiento del
              mercado para poder ofrecete los mejores productos y servicios.
            </Typography>
          </Box>

          <Box>
            <Grid
              container
              sx={{ width: "calc(100% + 20px)", marginLeft: "-20px" }}
            >
              {miembros.map((miembro) => (
                <Grid
                  item
                  md={3}
                  sm={6}
                  xs={12}
                  sx={{ paddingLeft: "20px", paddingBottom: "2em" }}
                  key={miembro.name}
                >
                  <Paper
                    variant="outlined"
                    sx={{ padding: "20px", height: "90%" }}
                  >
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
                              key={link}
                            >
                              {renderIcon(link.type)}
                            </IconButton>
                          ))}
                        </Box>
                      </Grid>
                      <Grid item xs={12} pt={2}>
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