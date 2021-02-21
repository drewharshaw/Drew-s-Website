import * as React from "react";

// material ui libs
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "30px",
    backgroundColor: "rgb(34, 34, 34)",
    color: "white" /* TODO: modify theme instead*/,
  },
  footerContainer: {
    paddingTop: "40px",
    paddingBottom: "20px",
  },
  footerNotesContainer: {
    textAlign: "right",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <Typography
      className={classes.footer}
      variant="body2"
      color="textSecondary"
      align="center"
      component="footer"
    >
      <Container className={classes.footerContainer}>
        {"Copyright © "}
        <Link color="inherit" href="https://drewharshaw.com/">
          drewharshaw
        </Link>{" "}
        {new Date().getFullYear()}
        {". Built with "}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI.
        </Link>
      </Container>

      <Container className={classes.footerNotesContainer}>
        <Link color="inherit" href="/git-cheat-sheet.html">
          Git Cheat Sheet
        </Link>
        <Link color="inherit" href="/js-cheat-sheet.html">
          JS Cheat Sheet
        </Link>
      </Container>
    </Typography>
  );
}
