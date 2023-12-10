import { db } from "@/database";
import { Product } from "@/models";

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getProductBySlug(req, res);
        default:
            return res.status(400).json({ message: 'Método no soportado' });
    }
}

const getProductBySlug = async (req, res) => {

    const { slug } = req.query;

    await db.connect();

    const product = await Product.findOne({ slug }).lean();

    await db.disconnect();

    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }

    return res.status(200).json(product);
}