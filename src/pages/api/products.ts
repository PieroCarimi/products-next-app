import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const response = await fetch('https://products-node-production.up.railway.app/');
    const products = await response.json();

    res.status(200).json(products);
}