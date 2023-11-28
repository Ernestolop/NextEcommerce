import { Box, Typography } from "@mui/material";
import { ShopLayout } from "@/components/layouts";

const Page404 = () => {
  return (
    <ShopLayout title='Ecommerce - 404' description='Pagina de error 404' kw='error, 404'>
      <Box display='flex' sx={{ flexDirection: { xs: 'column', md: 'row' } }} justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
        <Typography variant='h1' component='h1' fontSize={80} fontWeight={200} >404 |</Typography>
        <Typography marginLeft={1} >No encontramos ninguna página aquí</Typography>
      </Box>
    </ShopLayout>
  )
}

export default Page404;