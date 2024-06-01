import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const requestBody: Prisma.UserCreateInput = await req.body;
        requestBody.password_hash = await bcrypt.hash(requestBody.password_hash, 10);
        const user = await prisma.user.create({
            data: requestBody
        });
        return {
            status: 200,
            body: user,
        };
    } catch (error) {
        return {
            status: 400,
            body: error,
        };
    }
}