import data from "./data";
import schemas from "./schemas";
const newTask = function (newTaskData: any) {
  // validate input data
  const v = schemas.newTaskInput.validate(newTaskData);
  if (v.error) {
    console.error(v.error);
    return v.error;
  }

  // santize input data

  // add to database
  const dbv = schemas.db.validate(newTaskData);
  console.log(dbv);

  if (dbv.error) {
    console.error(dbv.error);
    return dbv.error;
  }

  data.insert(dbv.value);
  data.find({}, (err, d) => {
    console.log(d);
  });
};
export default newTask;
