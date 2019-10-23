import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import '../styles/style.css';
import { createMuiTheme } from '@material-ui/core/styles';



export default function Footer(props) {
  
  return (
    <Typography variant="body2" color="textSecondary" align="center" component="footer" className={'footer'}>
      <Container className={'footer-container'}>
        {'Copyright © '}
        <Link color="inherit" href="https://drewharshaw.com/">
          drewharshaw
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Built with '}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI.
        </Link>
      </Container>
    </Typography>
  );
}
