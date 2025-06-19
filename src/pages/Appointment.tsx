import { useState, ChangeEvent } from 'react';
import { Card, Table, Button, Input, Space, Tag, Dropdown, Typography, Avatar, Row, Col, Statistic, DatePicker, Select, Badge } from 'antd';
import { 
  PlusOutlined, 
  SearchOutlined, 
  FilterOutlined, 
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  DownOutlined,
  ScheduleOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

interface Appointment {
  key: string;
  id: string;
  patientName: string;
  patientId: string;
  patientAvatar: string;
  doctorName: string;
  doctorId: string;
  doctorAvatar: string;
  department: string;
  date: string;
  time: string;
  status: string;
  type: string;
  notes: string;
}

const AppointmentManagement = () => {
  const [searchText, setSearchText] = useState('');

  // 处理搜索框变化
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // 筛选选项
  const filterOptions: MenuProps['items'] = [
    {
      key: '1',
      label: '全部预约',
    },
    {
      key: '2',
      label: '今日预约',
    },
    {
      key: '3',
      label: '明日预约',
    },
    {
      key: '4',
      label: '已确认预约',
    },
    {
      key: '5',
      label: '待确认预约',
    },
    {
      key: '6',
      label: '已取消预约',
    },
  ];

  // 假数据 - 预约列表
  const appointments: Appointment[] = [
    {
      key: '1',
      id: 'A2023001',
      patientName: '张三',
      patientId: 'P2023001',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=1',
      doctorName: '李医生',
      doctorId: 'D10001',
      doctorAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=10',
      department: '内科',
      date: '2023-07-20',
      time: '09:30-10:00',
      status: '已确认',
      type: '复诊',
      notes: '血压复查',
    },
    {
      key: '2',
      id: 'A2023002',
      patientName: '李四',
      patientId: 'P2023002',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=2',
      doctorName: '王医生',
      doctorId: 'D10002',
      doctorAvatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=20',
      department: '外科',
      date: '2023-07-20',
      time: '10:15-10:45',
      status: '待确认',
      type: '初诊',
      notes: '腹部疼痛',
    },
    {
      key: '3',
      id: 'A2023003',
      patientName: '王五',
      patientId: 'P2023003',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=3',
      doctorName: '张医生',
      doctorId: 'D10003',
      doctorAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=30',
      department: '骨科',
      date: '2023-07-20',
      time: '11:00-11:30',
      status: '已确认',
      type: '复诊',
      notes: '膝关节复查',
    },
    {
      key: '4',
      id: 'A2023004',
      patientName: '赵六',
      patientId: 'P2023004',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=4',
      doctorName: '刘医生',
      doctorId: 'D10004',
      doctorAvatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=40',
      department: '眼科',
      date: '2023-07-20',
      time: '14:30-15:00',
      status: '已取消',
      type: '初诊',
      notes: '视力检查',
    },
    {
      key: '5',
      id: 'A2023005',
      patientName: '钱七',
      patientId: 'P2023005',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=5',
      doctorName: '陈医生',
      doctorId: 'D10005',
      doctorAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=50',
      department: '口腔科',
      date: '2023-07-21',
      time: '09:00-09:30',
      status: '已确认',
      type: '初诊',
      notes: '牙齿疼痛',
    },
  ];

  // 表格列定义
  const columns: ColumnsType<Appointment> = [
    {
      title: '预约ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: '患者信息',
      dataIndex: 'patientName',
      key: 'patientName',
      render: (_, record) => (
        <div className="flex items-center">
          <Avatar src={record.patientAvatar} size={40} className="mr-3" />
          <div>
            <div className="font-medium">{record.patientName}</div>
            <div className="text-xs text-gray-500">{record.patientId}</div>
          </div>
        </div>
      ),
    },
    {
      title: '医生信息',
      dataIndex: 'doctorName',
      key: 'doctorName',
      render: (_, record) => (
        <div className="flex items-center">
          <Avatar src={record.doctorAvatar} size={40} className="mr-3" />
          <div>
            <div className="font-medium">{record.doctorName}</div>
            <div className="text-xs text-gray-500">{record.department}</div>
          </div>
        </div>
      ),
      filters: [
        { text: '内科', value: '内科' },
        { text: '外科', value: '外科' },
        { text: '骨科', value: '骨科' },
        { text: '眼科', value: '眼科' },
        { text: '口腔科', value: '口腔科' },
      ],
      onFilter: (value, record) => record.department === value,
    },
    {
      title: '预约日期',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date.localeCompare(b.date),
    },
    {
      title: '预约时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      filters: [
        { text: '初诊', value: '初诊' },
        { text: '复诊', value: '复诊' },
      ],
      onFilter: (value, record) => record.type === value,
      render: (type) => (
        <Badge 
          color={type === '初诊' ? 'blue' : 'green'} 
          text={type} 
        />
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = '';
        let icon = null;
        
        switch (status) {
          case '已确认':
            color = 'success';
            icon = <CheckCircleOutlined />;
            break;
          case '待确认':
            color = 'warning';
            icon = <ClockCircleOutlined />;
            break;
          case '已取消':
            color = 'error';
            icon = <CloseCircleOutlined />;
            break;
          default:
            color = 'default';
        }
        
        return (
          <Tag color={color} icon={icon}>
            {status}
          </Tag>
        );
      },
      filters: [
        { text: '已确认', value: '已确认' },
        { text: '待确认', value: '待确认' },
        { text: '已取消', value: '已取消' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: '备注',
      dataIndex: 'notes',
      key: 'notes',
      ellipsis: true,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="text" icon={<EyeOutlined />} />
          <Button type="text" icon={<EditOutlined />} />
          <Button type="text" icon={<DeleteOutlined />} danger />
        </Space>
      ),
    },
  ];

  return (
    <div className="animate-fade-in">
      <Title level={2} className="text-gradient mb-6">预约管理</Title>
      
      {/* 统计卡片 */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="今日预约" 
              value={24} 
              prefix={<CalendarOutlined className="text-emerald-600 mr-2" />}
              valueStyle={{ color: '#10b981' }}
            />
            <Text type="secondary" className="block mt-2">已完成 <span className="text-emerald-600">12</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="明日预约" 
              value={18} 
              prefix={<ScheduleOutlined className="text-teal-600 mr-2" />}
              valueStyle={{ color: '#0d9488' }}
            />
            <Text type="secondary" className="block mt-2">待确认 <span className="text-teal-600">5</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="本周预约" 
              value={86} 
              prefix={<ClockCircleOutlined className="text-cyan-600 mr-2" />}
              valueStyle={{ color: '#0891b2' }}
            />
            <Text type="secondary" className="block mt-2">较上周 <span className="text-cyan-600">+12%</span></Text>
          </Card>
        </Col>
      </Row>
      
      {/* 操作栏 */}
      <Card className="mb-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button type="primary" icon={<PlusOutlined />} className="btn-primary">
              新增预约
            </Button>
            <Dropdown menu={{ items: filterOptions }}>
              <Button icon={<FilterOutlined />}>
                筛选 <DownOutlined />
              </Button>
            </Dropdown>
            <RangePicker placeholder={['开始日期', '结束日期']} className="w-64" />
            <Select defaultValue="all" style={{ width: 120 }}>
              <Option value="all">全部科室</Option>
              <Option value="internal">内科</Option>
              <Option value="surgery">外科</Option>
              <Option value="pediatrics">儿科</Option>
              <Option value="gynecology">妇产科</Option>
              <Option value="ophthalmology">眼科</Option>
            </Select>
          </div>
          <Input.Search
            placeholder="搜索预约ID或患者姓名"
            allowClear
            enterButton={<SearchOutlined />}
            style={{ width: 300 }}
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </Card>
      
      {/* 预约表格 */}
      <Card>
        <Table
          columns={columns}
          dataSource={appointments}
          rowKey="key"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条记录`,
          }}
        />
      </Card>
    </div>
  );
};

export default AppointmentManagement; 