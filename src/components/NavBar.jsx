import {
  AppBar,
  Button,
  IconButton,
  InputBase,
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
    maxWidth: "8em",
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "16px",
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
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
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
        border: "1px solid #E5E7EB",
      }}
    >
      <Toolbar>
        {/* Logo principal en modo normal */}

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
            padding: "0.5em",
          }}
          xs={6}
          aria-label="logo-appbar"
          aria-controls="logo-appbar"
          href="/"
        >
          <img
            src="./images/ENERGIA-Y-MANTENIMIENTO-ELETRICO-LOGO-MODERNO.png"
            alt="Logo energia sin texto"
            className={classes.logo}
          />
        </IconButton>
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
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Opciones de la barra de navegación en modo normal */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "right",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 2,
                display: "block",
                color: "#505050",
                fontWeight: "medium",
                "&:hover": {
                  backgroundColor: "#f4f4f4",
                },
              }}
            >
              {page}
            </Button>
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
    </AppBar>
  );
};

export default NavBar;