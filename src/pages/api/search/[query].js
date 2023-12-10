import { db } from "@/database";
import { Product } from "@/models";

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return searchProducts(req, res);
        default:
            return res.status(400).json({ message: 'Método no soportado' });
    }
}

const searchProducts = async (req, res) => {
    let { query = '' } = req.query;

    if (query.length === 0) {
        return res.status(400).json({ message: 'No se ha especificado ningún criterio de búsqueda' });
    }

    query = query.toString().toLowerCase();

    await db.connect();

    const products = await Product.find({
        $text: { $search: query }
    })
        .select('title images price inStock slug -_id')
        .lean();

    await db.disconnect();

    return res.status(200).json(products);
}