// Footer.jsx
import React from "react";
import { Typography, Link, Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledFooter = styled("footer")({
  // marginTop: "20px",
  padding: "20px 0",
  // backgroundColor: "#f0f0f0",
  textAlign: "center",
  position: "fixed",
  bottom: 0,
  width: "100%",
});

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        {/* <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography> */}
        <Typography variant="body2" color="textSecondary">
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/thissudhir"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhishek
          </Link>
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
