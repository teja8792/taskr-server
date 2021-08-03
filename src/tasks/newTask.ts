import schemas from "./schemas";

const newTask = (db: any) => {
  return function (newTaskData: any) {
    // santize input data
    // validate input data
    const v = schemas.newTaskInput.validate(newTaskData);
    if (v.error) {
      console.error(v.error);
      return v.error;
    }

    // validate with db schema
    const dbv = schemas.db.validate(newTaskData);

    if (dbv.error) {
      console.error(dbv.error);
      return dbv.error;
    }

    const data = dbv.value;
    // check for pickup and drop, if either not present, dont add to database
    if (!data.has_pickup && !data.has_drop) {
      // debug only
      console.error("Provide either pickup or drop info to create task.");
      // return;
      // throw new Error("Provide either pickup or drop info to create task.");
    }
    // add to database
    db.insert(data);
    db.find({}, (err, d) => {
      if (err) console.error("newTask db find", err);
      console.log(d);
    });
  };
};
export default newTask;
