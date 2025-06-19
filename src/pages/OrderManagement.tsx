import React from 'react'
import { Card, Typography } from 'antd'

const { Title } = Typography

const OrderManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="card-shadow">
        <Title level={2}>订单管理</Title>
        <p>订单管理功能正在开发中...</p>
      </Card>
    </div>
  )
}

export default OrderManagement 