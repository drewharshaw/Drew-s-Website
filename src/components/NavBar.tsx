import * as React from "react";

// material ui libs
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// fontawesome libs
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// custom components
import { colorType } from "./Header";

interface INavbarProps {
  textColor: colorType;
}

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    padding: "0",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica Neue,sans-serif",
    textTransform: "none",
  },
  navIcon: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
  },
}));

export default function NavBar(props: INavbarProps) {
  const classes = useStyles();
  return (
    <List className={classes.navbar}>
      <ListItem>
        <Link href="/#projects" underline="none">
          <Typography variant="body1" color={props.textColor}>
            Projects
          </Typography>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/#resume" underline="none">
          <Typography variant="body1" color={props.textColor}>
            Resume
          </Typography>
        </Link>
      </ListItem>
      <ListItem>
        <IconButton href="https://github.com/drewharshaw">
          <FontAwesomeIcon
            icon={faGithub}
            color={props.textColor === "primary" ? "black" : "white"}
            className={classes.navIcon}
          />
        </IconButton>
      </ListItem>
    </List>
  );
}
