import React from "react";
import { Input, Menu } from "antd";
import "./AppLayout.scss";
import StroyList from "./StoryList";
import SuggestionList from "./SuggestionList";
import LogoImage from "assets/instr_logo.png";

function AppLayout({ children }) {
  return (
    <div className="app">
      <div className="header">
        <h1 className="page-title">
          <img src={LogoImage} alt="logo" style={{ width: "100px" }} />
        </h1>
        <div className="search">
          <Input.Search placeholder="검색어를 입력하세요" />
        </div>
        <div className="topnav">
          <Menu mode="horizontal">
            <Menu.Item>메뉴1</Menu.Item>
            <Menu.Item>메뉴2</Menu.Item>
            <Menu.Item>메뉴3</Menu.Item>
          </Menu>
        </div>
      </div>
      <div className="contents">{children}</div>
      <div className="sidebar">
        <StroyList style={{ marginBottom: "1rem" }} />
        <SuggestionList style={{ marginBottom: "1rem" }} />
      </div>
      <div className="footer">&copy; 2020. Django </div>
    </div>
  );
}

export default AppLayout;
