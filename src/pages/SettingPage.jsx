import React, { useState, useEffect } from "react";
import { Radio, Form, Input } from "antd";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Message } from "../components";
import { useNavigate } from "react-router";
const SettingPage = () => {
  const navigate=useNavigate();
  const [data, setData] = useState({});
  const [alert, setAlert] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    const apiUrl = "http://backend.primexauto.com/api/postkey";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        setAlert({
          message: "Success",
          description: "API Key added successfully",
          type: "success",
        });
     
      setTimeout(() => {
      navigate('/');
    }, 2000);
      })
      .catch((error) => {
        setAlert({
          message: "Error",
          description: error.message,
          type: "error",
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    setAlert({
      message: "Error",
      description: "Form validation failed",
      type: "error",
    });
  };

  const handleManageKeysClick = () => {
    setData({
      api_key: "",
      api_sec: "",
      type: "spot",
    });
  };

  const handleNotification = () => {
    console.log("Setting notification");
    setShowNotification(true);
  };

  return (
    <div className="flex flex-col gap-4 overflow-hidden mt-4">
      <Card className="w-full bg-white text-black mt-10">
        <CardHeader
          variant="gradient"
          color="white"
          className="h-16 flex flex-col justify-center items-center rounded-full bg-gradient-to-r from-[#B4B8BB] via-[white] to-[#B4B8BB]"
        >
          <Typography color="black" className="text-lg sm:text-xl font-sans">
            Keys Management
          </Typography>
          <Typography
            color="black"
            className="text-sm sm:text-[16px] font-sans text-gray-600"
          >
            For trading please input your credentials
          </Typography>
        </CardHeader>
        <CardBody className="flex justify-center items-center">
          {Object.keys(data).length === 0 ? (
            <div className="flex justify-center items-center">
              <Button
                type="primary"
                onClick={handleManageKeysClick}
                className="text-white bg-black"
              >
                Manage Keys
              </Button>
            </div>
          ) : (
            <div className="mt-5 text-black w-full sm:w-1/2">
              {" "}
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: "100%",
                }}
                initialValues={{
                  Api_key: data.Api_key,
                  Secret_key: data.api_sec,
                  tradeType: data.tradeType,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label={<span className="text-black">Api_key</span>}
                  name="api_key"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Binance Api_key!",
                    },
                  ]}
                >
                  <Input className="p-2 border-black" />
                </Form.Item>

                <Form.Item
                  label={<span className="text-black">Secret_key</span>}
                  name="api_sec"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Binance Secret!",
                    },
                  ]}
                >
                  <Input className="p-2 border-black" />
                </Form.Item>

                <Form.Item
                  label={<span className="text-black">Trade Type</span>}
                  name="type"
                >
                  <Radio.Group className="text-black">
                    <Radio value="spot" className="text-black">
                      Spot
                    </Radio>
                    <Radio value="future" className="text-black">
                      Future
                    </Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item label={null}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
        </CardBody>
      </Card>
      {alert && (
        <Message
          message={alert.message}
          description={alert.description}
          type={alert.type}
          placement="topRight"
        />
      )}
    </div>
  );
};

export default SettingPage;
