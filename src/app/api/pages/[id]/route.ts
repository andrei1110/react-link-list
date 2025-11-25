import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { apiRequest } from "@/lib/api";

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

    const backendRes = await apiRequest(
      `${process.env.API_URL}/pages/${id}`,
      token,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!backendRes.success) {
      return NextResponse.json(
        {
          success: false,
          message: backendRes.message ?? "Erro ao excluir página",
        },
        { status: 400 }
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
