import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { MediaCard } from './Card'

export const Projects = () => {
    return (
        <Container className="mt-5 container-card">
        <Grid container spacing={3} justify="space-between">
            <Grid item xs={3}>
                <MediaCard />
            </Grid>
        </Grid>
        </Container>
    )
}
