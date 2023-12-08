import { Grid, Typography } from "@mui/material";

const OrderSummary = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography>Nro. Productos:</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>3 items</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>SubTotal:</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>$155.13</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Impuestos(15%):</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>$15.13</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>Total:</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>$1555.13</Typography>
            </Grid>
        </Grid>
    )
}

export default OrderSummary;