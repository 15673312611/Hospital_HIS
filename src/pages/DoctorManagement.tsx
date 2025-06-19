import { useState, ChangeEvent } from 'react';
import { Card, Table, Button, Input, Space, Tag, Dropdown, Typography, Avatar, Row, Col, Statistic } from 'antd';
import { 
  PlusOutlined, 
  SearchOutlined, 
  FilterOutlined, 
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  DownOutlined,
  TeamOutlined,
  StarOutlined,
  ScheduleOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';

const { Title, Text } = Typography;

interface Doctor {
  key: string;
  id: string;
  name: string;
  gender: string;
  age: number;
  phone: string;
  department: string;
  title: string;
  specialty: string;
  status: string;
  patients: number;
  rating: number;
  avatar: string;
}

const DoctorManagement = () => {
  const [searchText, setSearchText] = useState('');

  // 处理搜索框变化
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // 筛选选项
  const filterOptions: MenuProps['items'] = [
    {
      key: '1',
      label: '全部医生',
    },
    {
      key: '2',
      label: '在岗医生',
    },
    {
      key: '3',
      label: '休假医生',
    },
    {
      key: '4',
      label: '主任医师',
    },
    {
      key: '5',
      label: '副主任医师',
    },
    {
      key: '6',
      label: '主治医师',
    },
  ];

  // 假数据 - 医生列表
  const doctors: Doctor[] = [
    {
      key: '1',
      id: 'D10001',
      name: '李医生',
      gender: '男',
      age: 45,
      phone: '13800138001',
      department: '内科',
      title: '主任医师',
      specialty: '心血管疾病',
      status: '在岗',
      patients: 156,
      rating: 4.9,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=1',
    },
    {
      key: '2',
      id: 'D10002',
      name: '王医生',
      gender: '女',
      age: 38,
      phone: '13800138002',
      department: '外科',
      title: '副主任医师',
      specialty: '普外科手术',
      status: '在岗',
      patients: 124,
      rating: 4.7,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=2',
    },
    {
      key: '3',
      id: 'D10003',
      name: '张医生',
      gender: '男',
      age: 42,
      phone: '13800138003',
      department: '骨科',
      title: '主任医师',
      specialty: '脊柱外科',
      status: '在岗',
      patients: 98,
      rating: 4.8,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=3',
    },
    {
      key: '4',
      id: 'D10004',
      name: '刘医生',
      gender: '女',
      age: 35,
      phone: '13800138004',
      department: '妇产科',
      title: '主治医师',
      specialty: '产科',
      status: '休假',
      patients: 86,
      rating: 4.6,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=4',
    },
    {
      key: '5',
      id: 'D10005',
      name: '陈医生',
      gender: '男',
      age: 50,
      phone: '13800138005',
      department: '眼科',
      title: '主任医师',
      specialty: '白内障手术',
      status: '在岗',
      patients: 112,
      rating: 4.9,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=5',
    },
  ];

  // 表格列定义
  const columns: ColumnsType<Doctor> = [
    {
      title: '医生',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <div className="flex items-center">
          <Avatar src={record.avatar} size={40} className="mr-3" />
          <div>
            <div className="font-medium">{record.name}</div>
            <div className="text-xs text-gray-500">{record.id}</div>
          </div>
        </div>
      ),
    },
    {
      title: '科室',
      dataIndex: 'department',
      key: 'department',
      filters: [
        { text: '内科', value: '内科' },
        { text: '外科', value: '外科' },
        { text: '骨科', value: '骨科' },
        { text: '妇产科', value: '妇产科' },
        { text: '眼科', value: '眼科' },
      ],
      onFilter: (value, record) => record.department === value,
    },
    {
      title: '职称',
      dataIndex: 'title',
      key: 'title',
      filters: [
        { text: '主任医师', value: '主任医师' },
        { text: '副主任医师', value: '副主任医师' },
        { text: '主治医师', value: '主治医师' },
      ],
      onFilter: (value, record) => record.title === value,
    },
    {
      title: '专长',
      dataIndex: 'specialty',
      key: 'specialty',
    },
    {
      title: '患者数',
      dataIndex: 'patients',
      key: 'patients',
      sorter: (a, b) => a.patients - b.patients,
    },
    {
      title: '评分',
      dataIndex: 'rating',
      key: 'rating',
      sorter: (a, b) => a.rating - b.rating,
      render: (rating) => (
        <div className="flex items-center">
          <StarOutlined className="text-yellow-500 mr-1" />
          <span>{rating}</span>
        </div>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = '';
        switch (status) {
          case '在岗':
            color = 'green';
            break;
          case '休假':
            color = 'orange';
            break;
          case '离职':
            color = 'red';
            break;
          default:
            color = 'default';
        }
        return <Tag color={color}>{status}</Tag>;
      },
      filters: [
        { text: '在岗', value: '在岗' },
        { text: '休假', value: '休假' },
        { text: '离职', value: '离职' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone',
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
      <Title level={2} className="text-gradient mb-6">医生管理</Title>
      
      {/* 统计卡片 */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="医生总数" 
              value={89} 
              prefix={<TeamOutlined className="text-emerald-600 mr-2" />}
              valueStyle={{ color: '#10b981' }}
            />
            <Text type="secondary" className="block mt-2">本月新增 <span className="text-emerald-600">+3</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="今日出诊" 
              value={68} 
              prefix={<ScheduleOutlined className="text-teal-600 mr-2" />}
              valueStyle={{ color: '#0d9488' }}
            />
            <Text type="secondary" className="block mt-2">出诊率 <span className="text-teal-600">92%</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="平均评分" 
              value={4.8} 
              prefix={<StarOutlined className="text-cyan-600 mr-2" />}
              valueStyle={{ color: '#0891b2' }}
            />
            <Text type="secondary" className="block mt-2">较上月 <span className="text-cyan-600">+0.2</span></Text>
          </Card>
        </Col>
      </Row>
      
      {/* 操作栏 */}
      <Card className="mb-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button type="primary" icon={<PlusOutlined />} className="btn-primary">
              新增医生
            </Button>
            <Dropdown menu={{ items: filterOptions }}>
              <Button icon={<FilterOutlined />}>
                筛选 <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <Input.Search
            placeholder="搜索医生姓名、ID或专长"
            allowClear
            enterButton={<SearchOutlined />}
            style={{ width: 300 }}
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </Card>
      
      {/* 医生表格 */}
      <Card>
        <Table
          columns={columns}
          dataSource={doctors}
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

export default DoctorManagement; 