import React from 'react'
import { Card, Typography } from 'antd'

const { Title } = Typography

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="card-shadow">
        <Title level={2}>系统设置</Title>
        <p>系统设置功能正在开发中...</p>
      </Card>
    </div>
  )
}

export default Settings 