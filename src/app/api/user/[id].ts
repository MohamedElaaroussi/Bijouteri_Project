import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../../models/User";

// CHANGE THE STATUS OF AN ORDER
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const user = await User.findById(id).exec();
    if (!user) {
      return new NextResponse(JSON.stringify({ error: "user not found" }));
    }

    return new NextResponse(JSON.stringify(user));
  } catch (error) {
    new NextResponse(
      JSON.stringify({ error: "An error occurred while fetching user." })
    );
  }
};
