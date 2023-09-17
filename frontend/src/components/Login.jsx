import React from 'react'
import useUserContext from "../UserContext";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email.required'),
  password: Yup.string().required('Password is required')
})

const Login = () => {

  const { setLoggedIn } = useUserContext();
  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values)

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Nice!',
          text: 'Logged in Successfully 😎'
        });

        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);
        resetForm();
        navigate('/customizer');

      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Email or Password is incorrect 😢'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong'
        })
      }

    },

    validationSchema: LoginSchema
  })




  return (


    <div className='container sign'>
      <div className='w-32 m-5'>
        <div className='card'>
          <div className='card-body'>
            
              <section className="vh-100">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6 text-black">
                      <div className="px-5 ms-xl-4 text-center">
                        <span className="h3 display-4 mb-0">SVG DESIGN GENERATOR</span>
                      </div>
                      <div className="d-flex align-items-center mt-5 px-5 ms-xl-4 mt-1 pt-3 pt-xl-0 mt-xl-n5">
                        <form style={{ width: "23rem" }} onSubmit={loginForm.handleSubmit}>
                          <h3 className="h3 mb-3 pb-3" style={{ letterSpacing: 1 }}>
                            LOG IN
                          </h3>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="email"
                              className="form-control form-control-lg"
                              placeholder='Email address'
                              onChange={loginForm.handleChange}
                              value={loginForm.values.email}
                            />

                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="password"
                              className="form-control form-control-lg"
                              placeholder='Password'
                              onChange={loginForm.handleChange}
                              value={loginForm.values.password}
                            />

                          </div>
                          <div className="pt-1 mb-4">
                            <button className="btn btn-info btn-lg btn-block" type="submit">
                              Login
                            </button>
                          </div>
                          <p className="small mb-5 pb-lg-2">
                            <a className="text-muted" href="#!">
                              Forgot password?
                            </a>
                          </p>
                          <p>
                            Don't have an account?{" "}
                            <a href="#!" className="link-info">
                              Register here
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                      <img
                        src="img2.jpg"
                        alt="Login image"
                        className="w-100 vh-100"
                        style={{ objectFit: "cover", objectPosition: "left" }}
                      />
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login