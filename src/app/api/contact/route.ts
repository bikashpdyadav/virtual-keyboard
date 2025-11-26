import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const entry = {
    name,
    email,
    message,
    createdAt: new Date(),
  };

  try {
    const uri = process.env.MONGODB_URI;
    if (uri) {
      const client = await getMongoClient();
      const dbName = process.env.MONGODB_DB || "lpvk";
      await client.db(dbName).collection("messages").insertOne(entry);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}


