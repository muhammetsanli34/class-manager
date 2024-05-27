import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export async function POST(req: Request) {
    try {
        const requestBody: User = await req.json();
        const user = await prisma.user.create({
            data: requestBody,
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