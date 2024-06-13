import { Grid, Typography, Box, Button } from '@mui/material';
import React from 'react';
import Image from './Image';

function Hero(props) {
    const { image } = props;

    return (
        <Grid container>
            <Grid item lg={6} xs={12}>
                <Box
                    sx={{
                        height: '100vh',
                        background: `url(${process.env.PUBLIC_URL}/images/${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                    }}
                />
            </Grid>
            <Grid item lg={6} sm={12}>
                <Box
                    sx={{
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        background: '#E4B6B5',
                        color: '#323335',
                        p: 4,
                        px: 10,
                    }}>
                    <Typography
                        variant='h1'
                        sx={{ fontFamily: 'Abril Fatface,cursive', pt: 8 }}>
                        Hey
                    </Typography>
                    <Typography
                        variant='h1'
                        sx={{ fontFamily: 'Abril Fatface,cursive', my: 2 }}>
                        it's Her
                    </Typography>
                    <Typography variant='h5' sx={{ maxWidth: '600px' }}>
                        Portraits To Empower Women and Visual Storytelling. This
                        is my Mission.
                    </Typography>
                    <Typography variant='h5' sx={{ maxWidth: '600px', my: 2 }}>
                        Authentische Headshots und Personal Branding für dein
                        Business oder für dich selbst von Alina Atzler.
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{
                            width: '40%',
                            borderRadius: '30px',
                            color: 'white',
                            background: 'black',
                            px: 2,
                            py: 2,
                            fontSize: '18px',
                            my: 2,
                            '&:hover': {
                                background: 'black',
                            },
                        }}>
                        View Picture
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Hero;
