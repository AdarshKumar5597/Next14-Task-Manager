import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminTasks from "@/components/adminTasks/AdminTasks";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import { getTasksForAdminPage, getUsersForAdminPage } from "@/lib/data";


const loadInitialData = async () => {
  const users = await getUsersForAdminPage();
  const tasks = await getTasksForAdminPage();
  return { users, tasks };
}



const AdminPage = async () => {
  // const session = await auth();
  // const users = await getUsersForAdminPage();
  // console.log("users Admin Page: ", users);
  // const tasks = await getTasksForAdminPage();
  // console.log("tasks Admin Page: ", tasks);
  const { users, tasks } = await loadInitialData();
  console.log("users: ", users);
  console.log("tasks: ", tasks);

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
