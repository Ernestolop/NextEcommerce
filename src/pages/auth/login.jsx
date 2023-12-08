import Link from 'next/link';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { AuthLayout } from "@/components/layouts";

const LoginPage = () => {
    return (
        <AuthLayout
            title='Login'
            description='Login de ecommerce'
            kw='ecommerce, login, autenticación'
        >
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component='h1'>Iniciar Sesión</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Correo electrónico'
                            variant='filled'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Contraseña'
                            variant='filled'
                            type='password'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color='secondary' className='circular-btn' size='large' fullWidth>Ingresar</Button>
                    </Grid>
                    <Grid item xs={12} display='flex' justifyContent='center'>
                        <Link href='/auth/register'>
                            <Typography color='primary'>¿No tienes una cuenta?. Regístrate</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default LoginPage;