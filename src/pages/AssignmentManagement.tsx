import React from 'react'
import { Card, Typography } from 'antd'

const { Title } = Typography

const AssignmentManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="card-shadow">
        <Title level={2}>作业管理</Title>
        <p>作业管理功能正在开发中...</p>
      </Card>
    </div>
  )
}

export default AssignmentManagement 