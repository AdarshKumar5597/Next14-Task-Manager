import { Task } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        await connectToDb();
        const tasks = await Task.find({}).sort({ createdAt: -1 }).populate("userId", "username");
        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch tasks");
    }
}
