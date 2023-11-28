import NextLink from 'next/link';
import { AppBar, Toolbar, Link, Typography, Box, Button, IconButton, Badge } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' style={{ textDecoration: 'none' }}>
                    <Link component={'span'}>
                        <Typography variant='h6'>Ecommerce</Typography>
                    </Link>
                </NextLink>
                <Box flex={1} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <NextLink href='/category/men'>
                        <Link component={'span'}>
                            <Button variant='h6'>Hombres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/women'>
                        <Link component={'span'}>
                            <Button variant='h6'>Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/kid'>
                        <Link component={'span'}>
                            <Button variant='h6'>Niños</Button>
                        </Link>
                    </NextLink>
                </Box>
                <Box flex={1} />
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <NextLink href='/cart'>
                    <Link component={'span'}>
                        <IconButton>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>
                <Button>Menú</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;