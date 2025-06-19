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
  UserOutlined,
  HeartOutlined,
  MedicineBoxOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';

const { Title, Text } = Typography;

interface Patient {
  key: string;
  id: string;
  name: string;
  gender: string;
  age: number;
  phone: string;
  address: string;
  medicalId: string;
  status: string;
  lastVisit: string;
  doctor: string;
  department: string;
}

const PatientManagement = () => {
  const [searchText, setSearchText] = useState('');

  // 筛选选项
  const filterOptions: MenuProps['items'] = [
    {
      key: '1',
      label: '全部患者',
    },
    {
      key: '2',
      label: '住院患者',
    },
    {
      key: '3',
      label: '门诊患者',
    },
    {
      key: '4',
      label: '今日新增',
    },
  ];

  // 假数据
  const patients: Patient[] = [
    {
      key: '1',
      id: 'P2023001',
      name: '张三',
      gender: '男',
      age: 45,
      phone: '13800138000',
      address: '北京市海淀区中关村大街1号',
      medicalId: 'MID10001',
      status: '住院',
      lastVisit: '2023-07-15',
      doctor: '李医生',
      department: '内科',
    },
    {
      key: '2',
      id: 'P2023002',
      name: '李四',
      gender: '女',
      age: 32,
      phone: '13900139000',
      address: '北京市朝阳区建国路2号',
      medicalId: 'MID10002',
      status: '门诊',
      lastVisit: '2023-07-18',
      doctor: '王医生',
      department: '外科',
    },
    {
      key: '3',
      id: 'P2023003',
      name: '王五',
      gender: '男',
      age: 28,
      phone: '13700137000',
      address: '北京市西城区西长安街3号',
      medicalId: 'MID10003',
      status: '出院',
      lastVisit: '2023-07-10',
      doctor: '张医生',
      department: '骨科',
    },
    {
      key: '4',
      id: 'P2023004',
      name: '赵六',
      gender: '女',
      age: 65,
      phone: '13600136000',
      address: '北京市东城区东长安街4号',
      medicalId: 'MID10004',
      status: '住院',
      lastVisit: '2023-07-16',
      doctor: '刘医生',
      department: '心内科',
    },
    {
      key: '5',
      id: 'P2023005',
      name: '钱七',
      gender: '男',
      age: 50,
      phone: '13500135000',
      address: '北京市丰台区丰台路5号',
      medicalId: 'MID10005',
      status: '门诊',
      lastVisit: '2023-07-19',
      doctor: '陈医生',
      department: '眼科',
    },
  ];

  // 表格列定义
  const columns: ColumnsType<Patient> = [
    {
      title: '患者ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        { text: '男', value: '男' },
        { text: '女', value: '女' },
      ],
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '科室',
      dataIndex: 'department',
      key: 'department',
      filters: [
        { text: '内科', value: '内科' },
        { text: '外科', value: '外科' },
        { text: '骨科', value: '骨科' },
        { text: '心内科', value: '心内科' },
        { text: '眼科', value: '眼科' },
      ],
      onFilter: (value, record) => record.department === value,
    },
    {
      title: '主治医生',
      dataIndex: 'doctor',
      key: 'doctor',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = '';
        switch (status) {
          case '住院':
            color = 'blue';
            break;
          case '门诊':
            color = 'green';
            break;
          case '出院':
            color = 'gray';
            break;
          default:
            color = 'default';
        }
        return <Tag color={color}>{status}</Tag>;
      },
      filters: [
        { text: '住院', value: '住院' },
        { text: '门诊', value: '门诊' },
        { text: '出院', value: '出院' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: '最近就诊',
      dataIndex: 'lastVisit',
      key: 'lastVisit',
      sorter: (a, b) => a.lastVisit.localeCompare(b.lastVisit),
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

  // 处理搜索框变化
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="animate-fade-in">
      <Title level={2} className="text-gradient mb-6">患者管理</Title>
      
      {/* 统计卡片 */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="总患者数" 
              value={1256} 
              prefix={<UserOutlined className="text-emerald-600 mr-2" />}
              valueStyle={{ color: '#10b981' }}
            />
            <Text type="secondary" className="block mt-2">本月新增 <span className="text-emerald-600">+86</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="住院患者" 
              value={68} 
              prefix={<MedicineBoxOutlined className="text-teal-600 mr-2" />}
              valueStyle={{ color: '#0d9488' }}
            />
            <Text type="secondary" className="block mt-2">床位使用率 <span className="text-teal-600">68%</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="今日就诊" 
              value={124} 
              prefix={<HeartOutlined className="text-cyan-600 mr-2" />}
              valueStyle={{ color: '#0891b2' }}
            />
            <Text type="secondary" className="block mt-2">较昨日 <span className="text-cyan-600">+12%</span></Text>
          </Card>
        </Col>
      </Row>
      
      {/* 操作栏 */}
      <Card className="mb-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button type="primary" icon={<PlusOutlined />} className="btn-primary">
              新增患者
            </Button>
            <Dropdown menu={{ items: filterOptions }}>
              <Button icon={<FilterOutlined />}>
                筛选 <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <Input.Search
            placeholder="搜索患者姓名、ID或联系方式"
            allowClear
            enterButton={<SearchOutlined />}
            style={{ width: 300 }}
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </Card>
      
      {/* 患者表格 */}
      <Card>
        <Table
          columns={columns}
          dataSource={patients}
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

export default PatientManagement; 