import { useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MedicineBoxOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  ScheduleOutlined,
  FileTextOutlined,
  SettingOutlined,
  HeartOutlined,
  ExperimentOutlined,
  DollarOutlined,
  BarChartOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons'

const { Sider } = Layout

interface MenuItem {
  key: string
  icon: JSX.Element
  label: string
  path: string
  badge?: string
}

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  // 定义菜单项
  const menuItems: MenuItem[] = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: '仪表盘',
      path: '/dashboard',
    },
    {
      key: '/patient-management',
      icon: <TeamOutlined />,
      label: '患者管理',
      path: '/patient-management',
    },
    {
      key: '/doctor-management',
      icon: <UserOutlined />,
      label: '医生管理',
      path: '/doctor-management',
    },
    {
      key: '/appointment',
      icon: <ScheduleOutlined />,
      label: '挂号预约',
      path: '/appointment',
    },
    {
      key: '/medical-record',
      icon: <FileTextOutlined />,
      label: '电子病历',
      path: '/medical-record',
    },
    {
      key: '/pharmacy',
      icon: <MedicineBoxOutlined />,
      label: '药房管理',
      path: '/pharmacy',
    },
    {
      key: '/examination',
      icon: <ExperimentOutlined />,
      label: '检验检查',
      path: '/examination',
    },
    {
      key: '/ward-management',
      icon: <HeartOutlined />,
      label: '病房管理',
      path: '/ward-management',
    },
    {
      key: '/billing',
      icon: <DollarOutlined />,
      label: '收费管理',
      path: '/billing',
    },
    {
      key: '/inventory',
      icon: <SafetyCertificateOutlined />,
      label: '物资库存',
      path: '/inventory',
    },
    {
      key: '/statistics',
      icon: <BarChartOutlined />,
      label: '统计分析',
      path: '/statistics',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: '系统设置',
      path: '/settings',
    },
  ]

  return (
    <Sider 
      trigger={null} 
      collapsible 
      collapsed={collapsed}
      className="sidebar-medical h-screen overflow-auto fixed left-0 top-0 bottom-0"
      width={220}
    >
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <MedicineBoxOutlined className="text-2xl text-white mr-2" />
          {!collapsed && <span className="text-white font-bold text-lg">医院信息系统</span>}
        </div>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapsed}
          className="text-white hover:text-gray-200"
        />
      </div>
      
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        className="bg-transparent border-r-0 mt-4"
        items={menuItems.map(item => ({
          key: item.key,
          icon: item.icon,
          label: <Link to={item.path}>{item.label}</Link>,
        }))}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-gray-300 text-xs">
        {!collapsed && <div>医院HIS系统 v1.0</div>}
      </div>
    </Sider>
  )
}

export default Sidebar 