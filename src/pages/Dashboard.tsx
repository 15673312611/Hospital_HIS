import * as React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col, Card, Statistic, Table, Tag, Progress, Avatar, List, Badge, Button, Space, Divider, Typography, Calendar, Spin } from 'antd'
import { 
  UserOutlined, 
  BookOutlined, 
  TrophyOutlined, 
  ClockCircleOutlined,
  RiseOutlined,
  FallOutlined,
  TeamOutlined,
  CalendarOutlined,
  StarOutlined,
  FireOutlined,
  CrownOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined as ClockIcon,
  DollarOutlined,
  BarChartOutlined,
  RocketOutlined,
  EyeOutlined,
  HeartOutlined,
  MedicineBoxOutlined,
  AlertOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  FileTextOutlined,
  ExperimentOutlined
} from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import { Line, Pie, Bar } from '@ant-design/plots'

const { Title, Text } = Typography

// 统计卡片数据
const stats = [
  {
    title: '今日门诊',
    value: 328,
    icon: <UserOutlined />,
    color: '#10b981',
    trend: '+8%',
    trendUp: true,
    suffix: '人',
  },
  {
    title: '住院人数',
    value: 68,
    icon: <HeartOutlined />,
    color: '#0d9488',
    trend: '+2',
    trendUp: true,
    suffix: '人',
  },
  {
    title: '药房发药',
    value: 142,
    icon: <MedicineBoxOutlined />,
    color: '#0891b2',
    trend: '-5%',
    trendUp: false,
    suffix: '单',
  },
  {
    title: '今日收入',
    value: 128900,
    icon: <DollarOutlined />,
    color: '#16a34a',
    trend: '+12%',
    trendUp: true,
    suffix: '元',
  },
]

// 近期动态
const activities = [
  {
    title: '新患者挂号',
    desc: '王小明 刚刚完成挂号',
    time: '2分钟前',
    icon: <UserOutlined className="text-emerald-500" />,
  },
  {
    title: '药品库存预警',
    desc: '阿莫西林胶囊 库存低于10盒',
    time: '10分钟前',
    icon: <AlertOutlined className="text-amber-500" />,
  },
  {
    title: '患者出院',
    desc: '李四 已办理出院手续',
    time: '30分钟前',
    icon: <CheckCircleOutlined className="text-teal-500" />,
  },
  {
    title: '医嘱待审核',
    desc: '有3条新医嘱待审核',
    time: '1小时前',
    icon: <FileTextOutlined className="text-cyan-500" />,
  },
]

// 重点提醒
const reminders = [
  {
    title: '药品即将过期',
    desc: '布洛芬缓释胶囊 还有15天到期',
    tag: <Tag color="red" style={{ fontWeight: 600, fontSize: 13 }}>紧急</Tag>,
  },
  {
    title: '待分配床位',
    desc: '2名新入院患者待分配床位',
    tag: <Tag color="orange" style={{ fontWeight: 600, fontSize: 13 }}>提醒</Tag>,
  },
  {
    title: '检验报告待签发',
    desc: '5份检验报告待医生签发',
    tag: <Tag color="blue" style={{ fontWeight: 600, fontSize: 13 }}>处理中</Tag>,
  },
]

