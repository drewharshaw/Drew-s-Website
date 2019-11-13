import * as React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/style.css';
import {colorType} from './Header';
//to be used in future
import Tooltip from "@material-ui/core/Tooltip";
import Typography from '@material-ui/core/Typography';


interface INavbarProps {
  textColor: colorType
}

export default function NavBar(props: INavbarProps) {

  return (
    <List className={'navbar'}>
      <ListItem>
        <Button
        href="/#projects">
          <Typography color={props.textColor}>
            Projects
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Button
        href="https://www.linkedin.com/in/drew-harshaw/">
           <Typography color={props.textColor}>
            Resume
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <IconButton
          href="https://github.com/drewharshaw"
        >
          <FontAwesomeIcon icon={faGithub} color={props.textColor} className={'navIcon'}/>
        </IconButton>
      </ListItem>
    </List>
  );
}
