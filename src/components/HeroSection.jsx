import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  heroImg: {
    maxWidth: "100%",
  },
});

const HeroSection = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Box
          p={1.5}
          bgcolor="#FAFAFA"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="body1" align="center">
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </Typography>
        </Box>
        <Container sx={{ py: 8 }}>
          <Grid container alignItems="center">
            <Grid item md={6} sm={6} xs={12} pr={4} py={2}>
              <Typography variant="h1" color="black">
                The standard Lorem Ipsum passage, used since the 1500s
              </Typography>
              <Typography variant="body1" py={1}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={12} py={2}>
              <a href="/404">
                <img
                  src="/online-flipbook-sample.webp"
                  alt="a"
                  className={classes.heroImg}
                />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default HeroSection;
