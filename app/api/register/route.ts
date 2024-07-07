import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";

export async function POST(request: Request) {
  try {
    console.log('Starting to Send the API Register')
    const body = await request.json();
    const { email, name, password } = body;
   console.log('Response JSON Captured')
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log({
      email,
        name,
        hashedPassword,
    })
    console.log({db: process.env.DATABASE_URL })
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
  
    return NextResponse.json(user);
  } catch (error) {
    console.log(error)
    return NextResponse.json(error);
  }

}
