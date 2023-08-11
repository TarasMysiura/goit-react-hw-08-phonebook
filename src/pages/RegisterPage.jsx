import css from './RegisterPage.module.css';

import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authSlice';
import { registerUserThunk } from 'redux/authOperations';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const onFinish = values => {
    dispatch(registerUserThunk(values));
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
          className={css.label}
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
          className={css.label}
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
          className={css.label}
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
