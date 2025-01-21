import React, { useState } from "react";
import { Radio, Form, Input } from "antd";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const SettingPage = () => {
  const [data, setData] = useState({});

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleManageKeysClick = () => {
    setData({
      Api_key: "",
      Secret_key: "",
      tradeType: "spot",
    });
  };

  return (
    <div className="flex overflow-hidden mt-4">
      <Card className="w-full bg-gradient-to-b from-[#00344C] via-[black] to-[#00405B] text-white mt-10">
        <CardHeader
          variant="gradient"
          color="white"
          className="h-16 place-items-center rounded-full"
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
          {" "}
          {Object.keys(data).length === 0 ? (
            <div className="flex justify-center items-center">
              <Button
                type="primary"
                onClick={handleManageKeysClick}
                className="text-white bg-black hover:bg-gray-900"
              >
                Manage Keys
              </Button>
            </div>
          ) : (
            <div className="mt-5 text-white w-full sm:w-1/2">
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
                  Secret_key: data.Secret_key,
                  tradeType: data.tradeType,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label={<span className="text-white">Api_key</span>}
                  name="Api_key"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Binance Api_key!",
                    },
                  ]}
                >
                  <Input className="p-2 border-white" />
                </Form.Item>

                <Form.Item
                  label={<span className="text-white">Secret_key</span>}
                  name="Secret_key"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Binance Secret!",
                    },
                  ]}
                >
                  <Input className="p-2 border-white" />
                </Form.Item>

                <Form.Item
                  label={<span className="text-white">Trade Type</span>}
                  name="tradeType"
                  initialValue="spot"
                >
                  <Radio.Group className="text-white">
                    <Radio value="spot" className="text-white">
                      Spot
                    </Radio>
                    <Radio value="future" className="text-white">
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
    </div>
  );
};

export default SettingPage;
