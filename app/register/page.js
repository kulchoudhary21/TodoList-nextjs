"use client"
import React from "react";
import "../../style/login.scss";
import Link from "next/link";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
const validatio12 = Yup.object().shape({
    name: Yup.string().required(`Name is required`),
  email: Yup.string().email().required(`Email is required`),
  passwd: Yup.string()
    .required(`Password is required`)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!+@#\$%\^&\*])(?=.{8,})/,
      `Enter Password which contains char uppaercase and nu`
    ),
  cpasswd: Yup.string()
    .required(`Password is required`)
    .oneOf([Yup.ref("passwd")], `Password not matched.`),
});
function page() {
  const createData=async (data)=>{
    const obj={
      email:data.email,
      name:data.name,
      passwd:data.passwd
    }
    const result=await axios.post("http://localhost:3000/api/register",obj)
    console.log("result",result)
  }
  return (
    <div>
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            passwd: "",
            cpasswd: "",
          }}
          validationSchema={validatio12}
          onSubmit={(values) => {
            console.log("values20", values);
            createData(values);
          }}
        >
          {({ errors, touched, setFieldValue, isSubmitting, values }) => (
            <Form action="" className="login">
              <div>
                <div>
                  <div>
                    <Field name="name" type="text" placeholder="Name" />
                  </div>
                  {errors.name && touched.name ? (
                    <div style={{ color: "red" }} className="mb-4">
                      {errors.name}
                    </div>
                  ) : null}
                </div>
                <div>
                  <div>
                    <Field name="email" type="email" placeholder="Email" />
                  </div>
                  {errors.email && touched.email ? (
                    <div style={{ color: "red" }} className="mb-4">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <div>
                  <div>
                    <Field
                      name="passwd"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  {errors.passwd && touched.passwd ? (
                    <div style={{ color: "red" }} className="mb-4">
                      {errors.passwd}
                    </div>
                  ) : null}
                </div>
                <div>
                  <div>
                    <Field name="cpasswd" type="password" placeholder="Confirm Password" />
                  </div>
                  {errors.cpasswd && touched.cpasswd ? (
                    <div style={{ color: "red" }} className="mb-4">
                      {errors.cpasswd}
                    </div>
                  ) : null}
                </div>
                <div>
                  {" "}
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default page;
