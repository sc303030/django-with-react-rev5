import React from "react";
import { Input, Menu } from "antd";
import "./AppLayout.scss";
import StroyList from "./StoryList";
import SuggestionList from "./SuggestionList";

function AppLayout({ children }) {
  return (
    <div className="app">
      <div className="header">
        <h1 className="page-title">Instrgram</h1>
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
      <div className="footer">Footer</div>
    </div>
  );
}

export default AppLayout;
