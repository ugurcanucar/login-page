import { Checkbox, Form, Input, Button, Spin } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signIn,
  showLoading,
  showAuthMessage,
  hideAuthMessage,
} from "redux/actions/Auth";

const rules = {
  required: [{ required: true, message: "Bu alan boş bırakılamaz." }],
};

const AuthForm = (props) => {
  let history = useNavigate();
  const {
    signIn,
    token,
    showMessage,
    showAuthMessage,
    showLoading,
    hideAuthMessage,
    loading,
  } = props;
  const onFinish = (e) => {
    showLoading();
    signIn(e.Email, e.Password);
  };
  useEffect(() => {
    if (token !== null) {
      history("/");
    }
    if (showMessage) {
      setTimeout(() => {
        hideAuthMessage();
      }, 3000);
    }
  });

  return (
    <div className="login-form-wrapper">
      <Form className="login-form" onFinish={onFinish}>
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
          <Button htmlType="submit" className="login-btn" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { loading, message, showMessage, token } = auth;
  return { loading, message, showMessage, token };
};

const mapDispatchToProps = {
  signIn,
  showAuthMessage,
  showLoading,
  hideAuthMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
