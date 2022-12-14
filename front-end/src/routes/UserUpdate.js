import { Input, Form, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteUser, updateData } from "../services/dataFetching";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../store/userData.js";
import { getUserById } from "../services/dataFetching";
import "./../css/user.scss";

export default function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);
  const { state } = useLocation();
  const { id } = state;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserById(id).then((data) => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPhoneNumber(data.phoneNumber);
      setEmail(data.email);
      setShowLoader(false);
    });
  }, []);

  const onFinish = async (values) => {
    setShowLoader(true);
    const data = await updateData(Object.assign({ id: id }, values));
    if (data.status === 201) {
      const user = await data.json();
      dispatch(increment(user));
      navigate("/data-sent");
    } else navigate("/error");
  };

  const deleteUserHandler = () => {
    deleteUser(id).then((data) => {
      if (data == true) navigate("/data-sent");
      else navigate("/error");
    });
  };

  const formJSX = () => {
    return (
      <div className="flex-center" style={{ height: "100%" }}>
        <h1 style={{ marginBottom: 0, color: "#000b70", fontStyle: "italic" }}>
          User Info
        </h1>
        <br></br>
        <br></br>
        <Form
          name="basic"
          autoComplete="off"
          onFinish={onFinish}
          style={{ width: "30%" }}
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
          }}
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
            <Input placeholder="Phone number" />
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
              UPDATE
            </Button>
            <Button
              className="delete-button mt-4"
              type="primary"
              danger
              onClick={deleteUserHandler}
            >
              DELETE
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

  const loaderJSX = () => {
    return (
      <div className="flex-center h-100">
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
