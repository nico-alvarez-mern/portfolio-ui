import { Grid,Avatar,makeStyles, Container,Divider,Typography, Hidden} from '@material-ui/core'
import React from 'react';
import {Skills} from './Skills';
import { Education } from './Education';


const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      marginTop: '20px',
    },
    marginTop: {
        marginTop: '10px'
    },
    resumeRightCol :{
        background: '#27221F',
        color: 'white',
        padding: '2em',
        marginTop: '20px'
    },
    line : {
        lineHeight: 2
    }
  }));

export const Resume = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className="animate__animated animate__fadeIn">
            <Grid container>
                <Grid container item xs={12} sm={4}>
                    <Grid container item xs={12} justify="center" direction="column" alignItems="center">
                        <Avatar 
                                alt="Remy Sharp" 
                                src="./nico-alvarez.jpg" 
                                className={classes.large}
                        />
                        <Typography variant="h4">
                            Nicolas Alvarez
                        </Typography>
                    </Grid>
                    <Grid   container item xs={12} 
                            justify="flex-start" 
                            direction="column"
                            alignContent="flex-start"
                            alignItems="flex-start"
                    >
                        <Typography variant="h5" style={{color: 'grey', paddingTop: '40px'}}>
                            Programador
                        </Typography>
                        <Divider style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p className="mr-1">
                            Soy un estudiante de programacion de la Universidad Nacional de Avellaneda. Me encuentro cursando el segundo año de la carrera llevando 10 materias aprobadas. Me dedico especialmente al desarrollo web con React, Node, Express y Mongo aunque tambien tengo experiencia en otras tecnologias.
                        </p>
                        <Divider style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <Typography variant="h6" className={classes.marginTop}>
                            Localidad
                            <p className="fs-1">Almirante Brown, Rafael Calzada</p>
                        </Typography>
                        <Typography variant="h6" className={classes.marginTop}>
                            Telefono
                            <p className="fs-1">+54 011-59463518</p>
                        </Typography>
                        <Typography variant="h6" className={classes.marginTop}>
                            Email
                            <p className="fs-1">nicolas.alvarez.mern@gmail.com</p>
                        </Typography>
                        <Divider style={{borderTop: '3px solid #833fb2'
                                        , width: '50%'
                                        , marginBottom: '20px'
                                        }}/>
                    </Grid>
                    
                </Grid>
                <Grid item xs={12} sm={8} className={classes.resumeRightCol} 
                        direction="column"
                        
                    >
                    <h2 style={{fontSize: '45px',fontWeight: 'lighter'}}>Educacion</h2>
                    <Grid container direction="row" alignItems="center" >
                        <Grid sm={4} xs={12}>
                            <p className="fs-1">01-02-2020 - actualmente</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Universidad Nacional Tecnologica</h2>
                            <p className="fs-1">Tecnico Superior en Sistemas Informaticos</p>
                        </Grid>
                    </Grid>
                    <Divider style={{borderTop: '3px solid #e22947',marginTop: '30px'}}/>
                    <h2 style={{fontSize: '45px',fontWeight: 'lighter'}}>Experiencia</h2>                    
                    <Grid container direction="row" alignItems="center" >
                        <Grid sm={4} xs={12}>
                            <p className="fs-1">01-06-2020 - actualmente</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Epidata: Desarrollador Full Stack</h2>
                            <p className="fs-1">Desarrollo web con React, Node, Mongo y express</p>
                        </Grid>
                        <Grid sm={4} xs={12}>
                            <p className="fs-1">01-02-2020 - 01-06-2020</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Epidata: Mulesoft Integrations Developer</h2>
                            <p className={`fs-1`}>Desarrollo de 30 conectores más test y deploy de los mismos en Mule4, una herramienta basada en Java para crear conectores e integraciones con otras apps.
                            Las funcionalidades de los conectores eran: Leer archivos de servidores FTP. Enviar mails con información de archivos o de base de datos. Enviar archivos de un servidor FTP a otro. Parseo de información para envío de mails, escribir otros archivos o ejecución de distintos stores procedures de base Oracle. Arquitectura del proyecto, variables de entorno, generación de logs.</p>
                        </Grid>
                        <Grid sm={4} xs={12}>
                            <p className="fs-1">04-11-2019 - 01-02-2020</p>
                        </Grid>
                        <Grid sm={8} xs={12}>
                            <h2 className="fs-2">Epidata: Java Developer</h2>
                            <p className="fs-1">Desarrollo backend utilizando Java+Spring Servicios API Rest, Integración con APIs externas, MySql , Test JUnit.</p>
                        </Grid>
                    </Grid>
                    <Divider style={{borderTop: '3px solid #e22947',marginTop: '30px'}}/>
                    
                </Grid>



            </Grid>
        </Container>
    )
}
