import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminTasks from "@/components/adminTasks/adminTasks";
import AdminUsers from "@/components/adminUsers/adminUsers";
import { auth } from "@/lib/auth";

const getUsers = async () => {
  const response = await fetch("http://localhost:3000/api/user");
  return await response.json();
};

const getTasks = async () => {
  const response = await fetch("http://localhost:3000/api/task");
  return await response.json();
};

const AdminPage = async () => {
  const session = await auth();
  const users = await getUsers();
  console.log("users Admin Page: ", users);
  const tasks = await getTasks();
  console.log("tasks Admin Page: ", tasks);

  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <AdminTasks tasks={tasks} isUser={false}/>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <AdminUsers users={users} />
      </Suspense>
    </div>
  );
};

export default AdminPage;
