import Link from "next/link";
import { Box, Typography, Link as MuiLink, Button } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";

const EmptyPage = () => {
    return (
        <ShopLayout
            title='Carrito Vacio'
            description='No hay productos en el carrito'
            keywords='Carrito Vacio'
        >
            <Box display='flex' sx={{ flexDirection: { xs: 'column', md: 'row' } }} justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography marginLeft={2}>Su carrito está vacío</Typography>
                    <Link href='/'>
                        <Button variant="text" color='secondary'>Regresar</Button>
                    </Link>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage;