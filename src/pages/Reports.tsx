import React from 'react'
import { Card, Typography } from 'antd'

const { Title } = Typography

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="card-shadow">
        <Title level={2}>报表分析</Title>
        <p>报表分析功能正在开发中...</p>
      </Card>
    </div>
  )
}

export default Reports 