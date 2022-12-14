import { UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../services/dataFetching";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../store/userData.js";
import { Col, Row } from "antd";
import UserCard from "../components/UserCard";
import "./../css/user.scss";

export default function UsersList() {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .then(() => {
        setShowLoader(false);
      });
  }, []);

  const createUser = () => {
    navigate("/create-user");
  };

  const usersListJSX = () => {
    return (
      <>
        <Row justify="center" align="top" className="p-5">
          <Button
            size="large"
            type="primary"
            icon={<UserAddOutlined />}
            onClick={() => createUser()}
          >
            Create user
          </Button>
        </Row>
        <Row justify="center" align="top">
          {users.length > 0 ? (
            users.map((user, index) => (
              <div
                key={index}
                className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-around"
              >
                <UserCard user={user} />
              </div>
            ))
          ) : (
            <h1 className="text-white mt-5">No data</h1>
          )}
        </Row>
      </>
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

  return showLoader ? loaderJSX() : usersListJSX();
}
