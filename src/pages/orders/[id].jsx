import Link from "next/link";
import { Typography, Grid, Card, CardContent, Divider, Box, Button, Chip } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { CartList, OrderSummary } from "@/components/cart";
import { CreditCardOffOutlined, CreditCardOutlined } from "@mui/icons-material";

const OrderPage = () => {
    return (
        <ShopLayout
            title='Orden 12312'
            description='Resumen de la orden 12305'
            kw='orden'
        >
            <Typography variant="h1" component="h1">Ordern :123</Typography>
            <Chip
                sx={{ my: 2 }}
                label="Pendiente de Pago"
                variant="outlined"
                color="error"
                icon={<CreditCardOffOutlined />}
            />
            <Chip
                sx={{ my: 2 }}
                label="Pagada"
                variant="outlined"
                color="success"
                icon={<CreditCardOutlined />}
            />
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
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
                                <h1>Pagar</h1>
                                <Chip
                                    sx={{ my: 2 }}
                                    label="Pagada"
                                    variant="outlined"
                                    color="success"
                                    icon={<CreditCardOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default OrderPage;