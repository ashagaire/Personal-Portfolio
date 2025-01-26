import React from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        borderRadius: "50%", // Make the button round
        width: { xs: 40, sm: 56 }, // Set width responsive (40px for xs, 56px for sm and up)
        height: { xs: 40, sm: 56 }, // Set height responsive (40px for xs, 56px for sm and up)
        backgroundColor: "#d92cf9", // Set button color
        boxShadow: 3, // Add shadow for depth
        "&:hover": {
          backgroundColor: "#6b46c1", // Darker shade on hover
        },
      }}
      aria-label="Scroll to top"
    >
      <ArrowUpwardIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />
    </IconButton>
  );
};

export default ScrollToTopButton;
