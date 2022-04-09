import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const CreatePostFormik = () => {
  const initialValues = {
    title: "",
    username: "",
    postText: "",
  };
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log(`data inserted successfuly to database ! `);
    });
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().max(10).required(),
  });
  return (
    <div className="min-h-96 py-[158px] w-full ">
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className=" flex justify-center  ">
          <div className="grid grid-cols-1 gap-2: border-2 border-violet-600  rounded-2xl bg-transparent py-10 px-16 ">
            <label htmlFor="Title">Title:</label>{" "}
            <ErrorMessage name="title" component="span" />{" "}
            <Field
              id="create-post"
              className="input input-bordered input-primary w-[500px] xs:w-56"
              name="title"
              placeholder="(Ex. Title...)"
            />
            <label htmlFor="Username">Username:</label>{" "}
            <ErrorMessage name="username" component="span" />{" "}
            <Field
              id="create-post"
              name="username"
              className="input input-bordered input-primary w-[500px] xs:w-56"
              placeholder="(Ex. username...)"
            />
            <label htmlFor="Post">Post:</label>{" "}
            <ErrorMessage name="postText" component="span" />{" "}
            <Field
              id="create-post"
              className="input input-bordered input-primary w-[500px] xs:w-56"
              name="postText"
              placeholder="(Ex. Post...)"
            />
            <button className="btn btn-primary " type="submit">
              Create Post
            </button>{" "}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePostFormik;
