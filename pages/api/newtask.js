import db from "../../db/db";
import {errorHandler} from "../../middleware/error"
const task = db.task;
const setUsers = async (req, resp) => {
  try {
    const data = await task.create(req.body);
    if (req.method !== "POST") {
      errorHandler(resp,400,"Post method allow only")
    } else {
      resp.status(200).json({
        success: true,
      });
    }
  } catch (err) {
    console.log("ererer", err);
  }
};
export default setUsers;
