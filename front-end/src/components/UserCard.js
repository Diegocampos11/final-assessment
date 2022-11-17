import React from "react";
import { UserOutlined } from "@ant-design/icons";
const UserCard = ({user}) => {
    return (
        <div className="col-4 shadow p-3 mb-5 bg-body rounded">
            <div className="d-flex justify-content-evenly">
                <UserOutlined style={{ fontSize: 90 }} />
                <div className="d-block">
                    <h4>{user.firstName} {user.lastName}</h4>
                    <div className="d-flex justify-content-evenly">
                        <p>{user.phoneNumber}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;