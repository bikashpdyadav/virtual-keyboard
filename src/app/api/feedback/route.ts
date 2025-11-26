import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

export async function POST(request: Request) {
  const { name, organization, category, message } = await request.json();

  if (!name || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const entry = {
    name,
    organization: organization || null,
    category,
    message,
    createdAt: new Date(),
  };

  try {
    const uri = process.env.MONGODB_URI;
    if (uri) {
      const client = await getMongoClient();
      const dbName = process.env.MONGODB_DB || "lpvk";
      await client.db(dbName).collection("feedback").insertOne(entry);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feedback form error", error);
    return NextResponse.json({ error: "Failed to save feedback" }, { status: 500 });
  }
}


