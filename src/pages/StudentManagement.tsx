import React from 'react'
import { Card, Typography } from 'antd'

const { Title } = Typography

const StudentManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="card-shadow">
        <Title level={2}>学员管理</Title>
        <p>学员管理功能正在开发中...</p>
      </Card>
    </div>
  )
}

export default StudentManagement 