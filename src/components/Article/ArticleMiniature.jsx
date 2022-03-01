import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  articleImge: {
    width: "100%",
    height: "100%px",
  },
});

const ArticleMiniature = ({ title, img, resume, category }) => {
  const classes = useStyles();

  return (
    <>
      <a
        href="/nose"
        style={{
          textDecoration: "none",
        }}
      >
        <img src={img} alt="" className={classes.articleImge} />
        <Typography
          sx={{
            "&:hover": { color: "#f97316" },
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
        >
          {title}
        </Typography>
      </a>
      <Typography sx={{ fontSize: "0.875rem" }}>{resume}</Typography>
    </>
  );
};

export default ArticleMiniature;
