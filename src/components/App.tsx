import * as React from "react";

//commonJS import regenerator-runtime
require("regenerator-runtime/runtime");

// material ui libs
import Container from "@material-ui/core/Container";
import ReactCanvasNest from "react-canvas-nest";
import Divider from "@material-ui/core/Divider";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

// custom components
import Resume from "./Resume";
import Projects from "./Projects";
import Header from "./Header";
import Footer from "./Footer";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Ubuntu",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#000000", //black
    },
    secondary: {
      main: "#ffffff", //white
    },
  },
});

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: "20px"
    },
    '*::-webkit-scrollbar-track': {
      background: "#CFD8DC"
    }, 
    '*::--webkit-scrollbar-thumb': {
      borderRadius: "6px",
      border: "3px solid #000000",
      background: "#000000"
    }
  },
  nestWrapper: {
    width: "100%",
    height: "800px",
    backgroundColor: "rgb(34, 34, 34)",
  },
  canvasNest: {
    zIndex: 0,
    opacity: "0.7",
  },
  anchor: {
    display: "block",
    position: "relative",
    top: "-250px",
    visibility: "hidden",
  },
  mainContainer: {
    padding: "0 64px",
    maxWidth: "100%",
    background: "#ffffff",
    position: "relative",
    zIndex: 3,
    // '& ::-webkit-scrollbar': {
    //   width: "20px"
    // },
    // '& ::-webkit-scrollbar-track': {
    //   background: "#CFD8DC"
    // }, 
    // '& ::--webkit-scrollbar-thumb': {
    //   borderRadius: "6px",
    //   border: "3px solid #CFD8DC",
    //   backgroundColor: "#90A4AE"
    // }
  },
  sectionBreak: {
    margin: "40px",
  },

}));

export default function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Header
        fixed={true}
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />

      <div className={classes.nestWrapper}>
        <ReactCanvasNest
          config={{
            pointColor: "255, 255, 255",
            lineColor: "255, 255, 255",
            count: 100,
            mouseDist: 50000,
          }}
          style={{ zIndex: 0, opacity: "0.7" }}
        />
      </div>

      <Container className={classes.mainContainer}>
        <div className={classes.anchor} id="projects" />
        <Projects/>
        <div className={classes.anchor} id="resume" />
        <Divider className={classes.sectionBreak} />
        <Resume/>
      </Container>

      <Footer/>
    </MuiThemeProvider>
  );
}
