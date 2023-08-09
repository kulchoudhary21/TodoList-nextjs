import { asyncError, errorHandler } from "../../middleware/error";
import db from "../../db/db";
const user = db.users;
const userRegister = async (req, resp) => {
  console.log("hehehehehehe");
  console.log("req.body", req.body);
  const { name, email, passwd } = req.body;
  if (!name || !email || !passwd)
    errorHandler(resp, 400, "please enter all field..");

  const userdata = await user.findOne({
    where: {
      email: email,
    },
  });
  if (userdata) errorHandler(resp, 400, "This mail id already exists");
  else {
    await user.create({
      name,
      email,
      passwd,
    });
    resp.status(200).json({
      message:"user succesfully ",
      success:true
    })
  }
};
export default userRegister;
