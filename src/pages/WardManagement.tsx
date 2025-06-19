import { useState, ChangeEvent } from 'react';
import { Card, Table, Button, Input, Space, Tag, Dropdown, Typography, Avatar, Row, Col, Statistic, Tabs, Progress, Badge, List, Tooltip } from 'antd';
import { 
  PlusOutlined, 
  SearchOutlined, 
  FilterOutlined, 
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  DownOutlined,
  HeartOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  SwapOutlined,
  BellOutlined,
  HomeOutlined,
  TeamOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

interface Patient {
  key: string;
  id: string;
  name: string;
  gender: string;
  age: number;
  avatar: string;
  admissionDate: string;
  diagnosis: string;
  department: string;
  doctor: string;
  bedNumber: string;
  status: string;
  estimatedDischargeDate?: string;
  insuranceType: string;
}

interface Bed {
  key: string;
  id: string;
  roomNumber: string;
  bedNumber: string;
  department: string;
  status: string;
  patientId?: string;
  patientName?: string;
  admissionDate?: string;
  estimatedDischargeDate?: string;
}

const WardManagement = () => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('1');

  // 处理搜索框变化
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // 筛选选项
  const filterOptions: MenuProps['items'] = [
    {
      key: '1',
      label: '全部患者',
    },
    {
      key: '2',
      label: '今日入院',
    },
    {
      key: '3',
      label: '今日出院',
    },
    {
      key: '4',
      label: '危重患者',
    },
  ];

  // 假数据 - 住院患者列表
  const patients: Patient[] = [
    {
      key: '1',
      id: 'IP2023001',
      name: '张三',
      gender: '男',
      age: 45,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=1',
      admissionDate: '2023-07-10',
      diagnosis: '高血压、冠心病',
      department: '心内科',
      doctor: '李医生',
      bedNumber: '3-101-A',
      status: '住院中',
      estimatedDischargeDate: '2023-07-25',
      insuranceType: '社保',
    },
    {
      key: '2',
      id: 'IP2023002',
      name: '李四',
      gender: '女',
      age: 32,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=2',
      admissionDate: '2023-07-12',
      diagnosis: '肺炎',
      department: '呼吸科',
      doctor: '王医生',
      bedNumber: '4-203-B',
      status: '住院中',
      estimatedDischargeDate: '2023-07-22',
      insuranceType: '医保',
    },
    {
      key: '3',
      id: 'IP2023003',
      name: '王五',
      gender: '男',
      age: 28,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=3',
      admissionDate: '2023-07-15',
      diagnosis: '阑尾炎术后',
      department: '外科',
      doctor: '张医生',
      bedNumber: '5-105-C',
      status: '住院中',
      insuranceType: '商业保险',
    },
    {
      key: '4',
      id: 'IP2023004',
      name: '赵六',
      gender: '女',
      age: 65,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=4',
      admissionDate: '2023-07-05',
      diagnosis: '糖尿病',
      department: '内分泌科',
      doctor: '刘医生',
      bedNumber: '2-108-A',
      status: '待出院',
      estimatedDischargeDate: '2023-07-20',
      insuranceType: '社保',
    },
    {
      key: '5',
      id: 'IP2023005',
      name: '钱七',
      gender: '男',
      age: 50,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=5',
      admissionDate: '2023-07-18',
      diagnosis: '胆囊炎',
      department: '消化科',
      doctor: '陈医生',
      bedNumber: '6-102-B',
      status: '住院中',
      estimatedDischargeDate: '2023-07-28',
      insuranceType: '医保',
    },
  ];

  // 假数据 - 床位列表
  const beds: Bed[] = [
    {
      key: '1',
      id: 'B3-101-A',
      roomNumber: '3-101',
      bedNumber: 'A',
      department: '心内科',
      status: '已占用',
      patientId: 'IP2023001',
      patientName: '张三',
      admissionDate: '2023-07-10',
      estimatedDischargeDate: '2023-07-25',
    },
    {
      key: '2',
      id: 'B4-203-B',
      roomNumber: '4-203',
      bedNumber: 'B',
      department: '呼吸科',
      status: '已占用',
      patientId: 'IP2023002',
      patientName: '李四',
      admissionDate: '2023-07-12',
      estimatedDischargeDate: '2023-07-22',
    },
    {
      key: '3',
      id: 'B5-105-C',
      roomNumber: '5-105',
      bedNumber: 'C',
      department: '外科',
      status: '已占用',
      patientId: 'IP2023003',
      patientName: '王五',
      admissionDate: '2023-07-15',
    },
    {
      key: '4',
      id: 'B2-108-A',
      roomNumber: '2-108',
      bedNumber: 'A',
      department: '内分泌科',
      status: '已占用',
      patientId: 'IP2023004',
      patientName: '赵六',
      admissionDate: '2023-07-05',
      estimatedDischargeDate: '2023-07-20',
    },
    {
      key: '5',
      id: 'B6-102-B',
      roomNumber: '6-102',
      bedNumber: 'B',
      department: '消化科',
      status: '已占用',
      patientId: 'IP2023005',
      patientName: '钱七',
      admissionDate: '2023-07-18',
      estimatedDischargeDate: '2023-07-28',
    },
    {
      key: '6',
      id: 'B3-101-B',
      roomNumber: '3-101',
      bedNumber: 'B',
      department: '心内科',
      status: '空闲',
    },
    {
      key: '7',
      id: 'B3-101-C',
      roomNumber: '3-101',
      bedNumber: 'C',
      department: '心内科',
      status: '维修中',
    },
    {
      key: '8',
      id: 'B4-203-A',
      roomNumber: '4-203',
      bedNumber: 'A',
      department: '呼吸科',
      status: '空闲',
    },
  ];

  // 患者表格列定义
  const patientColumns: ColumnsType<Patient> = [
    {
      title: '患者ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: '患者信息',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <div className="flex items-center">
          <Avatar src={record.avatar} size={40} className="mr-3" />
          <div>
            <div className="font-medium">{record.name}</div>
            <div className="text-xs text-gray-500">{record.gender}, {record.age}岁</div>
          </div>
        </div>
      ),
    },
    {
      title: '入院日期',
      dataIndex: 'admissionDate',
      key: 'admissionDate',
      sorter: (a, b) => a.admissionDate.localeCompare(b.admissionDate),
    },
    {
      title: '预计出院',
      dataIndex: 'estimatedDischargeDate',
      key: 'estimatedDischargeDate',
      render: (date) => date || '未确定',
    },
    {
      title: '诊断',
      dataIndex: 'diagnosis',
      key: 'diagnosis',
      ellipsis: true,
    },
    {
      title: '科室/医生',
      dataIndex: 'department',
      key: 'department',
      render: (_, record) => (
        <div>
          <div>{record.department}</div>
          <div className="text-xs text-gray-500">{record.doctor}</div>
        </div>
      ),
      filters: [
        { text: '心内科', value: '心内科' },
        { text: '呼吸科', value: '呼吸科' },
        { text: '外科', value: '外科' },
        { text: '内分泌科', value: '内分泌科' },
        { text: '消化科', value: '消化科' },
      ],
      onFilter: (value, record) => record.department === value,
    },
    {
      title: '床位号',
      dataIndex: 'bedNumber',
      key: 'bedNumber',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: '住院中', value: '住院中' },
        { text: '待出院', value: '待出院' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => {
        const color = status === '住院中' ? 'processing' : status === '待出院' ? 'warning' : 'default';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="text" icon={<EyeOutlined />} />
          <Button type="text" icon={<EditOutlined />} />
          {record.status === '待出院' ? (
            <Button type="primary" size="small" icon={<CheckCircleOutlined />}>
              办理出院
            </Button>
          ) : (
            <Button type="text" icon={<SwapOutlined />}>
              转科/床
            </Button>
          )}
        </Space>
      ),
    },
  ];

  // 床位表格列定义
  const bedColumns: ColumnsType<Bed> = [
    {
      title: '床位号',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: '房间号',
      dataIndex: 'roomNumber',
      key: 'roomNumber',
      filters: [
        { text: '3-101', value: '3-101' },
        { text: '4-203', value: '4-203' },
        { text: '5-105', value: '5-105' },
        { text: '2-108', value: '2-108' },
        { text: '6-102', value: '6-102' },
      ],
      onFilter: (value, record) => record.roomNumber === value,
    },
    {
      title: '科室',
      dataIndex: 'department',
      key: 'department',
      filters: [
        { text: '心内科', value: '心内科' },
        { text: '呼吸科', value: '呼吸科' },
        { text: '外科', value: '外科' },
        { text: '内分泌科', value: '内分泌科' },
        { text: '消化科', value: '消化科' },
      ],
      onFilter: (value, record) => record.department === value,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: '已占用', value: '已占用' },
        { text: '空闲', value: '空闲' },
        { text: '维修中', value: '维修中' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => {
        let color = '';
        switch (status) {
          case '已占用':
            color = 'processing';
            break;
          case '空闲':
            color = 'success';
            break;
          case '维修中':
            color = 'error';
            break;
          default:
            color = 'default';
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: '患者信息',
      dataIndex: 'patientName',
      key: 'patientName',
      render: (text, record) => {
        if (record.status !== '已占用') {
          return '-';
        }
        return (
          <div>
            <div>{record.patientName}</div>
            <div className="text-xs text-gray-500">{record.patientId}</div>
          </div>
        );
      },
    },
    {
      title: '入住日期',
      dataIndex: 'admissionDate',
      key: 'admissionDate',
      render: (text) => text || '-',
    },
    {
      title: '预计出院',
      dataIndex: 'estimatedDischargeDate',
      key: 'estimatedDischargeDate',
      render: (text) => text || '-',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {record.status === '已占用' ? (
            <>
              <Button type="text" icon={<EyeOutlined />} />
              <Button type="text" icon={<SwapOutlined />}>
                调床
              </Button>
            </>
          ) : record.status === '空闲' ? (
            <Button type="primary" size="small" icon={<PlusOutlined />}>
              安排入住
            </Button>
          ) : (
            <Button type="text" icon={<EditOutlined />}>
              修改状态
            </Button>
          )}
        </Space>
      ),
    },
  ];

  // 部门床位使用情况
  const departmentBedUsage = [
    { department: '心内科', total: 30, used: 22, available: 6, maintenance: 2 },
    { department: '呼吸科', total: 25, used: 18, available: 5, maintenance: 2 },
    { department: '外科', total: 40, used: 35, available: 3, maintenance: 2 },
    { department: '内分泌科', total: 20, used: 15, available: 4, maintenance: 1 },
    { department: '消化科', total: 25, used: 20, available: 3, maintenance: 2 },
    { department: '骨科', total: 30, used: 25, available: 4, maintenance: 1 },
  ];

  // 近期入院/出院统计
  const recentAdmissions = [
    { date: '07-12', count: 8 },
    { date: '07-13', count: 6 },
    { date: '07-14', count: 5 },
    { date: '07-15', count: 7 },
    { date: '07-16', count: 4 },
    { date: '07-17', count: 3 },
    { date: '07-18', count: 6 },
  ];

  const recentDischarges = [
    { date: '07-12', count: 5 },
    { date: '07-13', count: 4 },
    { date: '07-14', count: 6 },
    { date: '07-15', count: 3 },
    { date: '07-16', count: 5 },
    { date: '07-17', count: 4 },
    { date: '07-18', count: 2 },
  ];

  return (
    <div className="animate-fade-in">
      <Title level={2} className="text-gradient mb-6">病房管理</Title>
      
      {/* 统计卡片 */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="住院患者" 
              value={68} 
              prefix={<UserOutlined className="text-emerald-600 mr-2" />}
              valueStyle={{ color: '#10b981' }}
            />
            <Text type="secondary" className="block mt-2">今日入院 <span className="text-emerald-600">6</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="床位使用率" 
              value={78.5} 
              suffix="%" 
              precision={1}
              prefix={<MedicineBoxOutlined className="text-teal-600 mr-2" />}
              valueStyle={{ color: '#0d9488' }}
            />
            <Text type="secondary" className="block mt-2">空闲床位 <span className="text-teal-600">25</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="今日待出院" 
              value={12} 
              prefix={<HeartOutlined className="text-cyan-600 mr-2" />}
              valueStyle={{ color: '#0891b2' }}
            />
            <Text type="secondary" className="block mt-2">平均住院天数 <span className="text-cyan-600">8.5</span></Text>
          </Card>
        </Col>
      </Row>
      
      <Tabs activeKey={activeTab} onChange={setActiveTab} className="mb-6">
        <TabPane tab="住院患者" key="1">
          {/* 操作栏 */}
          <Card className="mb-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button type="primary" icon={<PlusOutlined />} className="btn-primary">
                  新增入院
                </Button>
                <Dropdown menu={{ items: filterOptions }}>
                  <Button icon={<FilterOutlined />}>
                    筛选 <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <Input.Search
                placeholder="搜索患者ID、姓名或床位号"
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
              columns={patientColumns}
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
        </TabPane>
        
        <TabPane tab="床位管理" key="2">
          {/* 操作栏 */}
          <Card className="mb-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button type="primary" icon={<PlusOutlined />} className="btn-primary">
                  添加床位
                </Button>
                <Button icon={<FilterOutlined />}>
                  筛选
                </Button>
                <Button icon={<BellOutlined />}>
                  床位预警
                </Button>
              </div>
              <Input.Search
                placeholder="搜索床位号或房间号"
                allowClear
                enterButton={<SearchOutlined />}
                style={{ width: 300 }}
              />
            </div>
          </Card>
          
          {/* 床位表格 */}
          <Card>
            <Table
              columns={bedColumns}
              dataSource={beds}
              rowKey="key"
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total) => `共 ${total} 条记录`,
              }}
            />
          </Card>
        </TabPane>
        
        <TabPane tab="病房统计" key="3">
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <Card title="各科室床位使用情况" className="card-shadow-lg">
                <div className="space-y-4">
                  {departmentBedUsage.map((dept, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{dept.department}</span>
                        <span className="text-gray-500">
                          {dept.used}/{dept.total} ({((dept.used / dept.total) * 100).toFixed(1)}%)
                        </span>
                      </div>
                      <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                        <Tooltip title={`已使用: ${dept.used}张`}>
                          <div 
                            className="bg-emerald-500" 
                            style={{ width: `${(dept.used / dept.total) * 100}%` }}
                          />
                        </Tooltip>
                        <Tooltip title={`空闲: ${dept.available}张`}>
                          <div 
                            className="bg-blue-400" 
                            style={{ width: `${(dept.available / dept.total) * 100}%` }}
                          />
                        </Tooltip>
                        <Tooltip title={`维修中: ${dept.maintenance}张`}>
                          <div 
                            className="bg-red-400" 
                            style={{ width: `${(dept.maintenance / dept.total) * 100}%` }}
                          />
                        </Tooltip>
                      </div>
                      <div className="flex text-xs mt-1 text-gray-500">
                        <span className="flex items-center mr-4">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></span>
                          已使用 ({dept.used})
                        </span>
                        <span className="flex items-center mr-4">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-1"></span>
                          空闲 ({dept.available})
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-1"></span>
                          维修中 ({dept.maintenance})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            
            <Col xs={24} lg={12}>
              <Card title="近7天入出院统计" className="card-shadow-lg">
                <div className="h-64 flex items-center justify-center text-gray-500">
                  [此处为入出院统计图表]
                </div>
                <div className="flex justify-between mt-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-emerald-600">36</div>
                    <div className="text-sm text-gray-500">7天入院总数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-amber-600">29</div>
                    <div className="text-sm text-gray-500">7天出院总数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">+7</div>
                    <div className="text-sm text-gray-500">净增长</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">8.3</div>
                    <div className="text-sm text-gray-500">平均住院天数</div>
                  </div>
                </div>
              </Card>
            </Col>
            
            <Col xs={24} lg={24}>
              <Card title="病房分布地图" className="card-shadow-lg">
                <div className="h-96 flex items-center justify-center text-gray-500">
                  [此处为病房分布交互式地图]
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
      
      {/* 快速操作区域 */}
      <Card className="mt-6">
        <Title level={4} className="mb-4">快速操作</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8}>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                  <HomeOutlined />
                </div>
                <div>
                  <div className="text-lg font-medium">床位分配</div>
                  <div className="text-sm text-gray-500">快速安排患者入住</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                  <SwapOutlined />
                </div>
                <div>
                  <div className="text-lg font-medium">转科转床</div>
                  <div className="text-sm text-gray-500">患者科室或床位调整</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                  <TeamOutlined />
                </div>
                <div>
                  <div className="text-lg font-medium">批量出院</div>
                  <div className="text-sm text-gray-500">处理多位患者出院手续</div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default WardManagement; 