import React from 'react'
import { Card, Typography } from 'antd'

const { Title } = Typography

const Notification: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="card-shadow">
        <Title level={2}>通知公告</Title>
        <p>通知公告功能正在开发中...</p>
      </Card>
    </div>
  )
}

export default Notification 