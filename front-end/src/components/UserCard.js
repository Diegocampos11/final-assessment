import React from "react";
import './UserCard.css'
import { UserOutlined } from "@ant-design/icons";
const UserCard = (props) => {
    return (
        <div className="col-4 shadow p-3 mb-5 bg-body rounded ">
            <div className="d-flex justify-content-evenly">
                <UserOutlined style={{ fontSize: 90 }} />
                <div className="d-block">
                    <h2>{props.firstName} {props.lastName}</h2>
                    <div className="d-flex justify-content-evenly">
                        <h4>{props.phoneNumber}</h4>
                        <h4>{props.email}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;