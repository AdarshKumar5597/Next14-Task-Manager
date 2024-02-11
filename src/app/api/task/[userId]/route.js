import { Task } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    try {
        await connectToDb();
        console.log(params)
        const userId = params.userId;
        console.log("userId", userId);
        const tasks = await Task.find({userId}).sort({ createdAt: -1 }).populate("userId", "username");
        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch tasks");
    }
}