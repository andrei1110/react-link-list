import { apiRequest } from "@/lib/api";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File;
    const token = (await cookies()).get("token")?.value;

    if (!file) {
      return NextResponse.json(
        { error: "Arquivo não enviado" },
        { status: 400 }
      );
    }

    const backendRes = apiRequest<{ url: string }>(
      "/upload/page-avatar",
      token,
      {
        body: form,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
      }
    );

    const data = (await backendRes).data;

    return NextResponse.json({ url: data });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
