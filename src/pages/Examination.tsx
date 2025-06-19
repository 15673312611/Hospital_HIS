import { useState, ChangeEvent } from 'react';
import { Card, Table, Button, Input, Space, Tag, Dropdown, Typography, Avatar, Row, Col, Statistic, Tabs, Steps, Badge, Descriptions, Image, Timeline, Divider } from 'antd';
import { 
  PlusOutlined, 
  SearchOutlined, 
  FilterOutlined, 
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  DownOutlined,
  ExperimentOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  PrinterOutlined,
  MailOutlined,
  BarChartOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  SyncOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Step } = Steps;

interface ExaminationItem {
  key: string;
  id: string;
  patientName: string;
  patientId: string;
  patientAvatar: string;
  gender: string;
  age: number;
  examinationType: string;
  examName: string;
  department: string;
  doctor: string;
  requestTime: string;
  status: string;
  priority: string;
  reportTime?: string;
}

const ExaminationManagement = () => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('1');
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  // 处理搜索框变化
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // 筛选选项
  const filterOptions: MenuProps['items'] = [
    {
      key: '1',
      label: '全部检查',
    },
    {
      key: '2',
      label: '今日检查',
    },
    {
      key: '3',
      label: '待完成',
    },
    {
      key: '4',
      label: '已完成',
    },
    {
      key: '5',
      label: '急诊检查',
    },
  ];

  // 假数据 - 检验检查列表
  const examinations: ExaminationItem[] = [
    {
      key: '1',
      id: 'EX2023001',
      patientName: '张三',
      patientId: 'P2023001',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=1',
      gender: '男',
      age: 45,
      examinationType: '检验',
      examName: '血常规',
      department: '内科',
      doctor: '李医生',
      requestTime: '2023-07-15 09:30',
      status: '已完成',
      priority: '常规',
      reportTime: '2023-07-15 10:15',
    },
    {
      key: '2',
      id: 'EX2023002',
      patientName: '李四',
      patientId: 'P2023002',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=2',
      gender: '女',
      age: 32,
      examinationType: '检查',
      examName: '胸部CT',
      department: '呼吸科',
      doctor: '王医生',
      requestTime: '2023-07-15 10:00',
      status: '进行中',
      priority: '加急',
    },
    {
      key: '3',
      id: 'EX2023003',
      patientName: '王五',
      patientId: 'P2023003',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=3',
      gender: '男',
      age: 28,
      examinationType: '检验',
      examName: '肝功能',
      department: '消化科',
      doctor: '张医生',
      requestTime: '2023-07-15 11:00',
      status: '已完成',
      priority: '常规',
      reportTime: '2023-07-15 12:30',
    },
    {
      key: '4',
      id: 'EX2023004',
      patientName: '赵六',
      patientId: 'P2023004',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=4',
      gender: '女',
      age: 65,
      examinationType: '检查',
      examName: '心脏彩超',
      department: '心内科',
      doctor: '刘医生',
      requestTime: '2023-07-15 13:30',
      status: '待检查',
      priority: '常规',
    },
    {
      key: '5',
      id: 'EX2023005',
      patientName: '钱七',
      patientId: 'P2023005',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=5',
      gender: '男',
      age: 50,
      examinationType: '检查',
      examName: '腹部B超',
      department: '外科',
      doctor: '陈医生',
      requestTime: '2023-07-15 14:00',
      status: '待检查',
      priority: '加急',
    },
  ];

  // 表格列定义
  const columns: ColumnsType<ExaminationItem> = [
    {
      title: '检查ID',
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
            <div className="text-xs text-gray-500">{record.gender}, {record.age}岁, {record.patientId}</div>
          </div>
        </div>
      ),
    },
    {
      title: '检查项目',
      dataIndex: 'examName',
      key: 'examName',
      filters: [
        { text: '血常规', value: '血常规' },
        { text: '胸部CT', value: '胸部CT' },
        { text: '肝功能', value: '肝功能' },
        { text: '心脏彩超', value: '心脏彩超' },
        { text: '腹部B超', value: '腹部B超' },
      ],
      onFilter: (value, record) => record.examName === value,
    },
    {
      title: '类型',
      dataIndex: 'examinationType',
      key: 'examinationType',
      filters: [
        { text: '检验', value: '检验' },
        { text: '检查', value: '检查' },
      ],
      onFilter: (value, record) => record.examinationType === value,
      render: (type) => {
        const color = type === '检验' ? 'blue' : 'purple';
        return <Tag color={color}>{type}</Tag>;
      },
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
        { text: '内科', value: '内科' },
        { text: '呼吸科', value: '呼吸科' },
        { text: '消化科', value: '消化科' },
        { text: '心内科', value: '心内科' },
        { text: '外科', value: '外科' },
      ],
      onFilter: (value, record) => record.department === value,
    },
    {
      title: '申请时间',
      dataIndex: 'requestTime',
      key: 'requestTime',
      sorter: (a, b) => a.requestTime.localeCompare(b.requestTime),
    },
    {
      title: '优先级',
      dataIndex: 'priority',
      key: 'priority',
      filters: [
        { text: '常规', value: '常规' },
        { text: '加急', value: '加急' },
      ],
      onFilter: (value, record) => record.priority === value,
      render: (priority) => {
        const color = priority === '常规' ? 'default' : 'error';
        return <Tag color={color}>{priority}</Tag>;
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: '待检查', value: '待检查' },
        { text: '进行中', value: '进行中' },
        { text: '已完成', value: '已完成' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => {
        let color = '';
        let icon = null;
        
        switch (status) {
          case '待检查':
            color = 'warning';
            icon = <ClockCircleOutlined />;
            break;
          case '进行中':
            color = 'processing';
            icon = <SyncOutlined spin />;
            break;
          case '已完成':
            color = 'success';
            icon = <CheckCircleOutlined />;
            break;
          default:
            color = 'default';
        }
        
        return <Tag color={color} icon={icon}>{status}</Tag>;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            type="text" 
            icon={<EyeOutlined />} 
            onClick={() => setSelectedExam(record.id)}
          />
          {record.status === '已完成' && (
            <Button type="text" icon={<PrinterOutlined />} />
          )}
          {record.status !== '已完成' && (
            <Button type="text" icon={<EditOutlined />} />
          )}
        </Space>
      ),
    },
  ];

  // 检查报告详情数据（模拟）
  const reportDetail = {
    basicInfo: {
      id: 'EX2023001',
      patientName: '张三',
      patientId: 'P2023001',
      gender: '男',
      age: 45,
      examName: '血常规',
      department: '内科',
      doctor: '李医生',
      requestTime: '2023-07-15 09:30',
      sampleTime: '2023-07-15 09:45',
      reportTime: '2023-07-15 10:15',
      sampleType: '静脉血',
      labTechnician: '王技师',
      reviewer: '张主任',
    },
    results: [
      {
        name: '白细胞计数(WBC)',
        result: '6.8',
        unit: '10^9/L',
        referenceRange: '4.0-10.0',
        flag: 'normal',
      },
      {
        name: '红细胞计数(RBC)',
        result: '4.5',
        unit: '10^12/L',
        referenceRange: '3.5-5.5',
        flag: 'normal',
      },
      {
        name: '血红蛋白(HGB)',
        result: '145',
        unit: 'g/L',
        referenceRange: '120-160',
        flag: 'normal',
      },
      {
        name: '血小板计数(PLT)',
        result: '230',
        unit: '10^9/L',
        referenceRange: '100-300',
        flag: 'normal',
      },
      {
        name: '中性粒细胞百分比(NEUT%)',
        result: '65.2',
        unit: '%',
        referenceRange: '50.0-70.0',
        flag: 'normal',
      },
      {
        name: '淋巴细胞百分比(LYMPH%)',
        result: '28.5',
        unit: '%',
        referenceRange: '20.0-40.0',
        flag: 'normal',
      },
      {
        name: '单核细胞百分比(MONO%)',
        result: '6.3',
        unit: '%',
        referenceRange: '3.0-10.0',
        flag: 'normal',
      },
    ],
    conclusion: '血常规检查结果在正常范围内，未见明显异常。',
    notes: '请结合临床进行分析判断。',
  };

  // CT检查报告详情（模拟）
  const ctReportDetail = {
    basicInfo: {
      id: 'EX2023002',
      patientName: '李四',
      patientId: 'P2023002',
      gender: '女',
      age: 32,
      examName: '胸部CT',
      department: '呼吸科',
      doctor: '王医生',
      requestTime: '2023-07-15 10:00',
      examTime: '2023-07-15 10:30',
      reportTime: '2023-07-15 11:15',
      device: 'GE 64排螺旋CT',
      technician: '刘技师',
      reporter: '赵主任',
    },
    findings: '双肺野清晰，未见明显实质性病变。纵隔内未见肿大淋巴结。心影大小正常，主动脉及肺动脉走形自然。双侧胸腔未见明显积液。',
    impression: '胸部CT未见明显异常。',
    images: [
      'https://via.placeholder.com/300x300?text=CT+Image+1',
      'https://via.placeholder.com/300x300?text=CT+Image+2',
      'https://via.placeholder.com/300x300?text=CT+Image+3',
    ],
    notes: '如有临床需要，建议进一步检查。',
  };

  // 检查流程状态
  const getExamStatus = (status: string) => {
    switch (status) {
      case '待检查':
        return 0;
      case '进行中':
        return 1;
      case '已完成':
        return 2;
      default:
        return 0;
    }
  };

  return (
    <div className="animate-fade-in">
      <Title level={2} className="text-gradient mb-6">检验检查管理</Title>
      
      {/* 统计卡片 */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="今日检查" 
              value={36} 
              prefix={<ExperimentOutlined className="text-emerald-600 mr-2" />}
              valueStyle={{ color: '#10b981' }}
            />
            <Text type="secondary" className="block mt-2">已完成 <span className="text-emerald-600">24</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="待处理" 
              value={12} 
              prefix={<ClockCircleOutlined className="text-teal-600 mr-2" />}
              valueStyle={{ color: '#0d9488' }}
            />
            <Text type="secondary" className="block mt-2">加急 <span className="text-amber-600">4</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="报告完成率" 
              value={85.7} 
              suffix="%" 
              precision={1}
              prefix={<BarChartOutlined className="text-cyan-600 mr-2" />}
              valueStyle={{ color: '#0891b2' }}
            />
            <Text type="secondary" className="block mt-2">较昨日 <span className="text-cyan-600">+2.3%</span></Text>
          </Card>
        </Col>
      </Row>
      
      <Tabs activeKey={activeTab} onChange={setActiveTab} className="mb-6">
        <TabPane tab="检查申请" key="1">
          {/* 操作栏 */}
          <Card className="mb-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button type="primary" icon={<PlusOutlined />} className="btn-primary">
                  新增申请
                </Button>
                <Dropdown menu={{ items: filterOptions }}>
                  <Button icon={<FilterOutlined />}>
                    筛选 <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <Input.Search
                placeholder="搜索检查ID、患者姓名或项目"
                allowClear
                enterButton={<SearchOutlined />}
                style={{ width: 300 }}
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
          </Card>
          
          {/* 检查表格和详情 */}
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={selectedExam ? 12 : 24}>
              <Card>
                <Table
                  columns={columns}
                  dataSource={examinations}
                  rowKey="key"
                  pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total) => `共 ${total} 条记录`,
                  }}
                />
              </Card>
            </Col>
            
            {selectedExam && (
              <Col xs={24} lg={12}>
                <Card 
                  title={
                    <div className="flex items-center justify-between">
                      <span>检查报告详情</span>
                      <Button 
                        type="text" 
                        icon={<CloseCircleOutlined />} 
                        onClick={() => setSelectedExam(null)}
                      />
                    </div>
                  }
                  className="card-shadow-lg"
                  extra={
                    <Space>
                      <Button icon={<PrinterOutlined />}>打印</Button>
                      <Button icon={<MailOutlined />}>发送</Button>
                    </Space>
                  }
                >
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="基本信息" key="1">
                      <Steps 
                        current={getExamStatus(examinations.find(e => e.id === selectedExam)?.status || '待检查')} 
                        className="mb-6"
                      >
                        <Step title="申请" description={reportDetail.basicInfo.requestTime} />
                        <Step title="采样/检查" description={reportDetail.basicInfo.sampleTime} />
                        <Step title="报告完成" description={reportDetail.basicInfo.reportTime} />
                      </Steps>
                      
                      <Descriptions bordered column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}>
                        <Descriptions.Item label="检查ID">{reportDetail.basicInfo.id}</Descriptions.Item>
                        <Descriptions.Item label="检查项目">{reportDetail.basicInfo.examName}</Descriptions.Item>
                        <Descriptions.Item label="患者姓名">{reportDetail.basicInfo.patientName}</Descriptions.Item>
                        <Descriptions.Item label="患者ID">{reportDetail.basicInfo.patientId}</Descriptions.Item>
                        <Descriptions.Item label="性别/年龄">{reportDetail.basicInfo.gender} / {reportDetail.basicInfo.age}岁</Descriptions.Item>
                        <Descriptions.Item label="申请科室/医生">{reportDetail.basicInfo.department} / {reportDetail.basicInfo.doctor}</Descriptions.Item>
                        <Descriptions.Item label="样本类型">{reportDetail.basicInfo.sampleType}</Descriptions.Item>
                        <Descriptions.Item label="检验技师">{reportDetail.basicInfo.labTechnician}</Descriptions.Item>
                        <Descriptions.Item label="审核医师">{reportDetail.basicInfo.reviewer}</Descriptions.Item>
                        <Descriptions.Item label="报告时间">{reportDetail.basicInfo.reportTime}</Descriptions.Item>
                      </Descriptions>
                    </TabPane>
                    
                    <TabPane tab="检验结果" key="2">
                      <Table
                        dataSource={reportDetail.results}
                        columns={[
                          {
                            title: '检验项目',
                            dataIndex: 'name',
                            key: 'name',
                          },
                          {
                            title: '结果',
                            dataIndex: 'result',
                            key: 'result',
                          },
                          {
                            title: '单位',
                            dataIndex: 'unit',
                            key: 'unit',
                          },
                          {
                            title: '参考范围',
                            dataIndex: 'referenceRange',
                            key: 'referenceRange',
                          },
                          {
                            title: '标志',
                            dataIndex: 'flag',
                            key: 'flag',
                            render: (flag) => {
                              if (flag === 'normal') {
                                return <Tag color="success">正常</Tag>;
                              } else if (flag === 'high') {
                                return <Tag color="error">↑</Tag>;
                              } else if (flag === 'low') {
                                return <Tag color="warning">↓</Tag>;
                              }
                              return <Tag>-</Tag>;
                            },
                          },
                        ]}
                        pagination={false}
                        size="small"
                        bordered
                      />
                      
                      <Divider orientation="left">检验结论</Divider>
                      <Paragraph>{reportDetail.conclusion}</Paragraph>
                      
                      <Divider orientation="left">备注</Divider>
                      <Paragraph>{reportDetail.notes}</Paragraph>
                    </TabPane>
                    
                    <TabPane tab="影像资料" key="3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ctReportDetail.images.map((img, index) => (
                          <div key={index} className="border rounded-lg p-2">
                            <Image src={img} alt={`CT Image ${index + 1}`} />
                          </div>
                        ))}
                      </div>
                      
                      <Divider orientation="left">影像所见</Divider>
                      <Paragraph>{ctReportDetail.findings}</Paragraph>
                      
                      <Divider orientation="left">影像诊断</Divider>
                      <Paragraph>{ctReportDetail.impression}</Paragraph>
                    </TabPane>
                  </Tabs>
                </Card>
              </Col>
            )}
          </Row>
        </TabPane>
        
        <TabPane tab="检验项目管理" key="2">
          <Card>
            <Table
              columns={[
                {
                  title: '项目代码',
                  dataIndex: 'code',
                  key: 'code',
                },
                {
                  title: '项目名称',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '类别',
                  dataIndex: 'category',
                  key: 'category',
                  render: (category) => {
                    const color = category === '检验' ? 'blue' : 'purple';
                    return <Tag color={color}>{category}</Tag>;
                  },
                },
                {
                  title: '样本类型',
                  dataIndex: 'sampleType',
                  key: 'sampleType',
                },
                {
                  title: '执行科室',
                  dataIndex: 'department',
                  key: 'department',
                },
                {
                  title: '价格(元)',
                  dataIndex: 'price',
                  key: 'price',
                  render: (price) => `¥${price.toFixed(2)}`,
                },
                {
                  title: '操作',
                  key: 'action',
                  render: () => (
                    <Space size="middle">
                      <Button type="text" icon={<EditOutlined />} />
                      <Button type="text" icon={<DeleteOutlined />} danger />
                    </Space>
                  ),
                },
              ]}
              dataSource={[
                {
                  key: '1',
                  code: 'LAB001',
                  name: '血常规',
                  category: '检验',
                  sampleType: '静脉血',
                  department: '检验科',
                  price: 35.0,
                },
                {
                  key: '2',
                  code: 'LAB002',
                  name: '尿常规',
                  category: '检验',
                  sampleType: '尿液',
                  department: '检验科',
                  price: 30.0,
                },
                {
                  key: '3',
                  code: 'LAB003',
                  name: '肝功能',
                  category: '检验',
                  sampleType: '静脉血',
                  department: '检验科',
                  price: 120.0,
                },
                {
                  key: '4',
                  code: 'IMG001',
                  name: '胸部CT',
                  category: '检查',
                  sampleType: '-',
                  department: '放射科',
                  price: 350.0,
                },
                {
                  key: '5',
                  code: 'IMG002',
                  name: '腹部B超',
                  category: '检查',
                  sampleType: '-',
                  department: '超声科',
                  price: 180.0,
                },
              ]}
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total) => `共 ${total} 条记录`,
              }}
            />
          </Card>
        </TabPane>
        
        <TabPane tab="统计分析" key="3">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card title="各科室检查统计" className="card-shadow-lg">
                <div className="h-64 flex items-center justify-center text-gray-500">
                  [此处为科室检查统计图表]
                </div>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="检查类型分布" className="card-shadow-lg">
                <div className="h-64 flex items-center justify-center text-gray-500">
                  [此处为检查类型分布图表]
                </div>
              </Card>
            </Col>
            <Col xs={24}>
              <Card title="检查完成率趋势" className="card-shadow-lg">
                <div className="h-64 flex items-center justify-center text-gray-500">
                  [此处为检查完成率趋势图表]
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ExaminationManagement; 