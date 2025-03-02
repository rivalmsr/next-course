import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { products } from "../data";

interface Props {
  params: {
    id: string;
  }
}

function getProductById(id: string) {
  return products.find(product => product.id === parseInt(id));
}

export function GET(_: NextRequest, props: Props) {
  const { params: { id } } = props;
  const product = getProductById(id);

  if (!product)
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });

  return NextResponse.json(
    { id: 1, name: 'Milk', price: 2.5 },
  )
}

export async function PUT(request: NextRequest, props: Props) {
  const { params: { id } } = props;
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = getProductById(id);
  if (!product)
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });

  return NextResponse.json(
    { id: product.id, ...body },
  )

}

export function DELETE(_: NextRequest, props: Props) {
  const { params: { id } } = props;

  const product = getProductById(id);
  if (!product)
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });

  return NextResponse.json({});
}
