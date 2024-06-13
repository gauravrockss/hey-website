import React from 'react';
import Hero from '../components/Hero';
import Image from '../components/Image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Section from '../components/Section';
import { Box, Grid } from '@mui/material';

function Main() {
    return (
        <>
            <Hero image='heroimg.webp' />
            <Section
                title=' What ?'
                content='Ladies, diese Fotos sind für euch. Egal, wer ihr seid,
                        egal wo ihr im Leben steht, egal, was ihr macht, ob ihr
                        selbständig seid und euren Träumen folgt, Anpackerinnen,
                        Super-Mamas, Influencerinnen, Sportlerinnen, Blogger
                        oder was auch immer seid: ich freue mich, euch vor der
                        Kamera zu haben.'
                button=' Read More'
                image='img1.webp'
            />

            <Grid container sx={{ background: '#E4B6B5', p: 5 }} spacing={1.8}>
                <Grid item lg={4} md={6} sm={12}>
                    <Image name='img2.webp' />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <Image name='img3.webp' />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <Image name='img4.webp' />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <Image name='img5.webp' />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <Image name='img6.webp' />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <Image name='img7.webp' />
                </Grid>
            </Grid>
            <Box sx={{ background: '#814E4C', color: 'white' }}>
                <Section
                    title='Storytelling by Content'
                    content='Mit einem Gespür für Ästhetik und dem Wissen, wie Storytelling funktioniert, erzähle ich deine Geschichte ohne Worte, aber mit Bildern. Bilder, die du für deine Website, deinen Social Media Auftritt und PR benutzen kannst. '
                    button='View my portfolio'
                    image='img8.webp'
                    reverse='true'
                />
            </Box>
            <Grid container sx={{ p: 12 }} spacing={3}>
                <Grid item lg={6}>
                    <Image name='img9.webp' />
                </Grid>
                <Grid item lg={6}>
                    <Image name='img10.webp' />
                </Grid>
            </Grid>
        </>
    );
}

export default Main;
