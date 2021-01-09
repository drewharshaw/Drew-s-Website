import * as React from "react";

// material ui libs
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

//custom components
import {
  TypeScript,
  JavaScript,
  MsSql,
  Python,
  Java,
  Cplusplus,
  ReactJS,
  Redux,
  OpenCV,
  OpenGL,
  TensorFlow,
  Jira,
  Firebase,
  Git,
  BitBucket,
  VSCode,
  VisualStudio,
  Eclipse,
  SQLServerStudio,
} from "../utils/techIcons";

export default function Resume() {
  const classes = useStyles();

  return (
    <>
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
            I am a responsible computer engineering student, who is determined,
            time efficient and hardworking. My ability to listen to others
            coupled with my open-mindedness allow me to work well as part of a
            team.
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
            <Grid item xs={2}>
              <img
                alt={"Queen's University Logo"}
                src={"images/queensLogo.svg"}
                className={classes.resumeQueensImg}
              />
            </Grid>

            <Grid item xs={10}>
              <Grid container spacing={8}>
                <Grid item sm={10}>
                  <Typography
                    variant="h5"
                    color="textPrimary"
                    className={classes.institution}
                  >
                    Queen's University
                  </Typography>
                </Grid>
                <Grid item sm={2}>
                  <Typography variant="subtitle1" color="textPrimary">
                    Class of 2020
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h6" color="textPrimary">
                Bachelor of Applied Science in Computer Engineering
              </Typography>

              <List>
                <ListItem>
                  <Typography variant="body1" color="textPrimary">
                    • Stream specialization in Innovation and Entrepreneurship.
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
            <Grid item xs={2}>
              <img
                alt={"Ericsson Company Logo"}
                src={"images/ericsson-icon.svg"}
                className={classes.resumeImg}
              />
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={8} alignItems="center">
                <Grid item sm={10}>
                  <Typography
                    variant="h5"
                    color="textPrimary"
                    className={classes.institution}
                  >
                    Ericsson
                  </Typography>
                </Grid>
                <Grid item sm={2}>
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
                <Grid item sm={10} xs={9}>
                  <Typography variant="h6" color="textPrimary">
                    iOS & Web Developer Co-op
                  </Typography>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    align="center"
                  >
                    May 2018 - August 2019
                  </Typography>
                </Grid>
              </Grid>

              <Typography variant="subtitle1" color="textPrimary">
                <List>
                  <ListItem>
                    • Contributed to multiple product releases for both iOS and
                    Web App codebases, implementing React & Redux features to
                    meet production timelines.
                  </ListItem>
                  <ListItem>
                    • Reduced front-end project settings code size by 360% by
                    implementing a hierarchical finite state machine, traversed
                    by a breadth-first search algorithm.
                  </ListItem>
                  <ListItem>
                    • Filled in as Scrum Master on several occasions, keeping
                    the team on track prioritizing blocking tickets.
                  </ListItem>
                  <ListItem>
                    • Spearheaded the design and implementation of the
                    applications back-end MS-SQL database, as well as the
                    migration strategy to transition user data from iOS to Web
                    App using Python.
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs>
          <Grid container spacing={8} direction="row" alignItems="center">
            <Grid item xs={2}>
              <img
                alt={"Walker Industries Company Logo"}
                src={"images/walker.svg"}
                className={classes.resumeWalkerImg}
              />
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={8} alignItems="center">
                <Grid item sm={10}>
                  <Typography
                    variant="h5"
                    color="textPrimary"
                    className={classes.institution}
                  >
                    Walker Indsutries
                  </Typography>
                </Grid>
                <Grid item sm={2}>
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
                <Grid item sm={10}>
                  <Typography variant="h6" color="textPrimary">
                    Business Analyst Intern
                  </Typography>
                </Grid>
                <Grid item sm={2}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    align="center"
                  >
                    May 2017 - August 2017
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="subtitle1" color="textPrimary">
                <List>
                  <ListItem>
                    • Developed custom business software to automate financial
                    processes and improve the efficiency of business analytics.
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
            <Grid container direction="row" xs={8} sm={10}>
              {[
                <TypeScript />,
                <JavaScript />,
                <MsSql />,
                <Python />,
                <Cplusplus />,
                <Java />,
              ].map((lang, index) => (
                <Grid item className={classes.icon} key={index}>
                  {lang}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={4} sm={2}>
              <Typography variant="h5" color="textPrimary" align="left">
                Libraries
              </Typography>
            </Grid>
            <Grid container direction="row" xs={8} sm={10}>
              {[<ReactJS />, <Redux />, <OpenCV />, <OpenGL/>, <TensorFlow/>].map(
                (library, index) => (
                  <Grid item className={classes.icon} key={index}>
                    {library}
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={4} sm={2}>
              <Typography variant="h5" color="textPrimary" align="left">
                Tools
              </Typography>
            </Grid>
            <Grid  container direction="row" xs={8} sm={10}>
              {[
                <VSCode/>,
                <Jira/>,
                <Firebase/>,
                <Git/>,
                <BitBucket/>,
                <VisualStudio/>,
                <Eclipse/>,
                <SQLServerStudio/>,
              ].map((tool, index) => (
                  <Grid item className={classes.icon} key={index}>
                    {tool}
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  anchor: {
    display: "block",
    position: "relative",
    top: "-250px",
    visibility: "hidden",
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
    width: "100%",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    margin: "15px",
    padding: "10px",
  },
}));
