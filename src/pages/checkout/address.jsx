import { Typography, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Box, Button } from "@mui/material";
import { ShopLayout } from "@/components/layouts";

const AddressPage = () => {
    return (
        <ShopLayout
            title="Direccion"
            description="Direccion de destino"
            keywords="Direccion"
        >
            <Typography variant="h1" component="h1">Dirección</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                    <TextField label='Nombre' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField label='Apellido' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField label='Dirección' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField label='Dirección 2(opcional)' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField label='Código Postal' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField label='Ciudad' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <FormControl fullWidth>
                        <InputLabel>País</InputLabel>
                        <Select
                            variant='filled'
                            label='País'
                            value={1}
                        >
                            <MenuItem value={1}>Opt 1</MenuItem>
                            <MenuItem value={2}>Opt 2</MenuItem>
                            <MenuItem value={3}>Opt 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField label='Teléfono' variant='filled' fullWidth />
                </Grid>
            </Grid>
            <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
                <Button color='secondary' className='circular-btn' size='large'>Revisar Pedido</Button>
            </Box>
        </ShopLayout>
    )
}

export default AddressPage;