import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import { User } from "../../../../../models/User";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../../auth/[...nextauth]/route";
import { getPaginatedResult } from "@/utils/util";

connectToDatabase();

// filter users with pagination
export const GET = async (req: NextRequest) => {
  const session = await getServerSession(OPTIONS);
  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
  }

  // getting data from the req url
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const username = searchParams.get("username");
  const phone = searchParams.get("phone");
  const date = searchParams.get("date");
  const role = searchParams.get("role");
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  try {
    // building the query
    let query = User.find();

    if (username) {
      query.where({
        username: { $regex: ".*" + username + ".*", $options: "i" },
      });
    }

    if (phone) {
      query.where({
        phone: { $regex: ".*" + phone + ".*" },
      });
    }

    if (date) {
      const start = new Date(date);
      const end = new Date(date);
      end.setHours(23, 59, 59, 999);
      // @ts-ignore
      query.where("createdAt").gte(start).lte(end);
    }

    if (role) {
      query.where("role").equals(role);
    }

    // see how many users
    let totalUsers = await User.countDocuments(query);

    // if the filter return no users
    if (!totalUsers) {
      return NextResponse.json(
        {
          message: "No user(s) was found matching your criteria",
        },
        { status: 200 },
      );
    }

    // calling a method that return start index and end index and a results which in our case users
    const { startIndex, endIndex, results } = getPaginatedResult(
      page,
      limit,
      totalUsers,
    );

    // getting users based on the query + pagination
    const filteredUsers = await User.find()
      .skip(startIndex)
      .limit(endIndex)
      .populate("role")
      .exec();

    // make the result equal the filteredUsers
    results.result = filteredUsers;

    return NextResponse.json(
      {
        message: "the Filter was applied successfully",
        filtered: results,
        total: totalUsers,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};
