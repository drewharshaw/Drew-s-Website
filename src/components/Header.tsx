import {
  withStyles,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";
import "../styles/style.css";
import NavBar from "./NavBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import * as React from "react";

import { useState } from "react";

import classNames from "classnames";

// @material-ui/core components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// TODO: add proper SVG path
function HomeLogo(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export type colorType = "primary" | "secondary";

type changeColorOnScroll = {
  height: number;
  color?:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "transparent"
    | "white"
    | "rose"
    | "dark";
};

interface IHeaderProps {
  color?:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "transparent"
    | "white"
    | "rose"
    | "dark";
  brand?: string;
  fixed?: boolean;
  absolute?: boolean;
  changeColorOnScroll?: changeColorOnScroll;
}

export default function Header(props: IHeaderProps) {
  const [colorText, setState] = useState<colorType>("secondary");

  // using hooks to implement componentDidMount() and componentWillUnmount()
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      // turns white
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(`${color}`);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(`${changeColorOnScroll.color}`);

      setState("primary");
    } else {
      // turns translucent
      document.body.getElementsByTagName("header")[0].classList.add(`${color}`);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(`${changeColorOnScroll.color}`);

      setState("secondary");
    }
  };

  const { color, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    appBar: true,
    [color]: color,
    absolute: absolute,
    fixed: fixed
  });

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={"container"}>
        <List disablePadding className="profile">
          <ListItem dense>
            <Avatar
              alt="Drew Harshaw"
              src="/images/profile.png"
              className="avatar"
            />
          </ListItem>
          <ListItem dense>
            <Grid item xs container direction="column" spacing={2}>
              <Typography color={colorText} variant="h6">
                Drew Harshaw
              </Typography>
              <Typography color={colorText}>Software Engineer</Typography>
            </Grid>
          </ListItem>
        </List>
        <NavBar textColor={colorText} />
      </Toolbar>
    </AppBar>
  );
}
