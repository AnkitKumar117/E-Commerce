import React, { useState } from "react";
import { Menu } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";


import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const { SubMenu, Item } = Menu; //Also can use Menu.Submenu

const Header = () => {
  const [current, setCurrent] = useState("home");
  let dispatch = useDispatch();

  let {user} =useSelector((state)=> ({...state}))


  let history = useHistory();
  const handleClick = (e) => {
    //console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });

    history.push('/login');
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<MenuOutlined />}>
        <Link to="/">Home </Link>
      </Item>
     
      {!user && ( <div className="float-end"><Item
        key="register"
        icon={<UserAddOutlined />}
      >
        <Link to="/register">Register</Link>
      </Item></div>)}
      

      
      {!user && (<div className="float-end"><Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">Login</Link>
      </Item></div>)}
      

      {user && (<SubMenu key="SubMenu" icon={<SettingOutlined />} title={user.email && user.email.split('@')[0]} className="float-right">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
        <Item icon={<LogoutOutlined />} onClick={logout}>
          Logout
        </Item>
      </SubMenu>)}
    </Menu>
  );
};

export default Header;
