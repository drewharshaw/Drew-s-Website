import * as React from 'react'

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


class ProjectCard extends React.Component<IProjectCard>{

    render () {
        return (
            <Card className={'card'}>
                <CardHeader
                    title={this.props.title}
                    subheader={this.props.date}
                />
                <CardActionArea>
                    <CardMedia
                    className={'media'}
                    image={this.props.img_src}
                    title={this.props.title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.description}
                      </Typography>
                    </CardContent>
                    <Grid container justify="flex-start" alignItems="center">
                      {this.props.techStack.map((x) => (
                        <Chip icon={x.icon} size='small' label={x.label} className='chip' />
                      ))}
                    </Grid>
                    <Divider variant="middle" />
                    <Grid container justify="flex-start" alignItems="center">
                      {this.props.teamMembers.map((x) => (
                         <Avatar className='avatar' alt='Team Members'>{x.initial}</Avatar>
                      ))}
                    </Grid>
                </CardActionArea>
            </Card>
        )
    }
}

export default ProjectCard;