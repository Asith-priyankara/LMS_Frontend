"use client";
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../styles/style";
type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const SignUp: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      setRoute("Verification");
    },
  });
  const { errors, touched, handleSubmit, handleChange, values } = formik;

  return (
    <div className="w-full">
      <h1 className={styles.title}>Join to ELearning</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className={styles.label}>
            Enter Your Name
          </label>

          <input
            type="text"
            name=""
            id="name"
            placeholder="Enter Your name"
            value={values.name}
            onChange={handleChange}
            className={`${
              errors.name && touched.name ? "border-red-500" : ""
            } ${styles.input}`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block"> {errors.name}</span>
          )}
        </div>

        <label htmlFor="email" className={styles.label}>
          Enter Your Email
        </label>

        <input
          type="email"
          name=""
          id="email"
          placeholder="Enter Your Email"
          value={values.email}
          onChange={handleChange}
          className={`${
            errors.email && touched.email ? "border-red-500" : ""
          } ${styles.input}`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block"> {errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label htmlFor="email" className={styles.label}>
            Enter Your password
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Your password"
            value={values.password}
            onChange={handleChange}
            className={`${
              errors.password && touched.password ? "border-red-500" : ""
            } ${styles.input}`}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer text-black dark:text-white"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer text-black dark:text-white"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
        </div>
        {errors.password && touched.password && (
          <span className="text-red-500 pt-2 block"> {errors.password}</span>
        )}
        <div className="w-full mt-5">
          <input type="submit" value="Sign Up" className={styles.button} />
        </div>
        <br />
        <h5 className="text-center">Or join with</h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="cursor-pointer mr-2" />
          <AiFillGithub
            size={30}
            className="cursor-pointer ml-2 text-black dark:text-white "
          />
        </div>
        <h5 className="text-center text-black dark:text-white">
          Already have an account?{""}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Sign-Up")}
          >
            Sign In
          </span>
        </h5>
      </form>
    </div>
  );
};

export default SignUp;
