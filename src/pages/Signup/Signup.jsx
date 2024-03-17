import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Signup.scss";
import { Link } from "react-router-dom";

const Signup = ({ setIslogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Confirm_Password: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
        .min(3, "Must be 3 characters or more")
        .max(15, "Must be 15 Characters or less")
        .required("FirstName is Required"),
      lastName: yup
        .string()
        .matches(/^[a-zA-Z]+$/, "Last name must contain only letters")
        .min(3, "Must be 3 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("lastName is Required"),
      email: yup.string().email("Invalid email Address").required("email is required"),
      password: yup
        .string()
        .required("Password is Required")
        .min(8, "Password must be at least 8 character long ")
        .max(20, "Password must not be more than 20 characters")
        .matches(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
          "Password must contain at least one number, one lowercase letter, and one uppercase letter"
        ),
      Confirm_Password: yup
        .string()
        .required("Password is Required")
        .min(8, "Password must be at least 8 character long ")
        .max(20, "Password must not be more than 20 characters")
        .matches(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
          "Password must contain at least one number, one lowercase letter, and one uppercase letter"
        )
        .oneOf([yup.ref("password")], "Password must match"),
    }),
    onSubmit: (values, { resetForm }) => {
      let formData = [];
      const temp = localStorage.getItem("signup_data");
      if (temp == null) {
        formData.push(values);
      } else {
        const personsInfo = JSON.parse(temp);
        if (personsInfo.map((obj) => obj.email).indexOf(values.email) === -1) {
          formData = [...personsInfo, values];
          alert("New user added!");
        } else {
          formData = [...personsInfo];
          alert("already user exist try to signup with different email id ");
        }
      }
      localStorage.setItem("signup_data", JSON.stringify(formData));
      
      resetForm();
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signup_form">
      <h2>Sign-up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form_item">
          <label htmlFor="first_name">First Name</label>
          <input
            className="input_box"
            id="first_name"
            type="text"
            name="firstName"
            placeholder="FirstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className="form_item">
          <label htmlFor="last_Name">Last Name</label>
          <input
            className="input_box"
            id="last_Name"
            type="text"
            name="lastName"
            placeholder="LastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className="form_item">
          <label htmlFor="Email">Email</label>
          <input
            className="input_box"
            id="Email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form_item">
          <label htmlFor="Password">Password</label>
          <div className="password-input">
            <input
              className="input_box"
              id="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEye />:  <FaEyeSlash />}
            </span>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="form_item">
          <label htmlFor="Confirm_Password">Confirm Password</label>
          <div className="password-input">
            <input
              className="input_box"
              id="Confirm_Password"
              type={showConfirmPassword ? "text" : "password"}
              name="Confirm_Password"
              placeholder="Confirm_Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Confirm_Password}
            />
            <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <FaEye />:  <FaEyeSlash />}
            </span>
          </div>
          {formik.touched.Confirm_Password && formik.errors.Confirm_Password ? (
            <div>{formik.errors.Confirm_Password}</div>
          ) : null}
        </div>
        <div className="form_item">
          <button type="submit">Submit</button>
          <div>
            Already have an Account ?{" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
                margintop: "10px",
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
































// import React from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import "./Signup.scss";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useState } from "react";
// const Signup = ({ setIslogin}) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       Confirm_Password: "",
//     },
//     validationSchema: yup.object({
//       firstName: yup
//         .string()
//         .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
//         .min(3, "Must be 3 characters or more")
//         .max(15, "Must be 15 Characters or less")
//         .required("FirstName is Required"),
//       lastName: yup
//         .string()
//         .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
//         .min(3, "Must be 3 characters or more")
//         .max(15, "Must be 15 characters or more")
//         .required("lastName is Required"),
//       email: yup
//         .string()
//         .email("Invalid email Address")
//         .required("email is required"),
//       password: yup
//         .string()
//         .required("Password is Required")
//         .min(8, "Password must be at least 8 character long ")
//         .max(20, "Password must not be more than 20 characters")
//         .matches(
//           /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
//           "Password must contain at least one number, one lowercase letter, and one uppercase letter"
//         ),
//       Confirm_Password: yup
//         .string()
//         .required("Password is Required")
//         .min(8, "Password must be at least 8 character long ")
//         .max(20, "Password must not be more than 20 characters")
//         .matches(
//           /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
//           "Password must contain at least one number, one lowercase letter, and one uppercase letter"
//         )
//         .oneOf([yup.ref("password")], "Password must match"),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       // console.log(values);
//       let formData = [];
//       const temp = localStorage.getItem("signup_data");
//       // console.log(temp, "TEMP DATA FIRST TIME");
//       // console.log(values)
//       if (temp == null) {
//         formData.push(values);
//         // console.log(formData, "formdata");
//       } else {
//         const personsInfo = JSON.parse(temp);
//         // console.log(personsInfo, "personinfodata");
//         //-1 ka mtlb ha ki indexof jo index return kr ge usse mai data nhi hai
//         if (personsInfo.map((obj) => obj.email).indexOf(values.email) == -1) {
//           // if email is not same then add the new data in array and pass to local storage
//           formData = [...personsInfo, values];
//         } else {
//           // if email same then pass the old data 
//           formData = [...personsInfo];
//           alert("already user exist try to signup with different email id ");
//         }
     

//       }
//       localStorage.setItem("signup_data", JSON.stringify(formData));
//       alert("New User Added")
//       resetForm();
//     },
//   });

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };
//   return (

//     <div className="signup_form">
//       <h2>Sign-up</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <div className="form_item">
//           <label htmlFor="first_name">First Name</label>
//           <input
//           className="input_box"
//             id="first_name"
//             type="text"
//             name="firstName"
//             placeholder="FirstName"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.firstName}
//           />
//           {formik.touched.firstName && formik.errors.firstName ? (
//             <div>{formik.errors.firstName}</div>
//           ) : null}
//         </div>
//         <div className="form_item">
//           <label htmlFor="last_Name">LastName</label>
//           <input
//             className="input_box"
//             id="last_Name"
//             type="text"
//             name="lastName"
//             placeholder="LastName"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.lastName}
//           />
//           {formik.touched.lastName && formik.errors.lastName ? (
//             <div>{formik.errors.lastName}</div>
//           ) : null}
//         </div>
//         <div className="form_item">
//           <label htmlFor="Email">Email</label>
//           <input
//           className="input_box"
//             id="Email"
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div>{formik.errors.email}</div>
//           ) : null}
//         </div>
//         <div className="form_item">
//           <label htmlFor="Password">Password</label>
//           <input
//           className="input_box"
//             id="Password"
//             type="password"
//             name="password"
//             placeholder="password"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.password}
//           />
//           <span className="toggle-password" onClick={togglePasswordVisibility}>
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           {formik.touched.password && formik.errors.password ? (
//             <div>{formik.errors.password}</div>
//           ) : null}
//         </div>
//         <div className="form_item">
//           <label htmlFor="Confirm_Password">Confirm Password</label>
//           <input
//             className="input_box"
//             id="Confirm_Password"
//             type="password"
//             name="Confirm_Password"
//             placeholder="Confirm_Password"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.Confirm_Password}
//           />
//             <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
//               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           {formik.touched.Confirm_Password && formik.errors.Confirm_Password ? (
//             <div>{formik.errors.Confirm_Password}</div>
//           ) : null}
//         </div>
//         <div className="form_item">
//           <button type="submit">Submit</button>
//           <div>
//             Already have an Account ?{" "}
//             <Link
//               to="/login"
//               style={{
//                 textDecoration: "none",
//                 color: "black",
//                 margintop: "10px",
//               }}
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;

