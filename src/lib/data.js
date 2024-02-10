import { Task, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getTasks = async () => {
  try {
    connectToDb();
    const tasks = await Task.find({}).populate("userId", "username");
    return tasks;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting tasks");
  }
};

export const getTask = async (id) => {
  noStore(); // its not gonna cache any more
  try {
    connectToDb();
    const task = await Task.find({ _id: id });
    return task[0];
  } catch (error) {
    console.log(error);
    throw new Error("Error getting task");
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.find({ id });
    return user[0];
  } catch (error) {
    console.log(error);
    throw new Error("Error getting user");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find({});
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting users");
  }
};

export const getUsersForAdminPage = async () => {
  const response = await fetch("http://localhost:3000/api/user");
  
  if (!response.ok) {
    throw new Error("Error getting users");
  }

  return response.json();
};

export const getTasksForAdminPage = async () => {
  const response = await fetch("http://localhost:3000/api/task");

  if (!response.ok) {
    throw new Error("Error getting users");
  }

  return response.json();
};
