import TaskCard from "@/components/taskCard/taskCard";
import { getTasksForAdminPage } from "@/lib/data";


const getTasks = async () => {

  const data = await getTasksForAdminPage();

  return data;
};

const TaskPage = async () => {
  const tasks = await getTasks();

  return (
    <div className="flex flex-wrap gap-[20px]">
      {tasks.length > 0 &&
        tasks.map((task, index) => (
          <div
            key={index}
            className=" lg:w-[30%] lg:h-[calc(100vh - 200px)] sm:w-[100%] md:w-[45%]"
          >
            <TaskCard task={task} />
          </div>
        ))}
    </div>
  );
};

export default TaskPage;
