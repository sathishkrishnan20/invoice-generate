import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";

export async function POST(request: Request) {
  try {
    console.log('Starting to Send the API Register')
    const body = await request.json();
    const { email, name, password } = body;
   console.log('Response JSON Captured')
    // const hashedPassword = await bcrypt.hash(password, 12);
    console.log({
      email,
        name,
        hashedPassword: password,
    })
    console.log({db: process.env.DATABASE_URL })
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword: password,
      },
    });
  
    return NextResponse.json(user);
  } catch (error) {
    console.log(error)
    return NextResponse.json(error);
  }

}
