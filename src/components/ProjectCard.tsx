import * as React from "react";

// material ui libs
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// custom components
import { teamMember } from "../utils/teamMembers";
import { technology } from "../utils/technologies";

/**
 * Project Cards Interface
 */
interface IProjectCard {
  title: string;
  date: string;
  description: string;
  img_src: string;
  techStack?: technology[];
  teamMembers: teamMember[];
}

const useStyles = makeStyles((theme) => ({
  card: {
    width: "345px",
    marginTop: "15px",
  },
  media: {
    height: "300px",
  },
  chip: {
    margin: "5px",
  },
  avatar: {
    margin: "10px",
    width: "64px !important",
    height: "64px !important",
    backgroundColor: "rgb(166, 188, 230) !important",
  },
}));

export default function ProjectCard(props: IProjectCard) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={props.title} subheader={props.date} />

      <CardMedia
        className={classes.media}
        image={props.img_src}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <Grid container justify="flex-start" alignItems="center">
        {props.techStack.map((x) => (
          <Chip
            icon={x.icon}
            size="small"
            label={x.label}
            className={classes.chip}
            key={x.uid}
          />
        ))}
      </Grid>
      <Divider variant="middle" />
      <Grid container justify="flex-start" alignItems="center">
        {props.teamMembers.map((x) => (
          <Tooltip title={x.fullName} placement="bottom" key={x.uid}>
            <Link underline="none" href={x.gitLink}>
              <Avatar className={classes.avatar} alt="Team Members" key={x.uid}>
                {x.initial}
              </Avatar>
            </Link>
          </Tooltip>
        ))}
      </Grid>
    </Card>
  );
}
