import * as React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import '../styles/style.css';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import SvgIcon from '@material-ui/core/SvgIcon';

export interface technology {
  label: string;
  icon?: React.ReactElement;
}

export interface teamMembers {
  initial: string;
}

/**
 * Project Cards Interface
 */
interface IProjectCard {
  title: string;
  date: string;
  description: string;
  img_src: string;
  techStack: technology[];
  teamMembers: teamMembers[];
}


export default function ProjectCard(props: IProjectCard) {


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

        return (
            <Card className={'card'}>
              <CardHeader
                  title={props.title}
                  subheader={props.date}
              />
              
              <CardMedia
              className={'media'}
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
                  <Chip icon={x.icon} size='small' label={x.label} className='chip' />
                ))}
              </Grid>
              <Divider variant="middle" />
              <Grid container justify="flex-start" alignItems="center">
                {props.teamMembers.map((x) => (
                    <Avatar className='avatar' alt='Team Members'>{x.initial}</Avatar>
                ))}
                 <IconButton 
                    className={clsx({
                      ['expand']: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                      <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z" /></svg>
                      </SvgIcon>
                    </IconButton>
              </Grid>
                
            </Card>
        );

}
