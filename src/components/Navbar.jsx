import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  let navigate = useNavigate();

  const selectedKey = window.location.pathname;

  const highlight = () => {
    if (selectedKey === "/") {
      return ["1"];
    } else if (selectedKey === "/cryptocurrencies") {
      return ["2"];
    } else if (selectedKey === "/news") {
      return ["3"];
    }
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CoinMarket</Link>
        </Typography.Title>
        {/* <button className="menu-control-container"></button> */}
      </div>

      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        selectedKeys={highlight()}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Home",
            onClick: () => {
              navigate("/");
            },
          },
          {
            key: "2",
            icon: <MoneyCollectOutlined />,
            label: "Cryptocurrencies",
            onClick: () => {
              navigate("/cryptocurrencies");
            },
          },
          {
            key: "3",
            icon: <BulbOutlined />,
            label: "News",
            onClick: () => {
              navigate("/news");
            },
          },
        ]}
      />
    </div>
  );
};

export default Navbar;
