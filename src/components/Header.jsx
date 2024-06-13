import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import InstagramIcon from '@mui/icons-material/Instagram';
import Image from './Image';

const pages = ['Home', 'Portfolio', 'About Me', 'Contact Us'];

function Header(props) {
    const [color, setColor] = React.useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);

    return (
        <>
            <AppBar
                sx={{
                    backgroundColor: `${color ? `#E4B6B5` : `transparent`}`,
                    boxShadow: 'none',
                }}
                position='fixed'>
                <Container>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                        <Image name='iogo.webp' sx={{ maxWidth: '8%' }} />

                        <Box
                            align='center'
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                                color='inherit'>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                align='center'
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}>
                                {pages.map(page => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}>
                                        <Typography textAlign='center'>
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box
                            align='center'
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                            }}>
                            {pages.map(page => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 3,
                                        color: 'black',
                                        display: 'block',
                                        fontSize: '20px',
                                        fontWeight: '500',
                                        px: 3,
                                    }}>
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <Box
                                sx={{
                                    background: 'black',
                                    color: 'white',
                                    px: 3,
                                    py: 1,
                                    borderRadius: 10,
                                }}>
                                Say Hey
                            </Box>
                            <InstagramIcon fontSize='large' sx={{ m: 2 }} />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div>{props.children}</div>
        </>
    );
}
export default Header;
