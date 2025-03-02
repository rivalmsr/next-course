import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: {
    id: string;
  }
}

export function GET(_: NextRequest, props: Props) {
  const { params: { id } } = props;
  if (parseInt(id) > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(
    { id: 1, name: 'Mosh' },
  )
}

export async function PUT(request: NextRequest, props: Props) {
  const { params: { id } } = props;
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (parseInt(id) > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(
    { id: 1, name: 'Mosh' },
  )

}

export function DELETE(_: NextRequest, props: Props) {
  const { params: { id } } = props;

  if (parseInt(id) > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({});
}
