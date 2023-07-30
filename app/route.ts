import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Hello World!" },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, x-maxage=60",
      },
    }
  );
}
