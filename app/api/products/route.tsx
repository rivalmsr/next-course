import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { products } from "./data";

export function GET() {
  return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: products.length + 1, name: body.name, price: body.price }, { status: 201 });
}

