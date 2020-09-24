import React from 'react'
import { Grid,Avatar,makeStyles, Container,Divider,Typography,Hidden} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      marginTop: '20px',
    },
    marginTop: {
        paddingTop: '30px',
    },
    resumeRightCol :{
        background: '#27221F',
        color: 'white',
        padding: '2em',
        marginTop: '20px'
    },
    icono : {
        fontSize: '66px',
        paddingRight: '1rem'
    },
    resumeRightCol :{
        background: '#27221F',
        color: 'white',
        padding: '2em',
        marginTop: '20px',
        borderRadius: '20px',
    },
  }));

export const Contact = () => {
    const classes = useStyles();
    return (
        <Container style={{marginTop: '20px'}} className={`animate__animated animate__fadeIn ${classes.resumeRightCol}`}>
            <Grid container direction="row" className={classes.resumeRightCol} justify="center">
                <Grid container item sm={6} xs={12} direction="column" alignItems="center">
                    <Hidden xsDown>
                        <Avatar 
                                alt="Remy Sharp" 
                                src="./nico-alvarez.jpg" 
                                className={classes.large}
                                variant="rounded"
                        />
                        
                            <Typography variant="h4">
                                Nicolas Alvarez
                            </Typography>

                        </Hidden>
                        
                </Grid>
                <Grid item sm={6} xs={12} direction="column" alignItems="center">
                    <Typography variant="h3" style={{paddingLeft: '30px'}}>
                        Contacto
                    </Typography>
                    <Divider style={{borderTop: '3px solid #833fb2', width: '45%'}}/>
                    <Grid container item alignItems="center" className={classes.marginTop}>
                        <i className={`fa fa-phone-square ${classes.icono}`} aria-hidden="true"/>
                        <Typography variant="h4">1159463518</Typography>
                    </Grid> 
                    <Grid container item alignItems="center" className={classes.marginTop}>
                        <i className={`fa fa-fax ${classes.icono}`} aria-hidden="true"/>
                        <Typography variant="h4">1175242480</Typography>
                    </Grid> 
                    <Grid container item alignItems="center" className={classes.marginTop}>
                        <i className={`fa fa-envelope ${classes.icono}`} aria-hidden="true"/>
                        <Typography variant="h6">nicolas.alvarez.mern@gmail.com</Typography>
                    </Grid> 
                </Grid>
            </Grid>
        </Container>
    )
}





{/* <Grid container item alignItems="center" justify="flex-start" className={classes.marginTop}>
                    <i className={`fa fa-phone-square ${classes.icono}`} aria-hidden="true"/>
                    <Typography variant="h4">
                        1159463518
                    </Typography>
                </Grid> */}