import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';

const init = {
    name: '',
    email: '',
    gender: '',
    number: '',
    password: '',
    confirmpassord: '',
};

export default function Signup() {
    const [data, setData] = useState(init);

    console.log('sign-up rendering...');

    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    const submit = e => {
        e.preventDefault();
        setData(init);
        console.log(data);
    };

    return (
        <>
            <Container>
                <Box align='center'>
                    <Avatar
                        alt='Travis Howard'
                        src='/static/images/avatar/2.jpg'
                    />

                    <Typography variant='h4' sx={{ py: 1 }}>
                        Sign Up
                    </Typography>
                    <Typography variant='subtitile'>
                        Please fill the form to create an account !
                    </Typography>
                </Box>
                <form onSubmit={submit}>
                    <TextField
                        label='Name'
                        variant='standard'
                        fullWidth
                        sx={{ mt: 2 }}
                        name='name'
                        value={data.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label='Email'
                        type='email'
                        variant='standard'
                        fullWidth
                        sx={{ my: 2 }}
                        name='email'
                        value={data.email}
                        onChange={handleChange}
                    />
                    <FormControl sx={{}}>
                        <FormLabel id='demo-radio-buttons-group-label'>
                            Gender
                        </FormLabel>
                        <RadioGroup
                            sx={{ display: 'initial', py: 1 }}
                            aria-labelledby='demo-radio-buttons-group-label'
                            defaultValue='female'
                            name='radio-buttons-group'>
                            <FormControlLabel
                                value='male'
                                control={<Radio />}
                                label='Male'
                                name='gender'
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                value='female'
                                control={<Radio />}
                                label='Female'
                                name='gender'
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                value='other'
                                control={<Radio />}
                                label='Other'
                                name='gender'
                                onChange={handleChange}
                            />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        label='Phone Number'
                        type='number'
                        variant='standard'
                        fullWidth
                        name='number'
                        value={data.number}
                        onChange={handleChange}
                    />
                    <TextField
                        label='Password'
                        type='password'
                        variant='standard'
                        fullWidth
                        sx={{ my: 2 }}
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                    />
                    <TextField
                        label='Confirm Password'
                        type='password'
                        variant='standard'
                        fullWidth
                        name='confirmpassord'
                        value={data.confirmpassord}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label='I accept the terms and Condition'
                        sx={{ my: 1 }}
                    />
                    <Grid align='center'>
                        <Button
                            fullWidth
                            type='submit'
                            variant='contained'
                            color='primary'
                            sx={{ px: 3, py: 1 }}>
                            Sign up
                        </Button>
                    </Grid>
                </form>
            </Container>
        </>
    );
}
