import { Checkbox, Form, Input, Button } from "antd";
import React from "react";
const rules = {
  required: [{ required: true, message: "Bu alan boş bırakılamaz." }],
  email: [{}],
};
const AuthForm = () => {
  return (
    <div className="login-form-wrapper">
      <Form className="login-form" onFinish={(e) => console.log(e)}>
        <Form.Item className="m-0" name="Email" rules={rules.required}>
          <Input placeholder="Email*" type="email" className="form-input" />
        </Form.Item>
        <Form.Item className="m-0" name="Password" rules={rules.required}>
          <Input
            type="password"
            placeholder="Password*"
            className="form-input"
          />
        </Form.Item>
        <div className="forgot-password">
          <Form.Item
            initialValue={false}
            className="m-0"
            name="Remember"
            valuePropName="checked"
            rules={rules.required}
          >
            <Checkbox className="">Beni Hatırla </Checkbox>
          </Form.Item>
          <a href="#" className="text-link">
            Şifrenizi mi unuttunuz?
          </a>
        </div>
        <Form.Item>
          <Button htmlType="submit" className="login-btn">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthForm;
