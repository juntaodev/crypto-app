import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
import { useState, useEffect } from "react";

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

  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoTracker</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
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
              label: "Cryptos",
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
      )}
    </div>
  );
};

export default Navbar;
