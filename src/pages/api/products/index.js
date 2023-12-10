import { SHOP_CONSTANTS, db } from "@/database";
import { Product } from "@/models";

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getProducts(req, res);
        default:
            return res.status(400).json({ message: 'Método no soportado' });
    }
}

const getProducts = async (req, res) => {

    const { gender = 'all' } = req.query;

    let conditions = {};

    if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(gender)) {
        conditions = { gender };
    }

    await db.connect();

    const products = await Product.find(conditions)
        .select('title images price inStock slug')
        .lean();

    await db.disconnect();

    return res.status(200).json(products);
}