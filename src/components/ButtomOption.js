import React from 'react';
import clsx from 'clsx';
import {  NavLink} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
});

const paths = [
  {
    path: '/resumen',
    nombre: 'Resumen'
  },
  {
    path: '/sobremi',
    nombre: 'Sobre mi'
  },
  {
    path: '/proyectos',
    nombre: 'Proyectos'
  },
  {
    path: '/contacto',
    nombre: 'Contacto'
  }
]

const navlink = (index)=>{
  return (
    <NavLink  to={paths[index].path}
              component={Button}
              color="inherit"
              style={{display: 'block',marginLeft: '20px'}}
    >
      {paths[index].nombre}
    </NavLink>
  )
}

export default function TemporaryDrawer({toggleDrawer,state}) {

  const classes = useStyles();
  
  const list = () => (
    <div  className={clsx(classes.list)}>
      <List>
        {['Resumen', 'Sobre mi', 'Proyectos', 'Contacto'].map((text, index) => (
          <ListItem button key={text} component={() => navlink(index)}>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Drawer open={state['left']} onClose={toggleDrawer('left', false)}
        >
          {list()}
        </Drawer>
        </React.Fragment>
    </div>
  );
}
