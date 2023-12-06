import { Grid } from '@mui/material';
import { ProductCard } from '.';

const ProductsList = ({ products }) => {
    return (
        <Grid container spacing={4}>
            {
                products.map((product) => (
                    <ProductCard product={product} key={product.slug} />
                ))  
            }   
        </Grid>
    )
}

export default ProductsList;