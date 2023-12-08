import { ShopLayout } from "@/components/layouts";
import { Grid, Box, Typography, Button, Chip } from "@mui/material";
import { initialData } from "@/database/products";
import { SlideShow } from "@/components/ui";

const product = initialData.products[0];

const slug = () => {
    return (
        <ShopLayout
            //TODO: cambiar los valores de title, description y kw
            title={product.title}
            description={product.description}
            kw={product.title}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <SlideShow images={product.images} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column' >
                        {/*Titulo*/}
                        <Typography variant="h1" component='h1' >{product.title}</Typography>
                        <Typography variant="subtitle1" component='h2' >${product.price}</Typography>
                        {/*Cantidad*/}
                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle2" >Cantidad</Typography>
                            {/*ItemCounter*/}
                        </Box>
                        {/*AddToCart*/}
                        <Button color="secondary" className="circular-btn">
                            Agregar al carrito
                        </Button>
                        <Chip label="No hay disponibles" color="error" variant="outlined" />
                        {/*Descripcion*/}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle2">Descripción</Typography>
                            <Typography variant="body2">{product.description}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout >
    )
}

export default slug;