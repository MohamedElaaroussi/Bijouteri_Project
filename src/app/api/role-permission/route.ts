import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../db/connection";

import { Role } from "../../../../models/Role";
import { Permission } from "../../../../models/Permission";

import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../auth/[...nextauth]/route";

connectToDatabase();
export const POST = async (req: NextRequest, res: NextResponse) => {

    const session = await getServerSession(OPTIONS);
    if (!session) {
        return NextResponse.json(
            { message: "Not authenticated" },
            { status: 403 },
        );
    }
    try {
        // extract the role id and the permissions
        const { role, permission } = await req.json()

        // array contain permission To Be added
        const permissionToBeAdded: string[] = []

        // array contain permission To Be removed
        const permissionToBeremoved: string[] = []

        // check if the role exist
        const foundRole = await Role.findById(role)
        if (!foundRole) {
            return NextResponse.json({ message: "Role Not Found" }, { status: 404 })
        }

        // check if the permission sent from the front are already exist
        const foundPermission: number = await Permission.count({
            '_id': { $in: permission }
        })

        if (foundPermission !== permission.length) {
            return NextResponse.json(
                { error: "You have specify a permission id that doest exist" },
                { status: 404 },
            );
        }

        // populate the two array
        permission.forEach((perm: string) => {
            if (foundRole.permission.includes(perm)) {
                permissionToBeremoved.push(perm)
            } else {
                permissionToBeAdded.push(perm)
            }
        });

        // add new permission to the role
        foundRole.permission.push(...permissionToBeAdded)
        if (permissionToBeremoved.length) {
            await Role.findByIdAndUpdate(role, { $pullAll: { permission: permissionToBeremoved } })
        }
        await foundRole.save()
        return NextResponse.json({ message: `${permissionToBeAdded.length} permission(s) added and ${permissionToBeremoved.length} removed` }, { status: 201 })
    } catch (e) {
        return NextResponse.json(
            { error: "Something went wrong!" },
            { status: 500 },
        );
    }
}