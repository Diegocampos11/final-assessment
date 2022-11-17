import { CloseCircleOutlined } from '@ant-design/icons';

export default function Error() {
  return (
    <div className="flex-center h-100">
      <CloseCircleOutlined className="site-result-demo-error-icon" />
      <br />
      <br />
      <h1>Sorry something went wrong!</h1>
    </div>
  );
}
