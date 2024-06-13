import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from '../components/Image';
function Section(props) {
    const { title, content, button, image, reverse = false } = props;
    return (
        <Grid
            container
            textAlign='start'
            spacing={6}
            sx={{
                py: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: `${reverse ? `row-reverse` : `row`}`,
                p: 8,
            }}>
            <Grid item lg={6}>
                <Box sx={{}}>
                    <Typography variant='h2' fontFamily='cursive'>
                        {title}
                    </Typography>
                    <Typography variant='h6' maxWidth={700} sx={{ my: 2 }}>
                        {content}
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{
                            minwidth: '25%',
                            borderRadius: '30px',
                            color: 'white',
                            background: 'black',
                            px: 4,
                            py: 2,
                            fontSize: '18px',
                            my: 2,
                            '&:hover': {
                                background: 'black',
                            },
                        }}>
                        {button}
                    </Button>
                </Box>
            </Grid>
            <Grid item lg={6}>
                <Box align='center' sx={{ mt: 2 }}>
                    <Image name={image} />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Section;
