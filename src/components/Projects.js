import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { MediaCard } from './Card'

const projects = [
    {
        title: 'Calendar App',
        information: 'Un calendario creador de eventos especificos en cada fecha/hora. El backend esta desarrollado en node y mongoDb como base de datos.',
        github: 'https://github.com/nicoAlvarezMern/calendar-app',
        liveDemo: 'https://nicolas-alvarez-mern-calendar.herokuapp.com/',
        image: './calendar-app.png'
    },
    {
        title: 'Journal App',
        information: 'Aplicacion creadora de notas conectada a firebase como base de datos y autenticacion.',
        github: 'https://github.com/nicoAlvarezMern/journal-app',
        liveDemo: 'https://nicolas-alvarez-mern-journal-app.netlify.app/',
        image: './journal-app.PNG'
    },
    {
        title: 'Bienes Raices',
        information: 'Una muy buena practica para practicar diseño y maquetado en html y css. Una pagina de practica completamente estatica que expone casas de lujos',
        github: 'https://github.com/nicoAlvarezMern/bienes-raices',
        liveDemo: 'https://nicolas-alvarez-mern-bienes-raices.netlify.app/',
        image: './bienes-raices.PNG'
    },
    {
        title: 'Heroes App',
        information: 'Una practica de React para utilizar react-router-dom animaciones y boostrap',
        github: 'https://github.com/nicoAlvarezMern/heroes-app',
        liveDemo: 'https://heroes-react-app.vercel.app/marvel',
        image: './heroes-app.PNG'
    },
    {
        title: 'Calzado E-Commerce',
        information: 'Un pequeño ejemplo de un e-commerce creado en react',
        github: 'https://github.com/nicoAlvarezMern/test-maquetado',
        liveDemo: 'https://test-maquetado.vercel.app/',
        image: './venta-zapatillas.PNG'
    }
]
export const Projects = () => {

    return (
        <Container className="mt-5 container-card animate__animated animate__fadeIn" >
        <Grid container spacing={3} justify="flex-start" alignContent="center">
        {
            projects.map( project => (
                <Grid container item md={3} sm={6} xs={12}>
                    <MediaCard {...project}/>
                </Grid>

            ))
        }
        </Grid>
        </Container>
    )
}
