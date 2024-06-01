import prisma from "@/lib/prisma";
import { APIResponse } from "@/types/ApiResponse";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<any>>
) {
  try {
    const requestBody: Prisma.UserCreateInput = await req.body;
    requestBody.password_hash = await bcrypt.hash(
      requestBody.password_hash,
      10
    );
    const user = await prisma.user.create({
      data: requestBody,
    });
    return res.status(200).json({
      status: 200,
      data: user,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: error,
      message: "Error creating user",
    });
  }
}
