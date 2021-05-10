import React from "react";
import { Card } from "antd";
function Post({ post }) {
  const { caption, location, photo } = post;
  return (
    <div>
      <Card cover={<img src={photo} alt={caption} />}>
        <Card.Meta title={location} description={caption} />
      </Card>
      {/* <img src={photo} alt={caption} style={{ width: "100px" }} />
      {caption}, {location} */}
    </div>
  );
}
export default Post;
