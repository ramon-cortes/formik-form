import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('Form values: ', values);
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'field required';
        //RegEx copied from https://formik.org/docs/guides/validation
        //                   ↓
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'username should be an email';
      }
      if (!values.password) errors.password = 'field required';
      return errors;
    }
  });

  return (
    <div>
      <h3>Login</h3>
      <p>
        {/* TODO: build you form here. */}        
      </p>
      <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name='email' id="emailField" type='text' onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" className='error'>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input name='password' id="pswField" type='text' onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" className='error'>{formik.errors.password}</div> : null}
        <p/>
        <button id="submitBtn" type='submit'>Submit</button>
      </form>
      </div>      
    </div>
  );
}

export default App;
