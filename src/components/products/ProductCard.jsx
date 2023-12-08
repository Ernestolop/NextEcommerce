import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardMedia, Grid, Box, Typography } from '@mui/material';

const ProductCard = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false);

    const productImage = useMemo(() => {
        if (isHovered) {
            return `/products/${product.images[1]}`
        }
        return `/products/${product.images[0]}`;
    }, [isHovered])

    return (
        <Grid item
            xs={6}
            sm={4}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>
                <Link href='products/slug' prefetch={false}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            className='fadeIn'
                            image={productImage}
                            alt={product.title}
                        />
                    </CardActionArea>
                </Link>
            </Card>

            <Box sx={{ mt: 1 }} className='fadeIn'>
                <Typography fontWeight={500}> {product.title} </Typography>
                <Typography> ${product.price} </Typography>
            </Box>
        </Grid>
    )
}

export default ProductCard;