export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return res.status(400).json({ message: 'No se ha especificado ningún criterio de búsqueda' });
        default:
            return res.status(400).json({ message: 'Método no soportado' });
    }
}