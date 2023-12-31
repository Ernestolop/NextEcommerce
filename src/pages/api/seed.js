
import { db, seedData } from "@/database";
import { Product } from "@/models";

export default async function handler(req, res) {
    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'No tiene acceso a este servicio' });
    }
    await db.connect();

    await Product.deleteMany({});
    await Product.insertMany(seedData.initialData.products);

    await db.disconnect();

    res.status(200).json({ message: 'Proceso realizado correctamente' });
}