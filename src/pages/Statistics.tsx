import * as React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const Statistics: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card>
        <Title level={2}>统计分析</Title>
        <Text type="secondary">此页面为统计分析模块，后续功能待开发。</Text>
      </Card>
    </div>
  );
};

export default Statistics; 