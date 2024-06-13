import {
    Avatar,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';

export default function Signup() {
    return (
        <>
            <Container>
                <Grid align='center'>
                    <Avatar
                        alt='Travis Howard'
                        src='/static/images/avatar/2.jpg'
                    />

                    <Typography variant='h4' sx={{ py: 1 }}>
                        Sign In
                    </Typography>
                </Grid>
                <TextField
                    label='Username'
                    variant='standard'
                    fullWidth
                    sx={{ mt: 2 }}
                />

                <TextField
                    label='Password'
                    type='password'
                    variant='standard'
                    fullWidth
                    sx={{ my: 2 }}
                />

                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='Remember Me'
                    sx={{ my: 1 }}
                />
                <Grid align='center'>
                    <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        sx={{ px: 3, py: 1 }}>
                        Sign in
                    </Button>
                </Grid>
                <Typography sx={{ my: 1 }}>
                    <Link href='#'>Forget Password ?</Link>
                </Typography>
                <Typography sx={{ my: 1 }}>
                    {' '}
                    Do You have an account ?<Link href='#'> Sign up</Link>
                </Typography>
            </Container>
        </>
    );
}
