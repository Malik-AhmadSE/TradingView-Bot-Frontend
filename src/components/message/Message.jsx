import React from "react";
import { RadiusUprightOutlined } from "@ant-design/icons";
import { Button, notification, Space } from "antd";

const Message = ({ message, description, type, placement = "topRight" }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api[type || "info"]({
      message,
      description,
      placement,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={openNotification}
          icon={<RadiusUprightOutlined />}
        >
          {placement}
        </Button>
      </Space>
    </>
  );
};

export default Message;
