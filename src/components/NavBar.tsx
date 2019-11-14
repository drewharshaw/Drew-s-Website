import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/style.css";
import { colorType } from "./Header";
//to be used in future
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

interface INavbarProps {
  textColor: colorType;
}

export default function NavBar(props: INavbarProps) {
  return (
    <List className={"navbar"}>
      <ListItem>
        <Link href="/#projects" underline="none">
          <Typography variant="body1" color={props.textColor}>Projects</Typography>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.linkedin.com/in/drew-harshaw/" underline="none">
          <Typography variant="body1" color={props.textColor}>Resume</Typography>
        </Link>
      </ListItem>
      <ListItem>
        <IconButton href="https://github.com/drewharshaw">
          <FontAwesomeIcon
            icon={faGithub}
            color={props.textColor === 'primary' ? 'black' : 'white' }
            className={"navIcon"}
          />
        </IconButton>
      </ListItem>
    </List>
  );
}
