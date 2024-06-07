import prisma from "@/lib/prisma";
import RegisterDto from "@/types/Dto/Register";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const requestBody: RegisterDto = await request.json();
    const newUser: Prisma.UserCreateInput = {
      username: requestBody.email,
      first_name: requestBody.first_name,
      last_name: requestBody.last_name,
      email: requestBody.email,
      password_hash: await bcrypt.hash(requestBody.password, 10),
      profile_picture: requestBody.profile_picture,
      role: requestBody.role,
    };
    const createdUser = await prisma.user.create({
      data: newUser,
    });
    return NextResponse.json({
      status: 200,
      data: createdUser,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error creating user", error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
}
