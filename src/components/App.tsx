import * as React from 'react'
import Header from './Header';
import Footer from './Footer';
import ProjectCard from './ProjectCard';
import { DrewHarshaw, JohnBowden, SudhirPokhrel, DavidChoi, TadhgMcdonald, 
  AlexRuffo, VishalKamath, MichaelLang, TeddKourkounakis  } from '../utils/teamMembers';

import { react, nodeJS, python, ardunio, leapJS, expressJS } from '../utils/technologies';
import Container from '@material-ui/core/Container';
import ReactCanvasNest from 'react-canvas-nest';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Ubuntu',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: "#ffffff"
    }
  },
});


export default function App() {
      return (
        // pass theme down the React component tree, use const theme = useTheme(); to access theme
        <MuiThemeProvider theme={theme}>
        <Header 
          color='transparent'
          fixed={true}
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
        />
        <div className={'nest-wrapper'}>
          <ReactCanvasNest 
          className ='canvasNest' 
          config = {{ pointColor: '255, 255, 255', lineColor: '255, 255, 255', count: 100, mouseDist: 50000 }} 
          style = {{ zIndex: 0, opacity: '0.7' }} />
        </div>
        <div className="anchor" id="projects"></div>
        <div className={'backdrop'}>
          <Container className={'main-container'}>

            
            <Typography variant="h3" color="textPrimary" align="center">
                Projects
            </Typography>

            <Grid container spacing={3} className='gridD'>
              <Grid item xs>
                <ProjectCard title="AutoConnect" 
                  description="AutoConnect is a generic intercommunication service for autonomous vehicles. 
                  Providing a service for vehicles to share real-time sensory data amongst each other, extending 
                  the overall awareness/visibility of hazardous objects on the roads. In cases were vehicle sensors 
                  are limited due to obstructions, AutoConnect will facilitate the transfer of critical information, 
                  preventing accidents for traditionally unforeseeable hazards." 
                  date="September 2019 - Present" 
                  img_src={'images/auto_car.jpg'}
                  techStack={[react, nodeJS, python]}
                  teamMembers={[JohnBowden, SudhirPokhrel, DrewHarshaw]}/>
              </Grid>
              <Grid item xs>
                <ProjectCard title="Personal Drone" 
                  description="Designed and built quadrocopter drone in grade 12 of high school for Tech Design course.
                  Used Autodesk Inventor 3D modelling tool to design the chassis and used a Computer Numerical Control 
                  (CNC) machine to mill the aluminium chassis. The drone was able to sustain a flight time of 7 minutes." 
                  date="January 2015 - April 2015" 
                  img_src={'images/unavailable-image.jpg'}
                  techStack={[]} 
                  teamMembers={[DrewHarshaw]}/>
              </Grid>
              <Grid item xs>
                <ProjectCard title="Lok-It" 
                  description="Lok-It is a bicycle locking system for student designed to prevent on-campus bicycle 
                  thefts. Students can easily and safely lock their bicycles by swiping their student cards on the magnetic 
                  card reader. An Arduino microcontroller sends the student information to a centralized server which 
                  authenticates the user and saves the necessary information to the database. Once authenticated, the 
                  Arduino opens or closes the 3d printed locking mechanism through the use of servo motors." 
                  date="January 2016 - April 2016" 
                  img_src={'images/lokit.jpg'}
                  techStack={[ardunio]} 
                  teamMembers={[MichaelLang, DrewHarshaw]}/>
              </Grid>
              <Grid item xs>
                <ProjectCard title="Wild Fire Predictor" 
                  description="Ericsson onsite hackathon, developed a wild fire predictor using machine learning and historic
                  and current weather data. Probabilies were displayed in heatmap form, denoting high risk areas." 
                  date="May 2019" 
                  img_src={'images/unavailable-image.jpg'}
                  techStack={[react, python]} 
                  teamMembers={[TadhgMcdonald, DavidChoi, DrewHarshaw]}/>
              </Grid>
              <Grid item xs>
                {/* https://devpost.com/software/asl-translator */}
                <ProjectCard title="ASL Translator" 
                  description="American Sign Language (ASL) Translator has the capability to convert speech into animated
                  ASL sign. Inversly, ASL Translator is able to recognize physical ASL signs using Leap Motion and translate
                  to the proper text." 
                  date="February 2018" 
                  img_src={'images/leapMotion.png'} 
                  techStack={[leapJS, nodeJS, expressJS]} 
                  teamMembers={[TeddKourkounakis, AlexRuffo, VishalKamath, DrewHarshaw]}/>
              </Grid>
            </Grid>
          </Container>
          <Divider variant="middle" className='divider'/>
          {/*
          <Grid container spacing={3}>
            <Typography variant="h3" color="textPrimary" align="center">
                  Resume
            </Typography>


          </Grid>
          */}
          <Footer />
        </div>
      </MuiThemeProvider>
      );
}
