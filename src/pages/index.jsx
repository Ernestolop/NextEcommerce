import { Typography } from "@mui/material";

import { ShopLayout } from "@/components/layouts"

export default function Home() {
  return (
    <>
      <ShopLayout
        title="Ecommerce - Home"
        description="Home Page del Ecommerce"
        kw="ecommerce, home, page, index, products"
      >
        <Typography variant="h1" component="h1">Tienda</Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>Todos los productos</Typography>
      </ShopLayout>
    </>
  )
}
