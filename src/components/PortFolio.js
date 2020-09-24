import React from 'react'
import { Grid,Avatar,makeStyles, Container,Divider,Typography} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles((theme) => ({
    socialLinks: {
        display: 'flex',
        justifyContent: 'spaceBetween',
        width: '50%',
        margin: 'auto'
      },
      large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginTop: '20px'
        
      },
    marginTop: {
        marginTop: '10px'
    },
    resumeRightCol : {
        background: '#27221F',
        color: 'white',
        padding: '2em',
        marginTop: '20px',
        borderRadius: '30px'
    },
    icono: {
        color: 'white',
        fontSize: '5em',
        padding: '8px'
    }

  }));

export const PortFolio = () => {
    const classes = useStyles();
    return (
        <Container className="animate__animated animate__fadeIn">
            <Grid container justify="center">
                <Avatar 
                        alt="Remy Sharp" 
                        src="./react.png" 
                        className={classes.large}
                        variant="rounded"
                />
                <Avatar 
                        alt="Remy Sharp" 
                        src="./node.png" 
                        className={classes.large}
                        variant="rounded"
                />
                <Avatar 
                        alt="Remy Sharp" 
                        src="./mongodb.png" 
                        className={classes.large}
                        variant="rounded"
                />
                <Avatar 
                        alt="Remy Sharp" 
                        src="./js.png" 
                        className={classes.large}
                        variant="rounded"
                />
            </Grid>
            <Grid container justify="center" className={classes.resumeRightCol}>
                <Grid container item xs={12}  justify="center">
                    <Typography variant="h2">
                        Full Stack Developer
                    </Typography>
                </Grid>
                <Grid container item xs={12}  justify="center">
                    <Typography variant="h2">
                        ...................................
                    </Typography>
                    <Typography variant="h6" >
                        HTML/CSS | Bootstrap | Material-ui | JavaScript | React | NodeJS | Express | MongoDB
                    </Typography>
                    {/* LinkedIn */}
                </Grid>
                <Grid container item className={classes.socialLinks} justify="space-evenly" >
                    <a href="https://www.linkedin.com/in/nicolas-alvarez-4a74b2189/" rel="noopener noreferrer" target="_blank">
                        <i className={`fa fa-linkedin-square ${classes.icono}`} aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="https://github.com/nicoAlvarezMern" rel="noopener noreferrer" target="_blank">
                        <i className={`fa fa-github-square ${classes.icono}`} aria-hidden="true" />
                    </a>
                </Grid>
                
            </Grid>
        </Container>
    )
}
