import { Button, Container, Box, Link, Typography } from "@mui/material";
import React from "react";

import "./style.css";

function Copyright(props) {
  return (
    <Box p={2}>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
        sx={{ textDecoration: "none", fontWeight: "300", paddingTop: "1rem" }}
      >
        {"Copyright © "}
        <Link
          color="inherit"
          href="./"
          sx={{ textDecoration: "none", fontWeight: "300" }}
        >
          Energía & Mantenimiento Eléctrico S.A.C
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

const InConstruction = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Container sx={{ padding: "2rem" }}>
            <img
              src="./LOGO REVISTA-E&ME-OK.svg"
              className="App-logo"
              alt="logo"
            />
            <Typography variant="h1" p={2}>
              EN CONSTRUCCIÓN...
            </Typography>
            <Typography variant="body1">
              ¡Estaremos lanzando nuestro nuevo sitio muy pronto!
            </Typography>
            <Box p={2}>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/energiaymantenimientoelectrico"
                style={{ textDecoration: "none" }}
              >
                <Button
                  color="secondary"
                  variant="contained"
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
            </Box>
          </Container>
          <Copyright />
        </header>
      </div>
    </>
  );
};

export default InConstruction;
