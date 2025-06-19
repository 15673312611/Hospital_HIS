import * as React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const Billing: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card>
        <Title level={2}>收费管理</Title>
        <Text type="secondary">此页面为收费管理模块，后续功能待开发。</Text>
      </Card>
    </div>
  );
};

export default Billing; 