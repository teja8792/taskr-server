import Tasks from "./tasks";
import db from "../dummyData/data";

const tasks = Tasks({ db });

tasks.newTask({});
