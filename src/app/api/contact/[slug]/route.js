// api/contact/[slug]/route.js
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    return NextResponse.json({
      status: 200,
    });
  } catch (e) {
    console.error("GET error:", e);
    return NextResponse.json(
      {
        message: "Server error, please try again!",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, content) {
  try {
    console.log(content, "content");
    const productId = content.params.slug;
    const filter = {_id:productId}
    const payload = await request.json();
    console.log(payload);
    return NextResponse.json({
      status: 200,
      message: "PUT request successful",
    });
  } catch (e) {
    console.error("PUT error:", e);
    return NextResponse.json(
      {
        message: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}
