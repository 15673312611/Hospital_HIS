import React from 'react'
import { Card, Typography } from 'antd'

const { Title } = Typography

const GradeManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="card-shadow">
        <Title level={2}>成绩管理</Title>
        <p>成绩管理功能正在开发中...</p>
      </Card>
    </div>
  )
}

export default GradeManagement 