import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const Breadcrumb2 = ({ items, className }) => (
  <Breadcrumb className={className}>
    <Breadcrumb.Item>
      <Link to={"/blog"}>
        <span className="text-gray-400 dark:text-gray-500 font-display">بلاگ</span>
      </Link>
    </Breadcrumb.Item>
    {items.map((item) => {
      return (
        <Breadcrumb.Item>
          <Link to={item.href}>
            <span className="text-gray-400 dark:text-gray-500 font-display">{item.label}</span>
          </Link>
        </Breadcrumb.Item>
      );
    })}
  </Breadcrumb>
);

export default Breadcrumb2;
