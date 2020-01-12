import * as React from "react";
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
  TeddKourkounakis
} from "../utils/teamMembers";

import {
  react,
  nodeJS,
  python,
  ardunio,
  leapJS,
  expressJS
} from "../utils/technologies";
import Container from "@material-ui/core/Container";
import ReactCanvasNest from "react-canvas-nest";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
      '"Segoe UI Symbol"'
    ].join(",")
  },
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#ffffff"
    }
  }
});

export default function App() {
  return (
    // pass theme down the React component tree, use const theme = useTheme(); to access theme
    <MuiThemeProvider theme={theme}>
      <Header
        color="transparent"
        fixed={true}
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />

      <div className={"nest-wrapper"}>
        <ReactCanvasNest
          className="canvasNest"
          config={{
            pointColor: "255, 255, 255",
            lineColor: "255, 255, 255",
            count: 100,
            mouseDist: 50000
          }}
          style={{ zIndex: 0, opacity: "0.7" }}
        />
      </div>

      <div className="anchor" id="projects"></div>
      <div className={"backdrop"}>
        <Container className={"main-container"}>
          <Typography variant="h3" color="textPrimary" align="center">
            Projects
          </Typography>

          <Grid container spacing={3} justify="center" className="gridD">
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
                techStack={[react, nodeJS, python]}
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
                  DrewHarshaw
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

          <Divider className="section-break" />
          <Grid container spacing={3} direction="column" alignContent="center">
            <Grid item xs>
              <div className="anchor" id="resume"></div>
              <Typography variant="h3" color="textPrimary" align="center">
                Resume
              </Typography>
            </Grid>
            <Grid item xs>
              <Avatar
                alt="Drew Harshaw"
                src="/images/profile.png"
                className="silhouette"
              />
            </Grid>

            <Grid item xs>
              <Typography
                variant="body1"
                color="textPrimary"
                align="center"
                className="quote"
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
                    src={"images/queensLogo.svg"}
                    className="resume-queens-img"
                  />
                </Grid>

                <Grid item xs={8}>
                  <Grid container spacing={8}>
                    <Grid item sm={9} xs={8}>
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        className="institution"
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
                  <Typography variant="body1" color="textPrimary">
                    <List>
                      <ListItem>
                        • Stream specialization in Innovation and
                        Entrepreneurship.
                      </ListItem>
                    </List>
                  </Typography>
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
                    src={"images/ericsson-icon.svg"}
                    className="resume-img"
                  />
                </Grid>
                <Grid item xs={8}>
                  <Grid container spacing={8} alignItems="center">
                    <Grid item sm={8} xs={8}>
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        className="institution"
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
                    src={"images/walker-industries-logo.png"}
                    className="resume-walker-img"
                  />
                </Grid>
                <Grid item xs={8}>
                  <Grid container spacing={8} alignItems="center">
                    <Grid item sm={8} xs={8}>
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        className="institution"
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
                    size="small"
                    label={"TypeScript"}
                    className="chip"
                    key={1}
                  />
                  <Chip
                    size="small"
                    label={"JavaScript"}
                    className="chip"
                    key={2}
                  />
                  <Chip size="small" label={"HTML"} className="chip" key={3} />
                  <Chip size="small" label={"SQL"} className="chip" key={4} />
                  <Chip
                    size="small"
                    label={"Python"}
                    className="chip"
                    key={5}
                  />
                  <Chip size="small" label={"C/C++"} className="chip" key={6} />
                  <Chip size="small" label={"Java"} className="chip" key={7} />
                </Grid>
              </Grid>
              <Grid container spacing={8}>
                <Grid item xs={4} sm={2}>
                  <Typography variant="h5" color="textPrimary" align="left">
                    Libraries
                  </Typography>
                </Grid>
                <Grid item xs={8} sm={10}>
                  <Chip size="small" label={"React"} className="chip" key={8} />
                  <Chip size="small" label={"Redux"} className="chip" key={9} />
                  <Chip
                    size="small"
                    label={"OpenCV"}
                    className="chip"
                    key={10}
                  />
                  <Chip
                    size="small"
                    label={"OpenGL"}
                    className="chip"
                    key={11}
                  />
                  <Chip
                    size="small"
                    label={"TensorFlow"}
                    className="chip"
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
                  <Chip size="small" label={"Jira"} className="chip" key={13} />
                  <Chip
                    size="small"
                    label={"Taiga"}
                    className="chip"
                    key={14}
                  />
                  <Chip size="small" label={"Git"} className="chip" key={15} />
                  <Chip
                    size="small"
                    label={"BitBucket"}
                    className="chip"
                    key={16}
                  />
                  <Chip
                    size="small"
                    label={"VSCode"}
                    className="chip"
                    key={17}
                  />
                  <Chip
                    size="small"
                    label={"Visual Studio"}
                    className="chip"
                    key={18}
                  />
                  <Chip
                    size="small"
                    label={"Eclipse"}
                    className="chip"
                    key={19}
                  />
                  <Chip
                    size="small"
                    label={"SQL Server Management Studio"}
                    className="chip"
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
