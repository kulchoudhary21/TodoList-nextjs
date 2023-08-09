import { asyncError, errorHandler } from "@/middleware/error";
import db from "../../db/db";
import { Op } from "sequelize";
const user = db.users;
const loginCheck = async (req, resp) => {
  const { email, passwd } = req.body;
  if (!email || !passwd)
    errorHandler(resp, 400, "email and passwd is not empty");

  const userdata = await user.findOne({
    where: {
      [Op.and]: [
        { email: email },
        {
          [Op.and]: [{ isDelete: false }, { passwd: passwd }],
        },
      ],
    },
    attributes: { exclude: ['passwd'] },
  });
  if (userdata) {
    resp.status(200).json({
      message: "login succesfully",
      success: true,
      userdata
    });
  } else {
    resp.status(400).json({
      message: "login fail",
      success: false,
      userdata:userdata
    });
  }
};
export default loginCheck;
