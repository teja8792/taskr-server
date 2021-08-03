import newTask from "./newTask";
interface TasksInitoptions {
  db?: string | any;
}

function tasks_init(options: TasksInitoptions) {
  const db = options.db;
  return {
    newTask: newTask(db)
  };
}

export default tasks_init;
