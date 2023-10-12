import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import { User } from "../../../../../models/User";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../../auth/[...nextauth]/route";
import userSchema from "@/schema/userSchema";
import { getPaginatedResult } from "@/utils/util";

connectToDatabase();
// get all users with pagination
export const GET = async (req: NextRequest) => {
  const session = await getServerSession(OPTIONS);
  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
  }

  // getting the page number and limit from the url
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const username = searchParams.get("username");
  const phone = searchParams.get("phone");
  const date = searchParams.get("date");
  const role = searchParams.get("role");

  try {
    let queryResult = User.find();

    queryResult.setOptions({ lean: true });
    // queryResult.where("username").equals(username);

    if (username) {
      queryResult.where("username").equals(username);
    }
    if (phone) {
      queryResult.where("phone").equals(phone);
    }
    if (date) {
      const start = new Date(date);
      const end = new Date(date);
      end.setHours(23, 59, 59, 999);
      // @ts-ignore
      queryResult.where("createdAt").gte(start).lte(end);
    }
    if (role) {
      queryResult.where("role").equals(role);
    }

    let query = await queryResult.exec();

    return NextResponse.json(
      { message: "alright", filtered: query },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};
