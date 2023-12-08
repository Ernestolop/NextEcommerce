import Link from "next/link";
import { Grid, Typography, CardActionArea, CardMedia, Box, Button } from "@mui/material";
import { initialData } from "@/database/products";
import { ItemCounter } from "../ui";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
];

const CartList = ({ editable = false }) => {
    return (
        <>
            {
                productsInCart.map(product => (
                    <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
                        <Grid item xs={3}>
                            <Link href='/products/slug' prefetch={false}>
                                <CardActionArea>
                                    <CardMedia
                                        component='img'
                                        image={`/products/${product.images[0]}`}
                                        alt={product.title}
                                        sx={{ borderRadius: '5px' }}
                                    />
                                </CardActionArea>
                            </Link>
                        </Grid>
                        <Grid item xs={7}>
                            <Box diplay='flex' flexDirection='column'>
                                <Typography variant="body1"> {product.title} </Typography>
                                <Typography variant="body1">Talla: <strong>M</strong></Typography>
                                {
                                    editable ? <ItemCounter /> : <Typography variant="body1">Cantidad: <strong>1</strong></Typography>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                            <Typography>${product.price}</Typography>
                            {
                                editable && (
                                    <Button variant='text' color='secondary'>Remover</Button>
                                )
                            }
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}

export default CartList;