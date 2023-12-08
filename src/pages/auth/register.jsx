import Link from 'next/link';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { AuthLayout } from "@/components/layouts";

const RegisterPage = () => {
    return (
        <AuthLayout
            title='Registrar'
            description='Registro de usuario'
            kw='ecommerce, registrar, autenticación'
        >
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component='h1'>Regístrate</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Nombre Completo'
                            variant='filled'
                            fullWidth
                        />
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
                        <TextField
                            label='Repetir Contraseña'
                            variant='filled'
                            type='password'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color='secondary' className='circular-btn' size='large' fullWidth>Ingresar</Button>
                    </Grid>
                    <Grid item xs={12} display='flex' justifyContent='center'>
                        <Link href='/auth/login'>
                            <Typography color='primary'>¿Ya tienes una cuenta?. Inicia sesión</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default RegisterPage;