// 简单的业务趋势数据（占位）
const trendData = [
  { label: '门诊', percent: 78, color: '#10b981' },
  { label: '住院', percent: 62, color: '#0d9488' },
  { label: '药房', percent: 88, color: '#0891b2' },
  { label: '检验', percent: 54, color: '#f59e42' },
]

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)

  // 热门课程数据
  const popularCourses = [
    {
      id: 1,
      title: '人工智能基础',
      instructor: '张教授',
      students: 234,
      rating: 4.8,
      price: 299,
      category: '计算机科学',
      progress: 85,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=80&h=80&fit=crop&crop=center',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: '数据科学实战',
      instructor: '李博士',
      students: 189,
      rating: 4.9,
      price: 399,
      category: '数据分析',
      progress: 92,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Web全栈开发',
      instructor: '王老师',
      students: 156,
      rating: 4.7,
      price: 199,
      category: '编程开发',
      progress: 78,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=80&h=80&fit=crop&crop=center',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: '商业数据分析',
      instructor: '陈教授',
      students: 98,
      rating: 4.6,
      price: 249,
      category: '商业分析',
      progress: 65,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ]

  // 最近活动
  const recentActivities = [
    {
      id: 1,
      type: 'enrollment',
      title: '新学员注册',
      description: '张三 注册了《人工智能基础》课程',
      time: '2分钟前',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      status: 'success',
      color: '#10b981'
    },
    {
      id: 2,
      type: 'completion',
      title: '课程完成',
      description: '李四 完成了《Web全栈开发》课程',
      time: '15分钟前',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      status: 'success',
      color: '#3b82f6'
    },
    {
      id: 3,
      type: 'achievement',
      title: '获得成就',
      description: '王五 获得了"学习达人"徽章',
      time: '1小时前',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      status: 'warning',
      color: '#f59e0b'
    },
    {
      id: 4,
      type: 'assignment',
      title: '作业提交',
      description: '赵六 提交了《数据科学》作业',
      time: '2小时前',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      status: 'info',
      color: '#8b5cf6'
    }
  ]

  // 学习进度数据
  const learningProgress = [
    { subject: '数学', progress: 85, color: '#3b82f6', gradient: 'from-blue-500 to-blue-600' },
    { subject: '英语', progress: 72, color: '#10b981', gradient: 'from-green-500 to-green-600' },
    { subject: '物理', progress: 68, color: '#f59e0b', gradient: 'from-yellow-500 to-orange-500' },
    { subject: '化学', progress: 91, color: '#8b5cf6', gradient: 'from-purple-500 to-purple-600' },
    { subject: '生物', progress: 76, color: '#ec4899', gradient: 'from-pink-500 to-rose-500' }
  ]

  // 排行榜数据
  const leaderboard = [
    { rank: 1, name: '张三', score: 98, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face', badge: '🏆', gradient: 'from-yellow-400 to-orange-500' },
    { rank: 2, name: '李四', score: 95, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face', badge: '🥈', gradient: 'from-gray-300 to-gray-400' },
    { rank: 3, name: '王五', score: 92, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face', badge: '🥉', gradient: 'from-orange-300 to-orange-400' },
    { rank: 4, name: '赵六', score: 89, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face', badge: '⭐', gradient: 'from-blue-300 to-blue-400' },
    { rank: 5, name: '钱七', score: 87, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face', badge: '⭐', gradient: 'from-green-300 to-green-400' }
  ]

  // 课程分类统计
  const courseCategories = [
    { category: '计算机科学', count: 45, percentage: 28.8, color: '#3b82f6' },
    { category: '数学', count: 32, percentage: 20.5, color: '#10b981' },
    { category: '语言学习', count: 28, percentage: 17.9, color: '#f59e0b' },
    { category: '艺术设计', count: 25, percentage: 16.0, color: '#8b5cf6' },
    { category: '商业管理', count: 26, percentage: 16.7, color: '#ec4899' }
  ]

  // 假数据 - 患者访问趋势
  const visitTrendData = [
    { date: '2023-01', 门诊量: 350, 住院量: 120 },
    { date: '2023-02', 门诊量: 420, 住院量: 140 },
    { date: '2023-03', 门诊量: 380, 住院量: 130 },
    { date: '2023-04', 门诊量: 450, 住院量: 150 },
    { date: '2023-05', 门诊量: 520, 住院量: 170 },
    { date: '2023-06', 门诊量: 480, 住院量: 160 },
    { date: '2023-07', 门诊量: 600, 住院量: 190 },
  ]

  // 假数据 - 科室就诊分布
  const departmentData = [
    { type: '内科', value: 27 },
    { type: '外科', value: 25 },
    { type: '儿科', value: 18 },
    { type: '妇产科', value: 15 },
    { type: '眼科', value: 10 },
    { type: '口腔科', value: 5 },
  ]

  // 假数据 - 各科室医生数量
  const doctorCountData = [
    { department: '内科', count: 24 },
    { department: '外科', count: 18 },
    { department: '儿科', count: 12 },
    { department: '妇产科', count: 15 },
    { department: '眼科', count: 8 },
    { department: '口腔科', count: 10 },
    { department: '皮肤科', count: 6 },
    { department: '骨科', count: 14 },
  ]

  // 假数据 - 最近预约
  interface AppointmentData {
    key: string
    patient: string
    department: string
    doctor: string
    time: string
    status: string
  }

  const appointmentData: AppointmentData[] = [
    {
      key: '1',
      patient: '张三',
      department: '内科',
      doctor: '李医生',
      time: '2023-07-20 09:30',
      status: '已确认',
    },
    {
      key: '2',
      patient: '李四',
      department: '外科',
      doctor: '王医生',
      time: '2023-07-20 10:15',
      status: '待确认',
    },
    {
      key: '3',
      patient: '王五',
      department: '儿科',
      doctor: '赵医生',
      time: '2023-07-20 11:00',
      status: '已确认',
    },
    {
      key: '4',
      patient: '赵六',
      department: '眼科',
      doctor: '钱医生',
      time: '2023-07-20 14:30',
      status: '已取消',
    },
    {
      key: '5',
      patient: '孙七',
      department: '口腔科',
      doctor: '周医生',
      time: '2023-07-20 15:45',
      status: '已确认',
    },
  ]

  const columns: ColumnsType<AppointmentData> = [
    {
      title: '患者',
      dataIndex: 'patient',
      key: 'patient',
    },
    {
      title: '科室',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '医生',
      dataIndex: 'doctor',
      key: 'doctor',
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = ''
        let icon = null
        
        switch (status) {
          case '已确认':
            color = 'success'
            icon = <CheckCircleOutlined />
            break
          case '待确认':
            color = 'warning'
            icon = <ClockCircleOutlined />
            break
          case '已取消':
            color = 'error'
            icon = <AlertOutlined />
            break
          default:
            color = 'default'
        }
        
        return (
          <Tag color={color} icon={icon}>
            {status}
          </Tag>
        )
      },
    },
  ]

  // 假数据 - 床位使用情况
  const bedUsageData = [
    { type: '已使用', value: 68 },
    { type: '空闲', value: 32 },
  ]

  useEffect(() => {
    // 模拟数据加载
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  // 患者访问趋势配置
  const visitTrendConfig = {
    data: visitTrendData,
    xField: 'date',
    yField: ['门诊量', '住院量'],
    point: {
      size: 5,
      shape: 'diamond',
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1000,
      },
    },
    color: ['#10b981', '#0d9488'],
  }
  
  // 科室就诊分布配置
  const departmentConfig = {
    data: departmentData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.6,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    color: ['#10b981', '#0d9488', '#14b8a6', '#0f766e', '#0891b2', '#06b6d4'],
    legend: {
      layout: 'horizontal',
      position: 'bottom',
    },
    animation: {
      appear: {
        animation: 'wave',
        duration: 1000,
      },
    },
  }
  
  // 各科室医生数量配置
  const doctorCountConfig = {
    data: doctorCountData,
    xField: 'count',
    yField: 'department',
    seriesField: 'department',
    color: ({ department }) => {
      const colors = ['#10b981', '#0d9488', '#14b8a6', '#0f766e', '#0891b2', '#06b6d4', '#0ea5e9', '#0284c7']
      const index = doctorCountData.findIndex(item => item.department === department)
      return colors[index % colors.length]
    },
    legend: false,
    animation: {
      appear: {
        animation: 'grow-in-x',
        duration: 1000,
      },
    },
  }
  
  // 床位使用情况配置
  const bedUsageConfig = {
    data: bedUsageData,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.7,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}%',
      style: {
        fontSize: 18,
        textAlign: 'center',
      },
    },
    color: ['#10b981', '#e2e8f0'],
    statistic: {
      title: {
        style: {
          color: '#0f766e',
          fontSize: '16px',
        },
        content: '床位使用率',
      },
      content: {
        style: {
          color: '#10b981',
          fontSize: '24px',
          fontWeight: 'bold',
        },
        formatter: () => '68%',
      },
    },
    animation: {
      appear: {
        animation: 'fade-in',
        duration: 1000,
      },
    },
  }
  
  // 日历单元格自定义渲染
  const dateCellRender = (date: any) => {
    // 这里可以根据日期返回不同的内容
    const day = date.date()
    if (day % 5 === 0) {
      return (
        <Badge color="#10b981" text={`预约 ${day}`} />
      )
    }
    return null
  }

  const getActivityIcon = (type: string) => {
    const icons = {
      enrollment: <UserOutlined style={{ color: '#10b981' }} />,
      completion: <CheckCircleOutlined style={{ color: '#3b82f6' }} />,
      achievement: <TrophyOutlined style={{ color: '#f59e0b' }} />,
      assignment: <BookOutlined style={{ color: '#8b5cf6' }} />
    }
    return icons[type as keyof typeof icons] || <ClockIcon />
  }

  const getStatusColor = (status: string) => {
    const colors = {
      success: 'green',
      warning: 'orange',
      info: 'blue',
      error: 'red'
    }
    return colors[status as keyof typeof colors] || 'default'
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <Title level={2} className="text-gradient mb-6">医院信息系统仪表盘</Title>
      {/* 统计卡片 */}
      <Row gutter={[24, 24]} className="mb-6">
        {stats.map((stat, idx) => (
          <Col xs={24} sm={12} lg={6} key={idx}>
            <Card className="stat-card shadow-md rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-600 text-sm font-medium mb-1">{stat.title}</div>
                  <div className="flex items-end">
                    <span style={{ color: stat.color, fontWeight: 700, fontSize: 28 }}>{stat.value}{stat.suffix}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    {stat.trendUp ? (
                      <ArrowUpOutlined className="text-green-500 mr-1" />
                    ) : (
                      <ArrowDownOutlined className="text-red-500 mr-1" />
                    )}
                    <span className={stat.trendUp ? 'text-green-500' : 'text-red-500'}>{stat.trend}</span>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg" style={{ background: stat.color }}>
                  {stat.icon}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[24, 24]}>
        {/* 业务趋势 */}
        <Col xs={24} lg={16}>
          <Card title="主要业务趋势" className="mb-6 rounded-xl shadow-sm">
            <Row gutter={16}>
              {trendData.map((item, idx) => (
                <Col xs={12} md={6} key={idx}>
                  <Progress
                    type="circle"
                    percent={item.percent}
                    strokeColor={item.color}
                    width={80}
                    format={p => `${p}%`}
                  />
                  <div className="text-center mt-2 text-gray-700 font-medium">{item.label}</div>
                </Col>
              ))}
            </Row>
            <Divider />
            <div className="text-gray-400 text-center">[此处可集成Echarts/AntV等更丰富的业务趋势图表]</div>
          </Card>

          {/* 近期动态 */}
          <Card title="近期动态" className="rounded-xl shadow-sm">
            <List
              itemLayout="horizontal"
              dataSource={activities}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar style={{ background: '#10b981' }}>{item.icon}</Avatar>}
                    title={<span>{item.title}</span>}
                    description={<span>{item.desc} <span className="text-gray-400 ml-2">{item.time}</span></span>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* 重点提醒 */}
        <Col xs={24} lg={8}>
          <Card title="重点提醒" className="rounded-xl shadow-sm mb-6">
            <List
              dataSource={reminders}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={<span>{item.title} {item.tag}</span>}
                    description={item.desc}
                  />
                </List.Item>
              )}
            />
          </Card>

          <Card title="今日日历" className="rounded-xl shadow-sm">
            <div className="flex items-center justify-center flex-col py-4">
              <CalendarOutlined className="text-4xl text-emerald-500 mb-2" />
              <Text strong>{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard 