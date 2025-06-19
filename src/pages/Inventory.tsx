import * as React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const Inventory: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card>
        <Title level={2}>库存管理</Title>
        <Text type="secondary">此页面为库存管理模块，后续功能待开发。</Text>
      </Card>
    </div>
  );
};

export default Inventory; 