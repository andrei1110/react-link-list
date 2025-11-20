import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Não autorizado" },
        { status: 401 }
      );
    }

    const backendRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pages/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { success: false, message: data.message ?? "Erro ao excluir página" },
        { status: backendRes.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[DELETE PAGE ERROR]", err);
    return NextResponse.json(
      { success: false, message: "Erro interno ao excluir página" },
      { status: 500 }
    );
  }
}
