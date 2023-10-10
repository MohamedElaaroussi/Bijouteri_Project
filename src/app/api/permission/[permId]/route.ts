import { connectToDatabase } from '../../../../../db/connection';
import { Permission } from '../../../../../models/Permission';
import { getServerSession } from 'next-auth/next';
import { OPTIONS } from '../../auth/[...nextauth]/route';
import { NextRequest, NextResponse } from 'next/server';

connectToDatabase();

// GET a permission By ID
export const GET = async (req: NextRequest, { params }: { params: Record<string, string> }) => {
    const permId = params.permId;
    const session = await getServerSession(OPTIONS);

    if (!session) {
        return NextResponse.json(
            { message: "Not authenticated" },
            { status: 403 },
        );
    }
    try {
        const permission = await Permission.findById(permId)
        if (!permission) {
            return NextResponse.json({ message: "Permission Not Found" }, { status: 404 })
        }
        return NextResponse.json(permission)
    } catch (error) {
        return NextResponse.json(
            { error: "An error occurred while searching the role." },
            { status: 500 },
        );
    }
}

// Update a role by ID
export const PUT = async (req: NextRequest, { params }: { params: Record<string, string> }) => {

    const permId = params.permId;
    const session = await getServerSession(OPTIONS);

    if (!session) {
        return NextResponse.json(
            { message: "Not authenticated" },
            { status: 403 },
        );
    }

    try {
        const permission = await Permission.findById(permId);
        if (!permission) {
            return NextResponse.json({ message: "Permission Not Found" }, { status: 404 })
        }

        const { name } = await req.json();

        if (name) {
            permission.name = name
        }

        await permission.save()
        return NextResponse.json({
            message: "Permission updated successfully",
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            message: "An error occurred while updating the permission",
        }, { status: 500 })
    }
}

// Delete a permission by ID
export const DELETE = async (req: NextRequest, { params }: { params: Record<string, string> }) => {

    const permId = params.permId;
    const session = await getServerSession(OPTIONS);

    if (!session) {
        return NextResponse.json(
            { message: "Not authenticated" },
            { status: 403 },
        );
    }
    try {
        const permission = await Permission.findByIdAndDelete(permId);
        if (!permission) {
            return NextResponse.json({
                message: "Role not found",
            }, { status: 404 })
        }

        return NextResponse.json({
            message: "Role deleted successfully",
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "An error occurred while updating the role",
        }, { status: 500 })
    }
}

