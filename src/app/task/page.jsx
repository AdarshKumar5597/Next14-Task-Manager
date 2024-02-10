import TaskCard from "@/components/taskCard/taskCard";

const getTasks = async () => {

  const data = await fetch("http://localhost:3000/api/task")
  
  if (!data.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  return data.json();
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
