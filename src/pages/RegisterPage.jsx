// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBInput,
//   MDBIcon,
// } from 'mdb-react-ui-kit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { useDispatch } from 'react-redux';
// import { registerUserThunk } from 'redux/authOperations';
// import { Field, Form, Formik } from 'formik';
import css from './RegisterPage.module.css';
// import { FormError } from 'components/FormError/FormError';


// const RegisterPage = () => {
//   const dispatch = useDispatch();


//   const handleSubmit = (values, { resetForm }) => {
//     console.log('values: ', values.name);
//     console.log('values: ', values.email);

//     dispatch(
//       registerUserThunk(values)
//     );
//     resetForm();
//   };

//   // const handleSubmit = event => {
//   //   event.preventDefault();

//   //   const form = event.currentTarget;
//   //   console.log('form: ', form);

//   //   const name = form.elements.userName.value;
//   //   const email = form.elements.userEmail.value;
//   //   const password = form.elements.userPassword.value;

//   //   dispatch(
//   //     registerUserThunk({
//   //       name,
//   //       email,
//   //       password,
//   //     })
//   //   );
//   // };
//   return (
//     <>
//       <h2 className={css.title}>Register your account</h2>
//       <Formik
//         initialValues={{
//           name: '',
//           email: '',
//           password: '',
//         }}
//         onSubmit={handleSubmit}
//         // validationSchema={schema}
//       >
//         <Form className={css.formStyle}>
//           <label className={css.label}>
//             <span className={css.span}>Name</span>
//             <Field
//               className={css.input}
//               type="text"
//               name="name"
//               autoComplete="true"
//             />
//             <FormError name="name" />
//           </label>
//           <label className={css.label}>
//             <span className={css.span}>Email</span>
//             <Field
//               className={css.input}
//               type="email"
//               name="email"
//               autoComplete="true"
//             />
//             <FormError name="email" />
//           </label>
//           <label className={css.label}>
//             <span className={css.span}>Password</span>
//             <Field
//               className={css.input}
//               type="password"
//               name="password"
//               autoComplete="true"
//             />
//             <FormError name="password" />
//           </label>

//           <button type="submit" className={css.button}>
//             Add contact
//           </button>
//         </Form>
//       </Formik>
//     </>
//   );




//   //   <MDBContainer fluid>
//   //     <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
//   //       <MDBCardBody>
//   //         <MDBRow>
//   //           {/* <MDBCol
//   //             md="10"
//   //             lg="6"
//   //             className="order-2 order-lg-1 d-flex flex-column align-items-center"
              
//   //           > */}
//   //           <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//   //             Register your account
//   //           </p>
//   //           <form onSubmit={handleSubmit}>
//   //             <div className="d-flex flex-row align-items-center mb-4 ">
//   //               <MDBIcon fas icon="user me-3" size="lg" />
//   //               <MDBInput
//   //                 label="Your Name"
//   //                 id="form1"
//   //                 type="text"
//   //                 className="w-100"
//   //                 size="lg"
//   //               />
//   //             </div>

//   //             <div className="d-flex flex-row align-items-center mb-4">
//   //               <MDBIcon fas icon="envelope me-3" size="lg" />
//   //               <MDBInput
//   //                 label="Your Email"
//   //                 id="form2"
//   //                 type="email"
//   //                 size="lg"
//   //               />
//   //             </div>

//   //             <div className="d-flex flex-row align-items-center mb-4">
//   //               <MDBIcon fas icon="lock me-3" size="lg" />
//   //               <MDBInput
//   //                 label="Password"
//   //                 id="form3"
//   //                 type="password"
//   //                 size="lg"
//   //               />
//   //             </div>

//   //             {/* <div className="mb-4">
//   //               <MDBCheckbox
//   //                 name="flexCheck"
//   //                 value=""
//   //                 id="flexCheckDefault"
//   //                 label="Subscribe to our newsletter"
//   //               />
//   //             </div> */}

//   //             <MDBBtn className="mb-5" size="lg" type="submit">
//   //               Register
//   //             </MDBBtn>
//   //             {/* </MDBCol> */}
//   //           </form>
//   //           <MDBCol
//   //             md="10"
//   //             lg="6"
//   //             className="order-1 order-lg-2 d-flex align-items-center"
//   //           >
//   //             <MDBCardImage
//   //               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//   //               fluid
//   //             />
//   //           </MDBCol>
//   //         </MDBRow>
//   //       </MDBCardBody>
//   //     </MDBCard>
//   //   </MDBContainer>
//   // );
// };

// export default RegisterPage;


import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authSlice';
import { loginUserThunk, registerUserThunk } from 'redux/authOperations';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
 
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const onFinish = values => {
    dispatch(registerUserThunk(values));
    // console.log('values: ', values);
    form.resetFields();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div className={css.container}>
      <h2 className={css.title}>Register your account</h2>

      <Form
        className={css.formStyle}
        name="basic"
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          email: '',
          password: '',
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input className={css.input} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input className={css.input} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password className={css.input} />
        </Form.Item>

        {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
