import db from "../../db/db";
import { errorHandler } from "../../middleware/error";
const task = db.task;
const getTasks = async (req, resp) => {
  try {
    console.log("req.method",req.method)
    if (req.method !== "GET") errorHandler(resp, 400, "GET method allow only");
    else {
      const data = await task.findAll({
        where: {
          isDelete: false,
        },
      });
      resp.status(200).json({
        success: true,
        data: data,
      });
    }
  } catch (err) {
    console.log("ererer", err);
  }
};
export default getTasks;
