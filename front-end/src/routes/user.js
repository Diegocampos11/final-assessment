import { Input, Form, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { saveData } from "../services/dataFetching";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "./../store/userData.js";
import "./../css/user.scss";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);

  const onFinish = async (values) => {
    setShowLoader(true);
    const user = await saveData(values);
    if (user != undefined) {
      dispatch(increment(values));
      navigate("/data-sent");
    }
  };

  const formJSX = () => {
    return (<div className="flex-center" style={{ height: "100%" }}>
    <h1 style={{ marginBottom: 0, color: "#000b70", fontStyle: "italic" }}>
      Users App
    </h1>
    {/* <h2>Sign Up</h2> */}
    <br></br>
    <br></br>
    <Form
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
      style={{ width: "30%" }}
    >
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "Input your first name" }]}
      >
        <Input placeholder="First Name*" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Input your last name" }]}
      >
        <Input placeholder="Last Name*" />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        rules={[{ required: true, message: "Input your phone number" }]}
      >
        <Input placeholder="Phone number*" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "Not a valid email",
          },
          {
            required: true,
            message: "Input your email",
          },
        ]}
      >
        <Input placeholder="Email*" />
      </Form.Item>

      <br></br>
      <br></br>
      <Form.Item>
        <Button className="submit-button" type="primary" htmlType="submit">
          CREATE
        </Button>
      </Form.Item>
    </Form>
  </div>)
  };

  const loaderJSX = () => {
    return (
      <div className="flex-center" style={{ height: "100%" }}>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  };

  return showLoader ? loaderJSX() : formJSX();
}
