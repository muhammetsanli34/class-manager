import prisma from "@/lib/prisma";
import LoginDto from "@/types/Dto/Login";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const requestBody: LoginDto = await request.json();
    const user = await prisma.user.findUnique({
      where: {
        email: requestBody.email,
      },
    });

    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "User not found",
      });
    }

    const passwordMatch = await bcrypt.compare(
      requestBody.password,
      user.password_hash
    );

    if (!passwordMatch) {
      return NextResponse.json({
        status: 401,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        user_id: user.id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return NextResponse.json({
      status: 200,
      data: {
        user,
        token,
      },
      message: "User logged in successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
}
