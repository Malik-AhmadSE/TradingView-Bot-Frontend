import React, { useState } from 'react';
import { Radio, Form, Input } from 'antd';
import { Button } from '@material-tailwind/react';

const SettingPage = () => {
  // Simulate data state (this would be replaced with real data from an API or store)
  const [data, setData] = useState({}); // Empty object to simulate no data

  // Handle form submission
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  // Handle form submission failure
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleManageKeysClick = () => {
    setData({
      Api_key: '',
      Secret_key: '',
      tradeType: 'spot',
    });
  };

  return (
    <div className="relative max-lg:row-start-1 col-span-4 row-span-2">
      <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            Keys Management
          </p>
          <p className="mt-2 text-sm font-medium tracking-tight text-gray-950 max-lg:text-center">
            For Trading Please Input your Credentials
          </p>
        </div>

        {/* If the data is empty, show the manage keys button */}
        {Object.keys(data).length === 0 ? (
          <div className="flex justify-center items-center h-96">
            <Button type="primary" onClick={handleManageKeysClick}>
              Manage Keys
            </Button>
          </div>
        ) : (
          
          <div className="mt-5">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
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
                label="Api_key"
                name="Api_key"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Binance Api_key!',
                  },
                ]}
              >
                <Input className="p-2" />
              </Form.Item>

              <Form.Item
                label="Secret_key"
                name="Secret_key"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Binance Secret!',
                  },
                ]}
              >
                <Input className="p-2" />
              </Form.Item>

              <Form.Item label="Trade Type" name="tradeType" initialValue="spot">
                <Radio.Group>
                  <Radio value="spot">Spot</Radio>
                  <Radio value="future">Future</Radio>
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
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem] lg:rounded-br-[2rem]"></div>
    </div>
  );
};

export default SettingPage;
