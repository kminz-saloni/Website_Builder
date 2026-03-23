import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to Supabase 'contacts' table
    const { error } = await supabase.from("contacts").insert([
      {
        name: body.name,
        email: body.email,
        message: body.message,
      },
    ]);

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json(
        { ok: false, error: "Database saving failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API Server Error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
