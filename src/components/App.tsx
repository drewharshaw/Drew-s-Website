import * as React from "react";

// material ui libs
import Container from "@material-ui/core/Container";
import ReactCanvasNest from "react-canvas-nest";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

// custom components
import Header from "./Header";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import {
  DrewHarshaw,
  JohnBowden,
  SudhirPokhrel,
  DavidChoi,
  TadhgMcdonald,
  AlexRuffo,
  VishalKamath,
  MichaelLang,
  TeddKourkounakis,
} from "../utils/teamMembers";

import {
  react,
  nodeJS,
  python,
  ardunio,
  leapJS,
  expressJS,
} from "../utils/technologies";

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
  nestWrapper: {
    width: "100%",
    height: "800px",
    backgroundColor: "rgb(34, 34, 34)",
  },
  anchor: {
    display: "block",
    position: "relative",
    top: "-250px",
    visibility: "hidden",
  },
  backdrop: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(34, 34, 34)",
  },
  mainContainer: {
    padding: "32px 32px 32px 32px",
    background: "#ffffff",
    position: "relative",
    zIndex: 3,
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14),0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  gridD: {
    "& div": {
      flexGrow: 0,
    },
  },
  sectionBreak: {
    margin: "40px !important",
  },
  silhouette: {
    margin: "10px",
    width: "128px !important",
    height: "128px !important",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  quote: {
    fontStyle: "italic",
    paddingRight: "75px",
    paddingLeft: "75px",
  },
  resumeQueensImg: {
    width: "50%",
    height: "124px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  institution: {
    fontWeight: 600,
    fontSize: 28,
    fontFamily: "Arial, Verdana !important",
  },
  resumeImg: {
    width: "50%",
    height: "100px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  resumeWalkerImg: {
    width: "275px",
    height: "78px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  chip: {
    margin: "5px",
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
          className="canvasNest"
          config={{
            pointColor: "255, 255, 255",
            lineColor: "255, 255, 255",
            count: 100,
            mouseDist: 50000,
          }}
          style={{ zIndex: 0, opacity: "0.7" }}
        />
      </div>

      <div className={classes.anchor} id="projects" />
      <div className={classes.backdrop}>
        <Container className={classes.mainContainer}>
          <Typography variant="h3" color="textPrimary" align="center">
            Projects
          </Typography>

          <Grid
            container
            spacing={3}
            justify="center"
            className={classes.gridD}
          >
            <Grid item xs>
              <ProjectCard
                title="AutoConnect"
                description="AutoConnect is a generic intercommunication service for autonomous vehicles. 
                    Providing a service for vehicles to share real-time sensory data amongst each other, extending 
                    the overall awareness/visibility of hazardous objects on the roads. In cases were vehicle sensors 
                    are limited due to obstructions, AutoConnect will facilitate the transfer of critical information, 
                    preventing accidents for traditionally unforeseeable hazards."
                date="September 2019 - Present"
                img_src={"images/auto_car.jpg"}
                techStack={[expressJS, nodeJS, python]}
                teamMembers={[JohnBowden, SudhirPokhrel, DrewHarshaw]}
              />
            </Grid>
            <Grid item xs>
              <ProjectCard
                title="Wildfire Predictor"
                description="Developed a Wildfire Predictor during an Ericsson on-site company hackathon. Leveraging 
                  the power of machine learning, historical wildfires and historical weather data were used for training 
                  and current weather data was used for testing. Our predictor generates a probabilistic heatmap denoting 
                  the risk of wildfires occurring for a given geographical area."
                date="May 2019"
                img_src={"images/unavailable-image.jpg"}
                techStack={[react, python]}
                teamMembers={[TadhgMcdonald, DavidChoi, DrewHarshaw]}
              />
            </Grid>
            <Grid item xs>
              {/* https://devpost.com/software/asl-translator */}
              <ProjectCard
                title="ASL Translator"
                description="Developed an American Sign Language (ASL) Translator during QHacks 2018 which has the capability 
                  to convert speech into animated ASL sign. Inversly, ASL Translator is able to recognize physical ASL signs using 
                  Leap Motion and translate to the proper text. Winner of the Sun Life Financial Sponsor prize."
                date="February 2018"
                img_src={"images/leapMotion.png"}
                techStack={[leapJS, nodeJS, expressJS]}
                teamMembers={[
                  TeddKourkounakis,
                  AlexRuffo,
                  VishalKamath,
                  DrewHarshaw,
                ]}
              />
            </Grid>
            <Grid item xs>
              <ProjectCard
                title="Lok-It"
                description="Lok-It is a bicycle locking system for students designed to prevent on-campus bicycle 
                    thefts. Students can easily and safely lock their bicycles by swiping their student cards on the magnetic 
                    card reader. An Arduino microcontroller sends the student information to a centralized server which 
                    authenticates the user and saves the necessary information to the database. Once authenticated, the 
                    Arduino opens or closes the 3d printed locking mechanism through the use of servo motors."
                date="January 2016 - April 2016"
                img_src={"images/lokit.jpg"}
                techStack={[ardunio]}
                teamMembers={[MichaelLang, DrewHarshaw]}
              />
            </Grid>
            <Grid item xs>
              <ProjectCard
                title="Personal Drone"
                description="Designed and built quadrocopter drone in grade 12 of high school for Tech Design course.
                    Used Autodesk Inventor 3D modelling tool to design the chassis and used a Computer Numerical Control 
                    (CNC) machine to mill the aluminium chassis. The drone was able to sustain a flight time of 7 minutes."
                date="January 2015 - April 2015"
                img_src={"images/unavailable-image.jpg"}
                techStack={[]}
                teamMembers={[DrewHarshaw]}
              />
            </Grid>
          </Grid>

          <Divider className={classes.sectionBreak} />
          <Grid container spacing={3} direction="column" alignContent="center">
            <Grid item xs>
              <div className={classes.anchor} id="resume" />
              <Typography variant="h3" color="textPrimary" align="center">
                Resume
              </Typography>
            </Grid>
            <Grid item xs>
              <Avatar
                alt="Drew Harshaw"
                src="/images/profile.png"
                className={classes.silhouette}
              />
            </Grid>

            <Grid item xs>
              <Typography
                variant="body1"
                color="textPrimary"
                align="center"
                className={classes.quote}
              >
                I am a responsible computer engineering student, who is
                determined, time efficient and hardworking. My ability to listen
                to others coupled with my open-mindedness allow me to work well
                as part of a team.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} direction="column">
            <Grid item xs>
              <Typography variant="h4" color="textPrimary" align="left">
                Education
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs>
              <Grid container spacing={8} direction="row">
                <Grid item xs={4}>
                  <img
                    alt={"Queen's University Logo"}
                    src={"images/queensLogo.svg"}
                    className={classes.resumeQueensImg}
                  />
                </Grid>

                <Grid item xs={8}>
                  <Grid container spacing={8}>
                    <Grid item sm={9} xs={8}>
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        className={classes.institution}
                      >
                        Queen's University
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={4}>
                      <Typography variant="subtitle1" color="textPrimary">
                        Class of 2019
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="h6" color="textPrimary">
                    Bachelor of Applied Science in Computer Engineering
                  </Typography>

                  <List>
                    <ListItem>
                      <Typography variant="body1" color="textPrimary">
                        • Stream specialization in Innovation and
                        Entrepreneurship.
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Typography variant="h4" color="textPrimary" align="left">
                Experience
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs>
              <Grid container spacing={8} direction="row" alignItems="center">
                <Grid item xs={4}>
                  <img
                    alt={"Ericsson Company Logo"}
                    src={"images/ericsson-icon.svg"}
                    className={classes.resumeImg}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Grid container spacing={8} alignItems="center">
                    <Grid item sm={8} xs={8}>
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        className={classes.institution}
                      >
                        Ericsson
                      </Typography>
                    </Grid>
                    <Grid item sm={4} xs={4}>
                      <Typography
                        variant="subtitle1"
                        color="textPrimary"
                        align="center"
                      >
                        Ottawa, Canada
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center">
                    <Grid item sm={9} xs={8}>
                      <Typography variant="h6" color="textPrimary">
                        iOS & Web Developer Co-op
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={4}>
                      <Typography variant="subtitle1" color="textPrimary">
                        May 2018 - August 2019
                      </Typography>
                    </Grid>
                  </Grid>

                  <Typography variant="subtitle1" color="textPrimary">
                    <List>
                      <ListItem>
                        • Contributed to multiple product releases, implementing
                        front-end features and filled in as Scrum Master on
                        several occasions. Played an integral role in isolating
                        and fixing bugs to meet production timelines.
                      </ListItem>
                      <ListItem>
                        • Applied systematic analysis and design techniques to
                        overhaul the design and implementation of the
                        applications back-end database. Developed and
                        implemented the migration strategy to transition user
                        data from iOS to Web App using Python.
                      </ListItem>

                      <ListItem>
                        • Spearheaded front-end project settings redesign,
                        creating a scalable architecture, reducing code size by
                        360 %.
                      </ListItem>
                    </List>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs>
              <Grid container spacing={8} direction="row" alignItems="center">
                <Grid item xs={4}>
                  <img
                    alt={"Walker Industries Company Logo"}
                    src={"images/walker-industries-logo.png"}
                    className={classes.resumeWalkerImg}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Grid container spacing={8} alignItems="center">
                    <Grid item sm={8} xs={8}>
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        className={classes.institution}
                      >
                        Walker Indsutries
                      </Typography>
                    </Grid>
                    <Grid item sm={4} xs={4}>
                      <Typography
                        variant="subtitle1"
                        color="textPrimary"
                        align="center"
                      >
                        Niagara Falls, Canada
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center">
                    <Grid item sm={9} xs={8}>
                      <Typography variant="h6" color="textPrimary">
                        Business Analyst Intern
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={4}>
                      <Typography variant="subtitle1" color="textPrimary">
                        May 2017 - August 2017
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="subtitle1" color="textPrimary">
                    <List>
                      <ListItem>
                        • Developed custom business software to automate
                        financial processes and improve the efficiency of
                        business analytics.
                      </ListItem>
                      <ListItem>
                        • Designed and developed software for managing employee
                        timeseets and sales analytics.
                      </ListItem>
                    </List>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs>
              <Typography variant="h4" color="textPrimary" align="left">
                Skills
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs>
              <Grid container spacing={8}>
                <Grid item xs={4} sm={2}>
                  <Typography variant="h5" color="textPrimary" align="left">
                    Languages
                  </Typography>
                </Grid>
                <Grid item xs={8} sm={10}>
                  <Chip
                    className={classes.chip}
                    size="small"
                    label={"TypeScript"}
                    key={1}
                  />
                  <Chip
                    size="small"
                    label={"JavaScript"}
                    className={classes.chip}
                    key={2}
                  />
                  <Chip
                    size="small"
                    label={"HTML"}
                    className={classes.chip}
                    key={3}
                  />
                  <Chip
                    size="small"
                    label={"SQL"}
                    className={classes.chip}
                    key={4}
                  />
                  <Chip
                    size="small"
                    label={"Python"}
                    className={classes.chip}
                    key={5}
                  />
                  <Chip
                    size="small"
                    label={"C/C++"}
                    className={classes.chip}
                    key={6}
                  />
                  <Chip
                    size="small"
                    label={"Java"}
                    className={classes.chip}
                    key={7}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8}>
                <Grid item xs={4} sm={2}>
                  <Typography variant="h5" color="textPrimary" align="left">
                    Libraries
                  </Typography>
                </Grid>
                <Grid item xs={8} sm={10}>
                  <Chip
                    size="small"
                    label={"React"}
                    className={classes.chip}
                    key={8}
                  />
                  <Chip
                    size="small"
                    label={"Redux"}
                    className={classes.chip}
                    key={9}
                  />
                  <Chip
                    size="small"
                    label={"OpenCV"}
                    className={classes.chip}
                    key={10}
                  />
                  <Chip
                    size="small"
                    label={"OpenGL"}
                    className={classes.chip}
                    key={11}
                  />
                  <Chip
                    size="small"
                    label={"TensorFlow"}
                    className={classes.chip}
                    key={12}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8}>
                <Grid item xs={4} sm={2}>
                  <Typography variant="h5" color="textPrimary" align="left">
                    Tools
                  </Typography>
                </Grid>
                <Grid item xs={8} sm={10}>
                  <Chip
                    size="small"
                    label={"Jira"}
                    className={classes.chip}
                    key={13}
                  />
                  <Chip
                    size="small"
                    label={"Firebase"}
                    className={classes.chip}
                    key={14}
                  />
                  <Chip
                    size="small"
                    label={"Git"}
                    className={classes.chip}
                    key={15}
                  />
                  <Chip
                    size="small"
                    label={"BitBucket"}
                    className={classes.chip}
                    key={16}
                  />
                  <Chip
                    size="small"
                    label={"VSCode"}
                    className={classes.chip}
                    key={17}
                  />
                  <Chip
                    size="small"
                    label={"Visual Studio"}
                    className={classes.chip}
                    key={18}
                  />
                  <Chip
                    size="small"
                    label={"Eclipse"}
                    className={classes.chip}
                    key={19}
                  />
                  <Chip
                    size="small"
                    label={"SQL Server Management Studio"}
                    className={classes.chip}
                    key={20}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Footer />
      </div>
    </MuiThemeProvider>
  );
}
