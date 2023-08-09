import db from "../../../db/db";
import { errorHandler } from "../../../middleware/error";
const task = db.task;
const deleteTask = async (req, resp) => {
  try {
    console.log("req.....", req.query);
    if (req.method !== "GET") errorHandler(resp, 400, "GET method allow only");
    else {
      const taskOne = await task.findOne({
        where: { id: req.query.id },
      });
      if (taskOne) {
        const data = await task.update(
          { isDelete: true },
          {
            where: {
              id: req.query.id,
            },
          }
        );
        resp.status(200).json({
          success: true,
          message: "Succesfully deleted",
        });
      }
    }
  } catch (err) {
    console.log("ererer", err);
  }
};
export default deleteTask;
