import * as React from "react";
import { useState } from "react";

//material ui libs
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

// fontawesome libs
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

//custom components
import ProjectCard from "./ProjectCard";
import {
  ReactJS,
  Firebase,
  Redux,
  MsSql,
  Python,
  NodeJS,
  LeapJS,
  Arduino,
} from "../utils/techIcons";

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

export default function Projects() {
  const classes = useStyles();

  const [moreContent, setMoreContent] = useState(false);

  return (
    <Container className={classes.mainContainer}>
      <Typography
        className={classes.title}
        variant="h3"
        color="textPrimary"
        align="left"
      >
        Projects
      </Typography>
      <ProjectCard
        title="SideKick"
        description=" Sidekick is a software platform connecting primary caregivers of
        children with autism, with professional respite care workers. With
        features such as direct messaging, an interactive calendar system
        and an extensive market place, Sidekick contains all the tools to
        seamlessly manage your respite care needs. Available on both iOS
        and Andriod, Sidekick is developed using React Native, Redux and
        Firebase."
        date="June 2020 - Current"
        imgSrc={"images/sidekick_icon.webp"}
        techStack={[<ReactJS/>, <Redux/>, <Firebase/>]}
      />
      <ProjectCard
        title="AutoConnect"
        description="AutoConnect is a generic intercommunication service for autonomous vehicles. 
        Providing a service for vehicles to share real-time sensory data amongst each other, extending 
        the overall awareness/visibility of hazardous objects on the roads. In cases were vehicle sensors 
        are limited due to obstructions, AutoConnect will facilitate the transfer of critical information, 
        preventing accidents for traditionally unforeseeable hazards."
        date="September 2019 - April 2020"
        imgSrc={"images/auto_car.jpg"}
        techStack={[<NodeJS/>, <Python/>, <MsSql/>]}
        moreContent="AutoConnect secured 3rd place in the 2020 Student Choice Awards for the anual Queen's University ELEC 490/8 project competition. Supervised by Professor Ning Lu, the AutoConnect team is seen below."
        teamMembers={[JohnBowden, SudhirPokhrel, DrewHarshaw]}
      />

      <Button
        className={classes.button}
        onClick={() => {
          setMoreContent(!moreContent);
        }}
        endIcon={
          <FontAwesomeIcon
            icon={moreContent ? faAngleUp : faAngleDown}
            color={"black"}
          />
        }
      >
        {moreContent ? "Less " : "More "}Projects
      </Button>
      <div>
        {moreContent ? (
          <>
            <ProjectCard
              title="Wildfire Predictor"
              description="Developed a Wildfire Predictor during an Ericsson on-site company hackathon. Leveraging 
              the power of machine learning, historical wildfires and historical weather data were used for training 
              and current weather data was used for testing. Our predictor generates a probabilistic heatmap denoting 
              the risk of wildfires occurring for a given geographical area."
              date="May 2019"
              imgSrc={"images/unavailable-image.jpg"}
              techStack={[<ReactJS/>, <Python/>]}
              moreContent=""
              teamMembers={[TadhgMcdonald, DavidChoi, DrewHarshaw]}
            />

            <ProjectCard
              title="ASL Translator"
              description="Developed an American Sign Language (ASL) Translator during QHacks 2018 which has the capability 
              to convert speech into animated ASL sign. Inversly, ASL Translator is able to recognize physical ASL signs using 
              Leap Motion and translate to the proper text. Winner of the Sun Life Financial Sponsor prize."
              date="February 2018"
              imgSrc="images/leapMotion.png"
              techStack={[<LeapJS/>, <NodeJS/>]}
              moreContent="https://devpost.com/software/asl-translator"
              teamMembers={[
                TeddKourkounakis,
                AlexRuffo,
                VishalKamath,
                DrewHarshaw,
              ]}
            />

            <ProjectCard
              title="Lok-It"
              description="Lok-It is a bicycle locking system for students designed to prevent on-campus bicycle 
              thefts. Students can easily and safely lock their bicycles by swiping their student cards on the magnetic 
              card reader. An Arduino microcontroller sends the student information to a centralized server which 
              authenticates the user and saves the necessary information to the database. Once authenticated, the 
              Arduino opens or closes the 3d printed locking mechanism through the use of servo motors."
              date="January 2016 - April 2016"
              imgSrc="images/lokit.jpg"
              techStack={[<Arduino/>]}
              moreContent=""
              teamMembers={[MichaelLang, DrewHarshaw]}
            />

            <ProjectCard
              title="Quadcopter Drone"
              description="Designed and built quadrocopter drone in Grade 12 of high school for Tech Design course.
              Used Autodesk Inventor 3D modelling tool to design the chassis and used a Computer Numerical Control 
              (CNC) machine to mill the aluminium chassis. The drone was able to sustain a flight time of 7 minutes."
              date="January 2015 - April 2015"
              imgSrc="images/unavailable-image.jpg"
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "40px",
    maxWidth: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    textAlign: "center",
    textTransform: "none",
    justifyContent: "center",
    alignItems: "center",
    margin: "40px",
  },
  title: {
    alignItems: "left",
    justifyContent: "left",
    textAlign: "left",
  },
}));
