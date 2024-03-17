import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid email Address")
        .required("email is required"),
      password: yup
        .string()
        .required("Password is Required")
        .min(8, "Password must be at least 8 character long ")
        .max(20, "Password must not be more than 20 characters")
        .matches(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
          "Password must contain at least one number, one lowercase letter, and one uppercase letter"
        ),
    }),
    onSubmit: (values) => {
      console.log(values, "login-data");
      const usersData = JSON.parse(localStorage.getItem("signup_data"));
      if (!usersData  || usersData.length === 0) {
        alert("You have not signed up yet. Please sign up first.");
        return;
      }
      // console.log(temp, "temp-login-data");
      // here find the that user from local storage and match with values array if login then navigate to home/hemi page
      const users = usersData.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      // const filterUser = usersData.filter((user)=> user.email && user.password)
      if (users) {
        setIsLogin(true);
        localStorage.setItem("isLogin", true); //When the user successfully logs in, the isLogin state is updated to true, and this change is also stored in the local storage by setting the key "isLogin" to "true"
        navigate("/home");
      } else {
        alert("the user doesnot have a account please Signup frist");
      }
    },
  });
  return (
    <div className="login_form">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form_item">
          <label htmlFor="Email">Email</label>
          <input
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
          <input
            id="Password"
            type="password"
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="form_item">
          <button type="submit">Submit</button>
          <div>
            Dont Have an Account ?{" "}
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "black",
                margintop: "10px",
              }}
            >
              SignUp
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

// import { useNavigate , Link} from "react-router-dom";
// import { useState } from "react";
// import "./Login.scss"

// const Login = () => {
//     const navigate = useNavigate();
//     const [details , setDetails] = useState({
//         username:"",
//         password:""
//     })
//     function submitHandler(e){
//         e.preventDefault();
//         const temp = JSON.parse(localStorage.getItem('login-signup'))
//         console.log(temp);
//         if(temp.username === details.username && temp.password === details.password){
//             console.log("user is authenticated");
//             navigate("/")
//             alert("login Sucessfull");
//         }else{
//             console.log("user is not authenicated")
//             alert("login creditails wrong");
//         }

//     }
//   return (
//     <div className='Login_Page'>
//         <div className='container'>
//             <h1 style={{textAlign:"center"}}>Login</h1>
//             <form className='login_form' onSubmit={submitHandler}>
//                <div>
//                 <label> UserName:</label>
//                 <input className='input_btn' value={details.username} onChange={(e)=> setDetails({  ...details ,username:e.target.value })} type='text' placeholder='username' required/>
//                </div>
//                <div>
//                <label> Password:</label>
//                 <input className='input_btn' value={details.password} onChange={(e)=> setDetails({ ...details, password:e.target.value  })} type='password' placeholder='username' required/>
//                </div>
//                <div>
//                 <button className='button' type='submit'>Login</button>
//                 <div>Dont Have an  Account ? <Link to = "/signup">SignUp</Link></div>
//                </div>

//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login
