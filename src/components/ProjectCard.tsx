import * as React from "react";
import { useState } from "react";

// material ui libs
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// fontawesome libs
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

// custom components
import { teamMember } from "../utils/teamMembers";

interface IProjectCard {
  title: string;
  date: string;
  description: string;
  imgSrc: string;
  techStack?: React.ReactElement[];
  teamMembers?: teamMember[];
  moreContent?: string;
}

export default function ProjectCard(props: IProjectCard) {
  const classes = useStyles();

  const [showContent, setContent] = useState(false);

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item>
        <img src={props.imgSrc} className={classes.projectImg} />
      </Grid>
      <Grid item sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item container direction="row" alignItems="center">
            <Grid item direction="column">
              <Typography variant="h4" color="textPrimary">
                {props.title}
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                {props.date}
              </Typography>
            </Grid>
            {props.techStack?.map((tech, index) => (
              <Grid item className={classes.icon} key={index}>
                {tech}
              </Grid>
            ))}
          </Grid>

          <Grid item xs>
            <Typography gutterBottom variant="body1">
              {props.description}
            </Typography>
          </Grid>
          {showContent ? (
            <Grid item xs>
              <Typography variant="body1">{props.moreContent}</Typography>
              <Grid container justify="flex-start" alignItems="center">
                {props.teamMembers.map((x, index) => (
                  <Tooltip title={x.fullName} placement="bottom" key={index}>
                    <Link underline="none" href={x.gitLink}>
                      <Avatar
                        className={classes.avatar}
                        alt="Team Members"
                        key={index}
                      >
                        {x.initial}
                      </Avatar>
                    </Link>
                  </Tooltip>
                ))}
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
          {props.moreContent != null ? (
            <Grid>
              <IconButton
                className={classes.downArrow}
                onClick={() => {
                  setContent(!showContent);
                }}
              >
                <FontAwesomeIcon
                  icon={showContent ? faAngleUp : faAngleDown}
                  color={"black"}
                />
              </IconButton>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    width: "345px",
    marginTop: "15px",
  },
  icon: {
    padding: "5px",
    alignItems: "center",
  },
  avatar: {
    margin: "10px",
    width: "32px !important",
    height: "32px !important",
    backgroundColor: "rgb(166, 188, 230) !important",
    fontSize: "15px",
  },
  projectImg: {
    paddingTop: "10px",
    height: "160px",
    width: "160px",
  },
  downArrow: {
    float: "right",
  },
  container: {
    padding: "20px",
  },
}));
