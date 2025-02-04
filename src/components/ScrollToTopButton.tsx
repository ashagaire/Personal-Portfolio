import React from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        borderRadius: "50%",
        width: { xs: 40, sm: 56 },
        height: { xs: 40, sm: 56 },
        backgroundColor: "#d92cf9",
        boxShadow: 3,
        "&:hover": {
          backgroundColor: "#6b46c1",
        },
      }}
      aria-label="Scroll to top"
    >
      <ArrowUpwardIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />
    </IconButton>
  );
};

export default ScrollToTopButton;
