import Link from "next/link";
import { Typography, Grid, Card, CardContent, Divider, Box, Button } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { CartList, OrderSummary } from "@/components/cart";

const Summary = () => {
    return (
        <ShopLayout
            title='Orden'
            description='Resumen de orden'
            kw='orden'
        >
            <Typography variant="h1" component="h1">Carrito</Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList u />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant="h2">Orden</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant="subtitle1">Dirección de entrega</Typography>
                                <Link href='/checkout/address'>
                                    <Button variant="text">Editar</Button>
                                </Link>
                            </Box>
                            <Typography>Ernesto López</Typography>
                            <Typography>Algún Lugar</Typography>
                            <Typography>Algún Lugar2</Typography>
                            <Typography>MRA - PY</Typography>
                            <Typography>Paraguay</Typography>
                            <Typography>+595971257580</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant="subtitle1">Totales</Typography>
                                <Link href='/cart'>
                                    <Button variant="text">Editar</Button>
                                </Link>
                            </Box>
                            <OrderSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>Confirmar Orden</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default Summary;