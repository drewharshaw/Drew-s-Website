import * as React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/style.css';

//to be used in future
import Tooltip from "@material-ui/core/Tooltip";


export default function NavBar() {

  return (
    <List className={'navbar'}>
      <ListItem>
        <Button
        href="/#projects"
        className={'button'}>
          Projects
        </Button>
      </ListItem>
      <ListItem>
        <Button
        href="/#resume"
        className={'button'}>
          Resume
        </Button>
      </ListItem>
      <ListItem>
        <IconButton
          href="https://github.com/drewharshaw"
        >
          <FontAwesomeIcon icon={faGithub} className={'navIcon'}/>
        </IconButton>
      </ListItem>
    </List>
  );
}
