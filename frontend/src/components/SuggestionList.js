import React from "react";
import { Card } from "antd";
import "./SuggestionList.scss";

export default function SuggestionList({ style }) {
  return (
    <div style={style}>
      <Card title="Suggestion for you" size="small">
        Stories from people you follow will show up here.
      </Card>
    </div>
  );
}
