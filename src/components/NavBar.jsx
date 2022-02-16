import {
  AppBar,
  Container,
  IconButton,
  InputBase,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const pages = ["Nosotros", "Contacto", "Revistas", "Productos"];

const useStyles = makeStyles({
  logo: {
    height: "32px",
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "4px",
  border: "1px solid #E5E7EB",
  backgroundColor: "#F9FAFB",
  "&:hover": {
    backgroundColor: "#F9FAFB",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "#6B7280",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    color: "#6B7280",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "0px 0px 0px 0px",
        color: "black",
        backgroundColor: "white",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          {/* Logo principal en modo normal */}
          <Box
            sx={{
              display: { sm: "none", md: "flex" },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "1px",
                display: {
                  xs: "none",
                  md: "flex",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                },
              }}
              aria-label="logo-appbar"
              aria-controls="logo-appbar"
              href="/"
            >
              <img
                src="./logo192.png"
                alt="Logo energia sin texto"
                className={classes.logo}
              />
            </IconButton>
          </Box>

          {/* Menu Responsive */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: "#111827" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" key={page}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Opciones de la barra de navegación en modo normal */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "left",
            }}
          >
            {pages.map((page) => (
              <Link
                href={page}
                sx={{ textDecoration: "none" }}
                onClick={handleCloseNavMenu}
                key={page}
              >
                <Typography
                  sx={{
                    my: 2,
                    mx: 2,
                    display: "block",
                    color: "#505050",
                    fontWeight: "medium",
                    "&:hover": {
                      color: "#f97316",
                    },
                  }}
                  component="div"
                  variant="subtitle2"
                >
                  {page}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* Barra de busqueda */}
          <Box
            sx={{
              flexGrow: 1,
              display: { md: "flex" },
              justifyContent: "right",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
