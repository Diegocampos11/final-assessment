import { CheckOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Formx() {
  const userData = useSelector((state) => state.userData.value);

  if (JSON.stringify(userData) === JSON.stringify({}))
    return <Navigate to="/" />;

  return (
    <div className="flex-center" style={{ height: "100%" }}>
      <CheckOutlined style={{ fontSize: "128px", color: "#08c" }} />
      <br />
      <h1>Success!</h1>
    </div>
  );
}
