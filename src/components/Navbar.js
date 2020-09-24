import React from 'react'
import {AppBar,
        Toolbar,
        Typography,
        Button,
        Grid,
        Hidden} from '@material-ui/core';
import {  Link} from 'react-router-dom'
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const Navbar = ({toggleDrawer}) => {


    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={toggleDrawer('left', true)} color="inherit">
                    <MenuIcon  />
                </IconButton>
                
                <Grid container>
                        <Link   to="/" 
                                component={Button}
                                color="inherit"
                                    
                        >
                            <Typography variant="h6">
                                Nicolas Alvarez
                            </Typography>
                        </Link>
                </Grid>
                <Hidden smDown>
                    <Grid container justify="flex-end" >
                        <Link   to="/resumen" 
                                component={Button}
                                color="inherit"
                                    
                        >
                            Resumen
                        </Link>
                        {/* <Link    to="/sobremi" 
                                    component={Button}
                                    color="inherit"
                                    
                        >
                            Sobre Mi
                        </Link> */}
                        <Link    to="/proyectos" 
                                    component={Button}
                                    color="inherit"
                                    
                        >
                            Proyectos
                        </Link>
                        <Link   to="/contacto" 
                                    component={Button}
                                    color="inherit"
                                    
                        >
                            Contacto
                        </Link>
                            
                    </Grid>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
