import React from 'react'
import { Card, Typography } from 'antd'

const { Title } = Typography

const ProductManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="card-shadow">
        <Title level={2}>产品管理</Title>
        <p>产品管理功能正在开发中...</p>
      </Card>
    </div>
  )
}

export default ProductManagement 