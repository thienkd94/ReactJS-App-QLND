import React from "react";
import { Route, NavLink } from "react-router-dom";

const menus = [
  {
    to: "/",
    exact: true,
    name: "Giới thiệu",
    icon: "fas fa-home"
  },
  {
    to: "/user-list",
    exact: false,
    name: "Danh sách người dùng",
    icon: "far fa-user"
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact, icon }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <NavLink
              to={to}
              exact={activeOnlyWhenExact}
            >
              <i className={icon}></i>
              {label}
            </NavLink>
          </li>
        );
      }}
    />
  );
};

const Navigation = () => {
  return (
    <div className="menu-left">
      <div className="logo">LOGO</div>
      <ul className="nav flex-column">{showMenu(menus)}</ul>
    </div>
  );
};

const showMenu = (menus) => {
  let result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
          icon={menu.icon}
        />
      );
    });
  }
  return result;
};

export default Navigation;
