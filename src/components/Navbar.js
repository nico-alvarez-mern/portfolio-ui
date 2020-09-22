import React from 'react'
import {AppBar,
        Toolbar,
        Typography,
        Button,
        Grid,
        Hidden} from '@material-ui/core';
import {  NavLink} from 'react-router-dom'
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
                    <Button color="inherit">
                        <Typography variant="h6">
                            Nicolas Alvarez
                        </Typography>
                    </Button>
                </Grid>
                <Hidden smDown>
                    <Grid container justify="flex-end" >
                        <NavLink    to="/resumen" 
                                    component={Button}
                                    color="inherit"
                                    exact
                        >
                            Resumen
                        </NavLink>
                        <NavLink    to="/sobremi" 
                                    component={Button}
                                    color="inherit"
                                    exact
                        >
                            Sobre Mi
                        </NavLink>
                        <NavLink    to="/proyectos" 
                                    component={Button}
                                    color="inherit"
                                    exact
                        >
                            Proyectos
                        </NavLink>
                        <NavLink    to="/contacto" 
                                    component={Button}
                                    color="inherit"
                                    exact
                        >
                            Contacto
                        </NavLink>
                            
                    </Grid>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
