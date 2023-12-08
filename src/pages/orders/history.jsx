import Link from "next/link";
import { Typography, Grid, Chip, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ShopLayout } from "@/components/layouts";

const columns = [
    { field: 'id', headerName: 'ID', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'fullName', headerName: 'Nombre Completo', width: 300, headerAlign: 'center' },
    {
        field: 'paid', headerName: 'Pagado', description: 'Información sobre el estado de pago de la orden', width: 130,
        renderCell: params => {
            return (
                params.row.paid ?
                    <Chip color='success' label='Pagado' variant='outlined' />
                    :
                    <Chip color='error' label='Pendiente' variant='outlined' />
            )
        },
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'Orden', headerName: 'Ir a la orden', width: 130,
        renderCell: params => {
            return (
                <Link href={`/orders/${params.row.id}`} prefetch={false}>
                    <Button variant="text" color="secondary">Ver orden</Button>
                </Link>
            )
        },
        align: 'center',
        headerAlign: 'center'
    },
];

const rows = [
    { id: 1, paid: false, fullName: 'Ernesto López' },
    { id: 2, paid: true, fullName: 'Juan Pérez' },
    { id: 3, paid: false, fullName: 'María González' },
    { id: 4, paid: false, fullName: 'Ana Martínez' },
    { id: 5, paid: false, fullName: 'José Hernández' },
    { id: 6, paid: false, fullName: 'Rosa Díaz' },
    { id: 7, paid: false, fullName: 'Carlos Sánchez' },
    { id: 8, paid: false, fullName: 'Laura Gómez' },
    { id: 9, paid: false, fullName: 'Javier Rodríguez' },
    { id: 10, paid: false, fullName: 'Sara López' },
    { id: 11, paid: false, fullName: 'David Pérez' },
    { id: 12, paid: true, fullName: 'Andrea González' },
    { id: 13, paid: false, fullName: 'Francisco Martínez' },
    { id: 14, paid: false, fullName: 'Paula Hernández' },
    { id: 15, paid: false, fullName: 'Daniel Díaz' }
];

const OrdersHistory = () => {
    return (
        <ShopLayout
            title='Historial de Ordenes'
            description='Historial de Ordenes'
            kw='historial de ordenes'
        >
            <Typography variant='h1' component='h1'>Historial de Ordenes</Typography>
            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        rowsPerPageOptions={[10]}
                        pageSize={10}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default OrdersHistory;