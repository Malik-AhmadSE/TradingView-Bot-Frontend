import React from 'react';
import { Alert } from 'antd';

const Alerts = ({message,description,type}) => (
  <div className='w-full h-full flex justify-center items-center'>
    <Alert
      message={message}
      description={description}
      type={type}
      showIcon
      closable
    />
  </div>
);

export default Alerts;