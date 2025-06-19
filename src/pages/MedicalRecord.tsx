import { useState, ChangeEvent } from 'react';
import { Card, Table, Button, Input, Space, Tag, Dropdown, Typography, Avatar, Row, Col, Statistic, Tabs, Descriptions, Timeline, Divider } from 'antd';
import { 
  PlusOutlined, 
  SearchOutlined, 
  FilterOutlined, 
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  DownOutlined,
  FileTextOutlined,
  MedicineBoxOutlined,
  ExperimentOutlined,
  ClockCircleOutlined,
  PlusCircleOutlined,
  CheckCircleOutlined,
  UserOutlined,
  PrinterOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

interface MedicalRecord {
  key: string;
  id: string;
  patientName: string;
  patientId: string;
  patientAvatar: string;
  doctorName: string;
  department: string;
  visitDate: string;
  visitType: string;
  diagnosis: string;
  status: string;
}

const MedicalRecordManagement = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);

  // 处理搜索框变化
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // 筛选选项
  const filterOptions: MenuProps['items'] = [
    {
      key: '1',
      label: '全部病历',
    },
    {
      key: '2',
      label: '今日病历',
    },
    {
      key: '3',
      label: '住院病历',
    },
    {
      key: '4',
      label: '门诊病历',
    },
    {
      key: '5',
      label: '急诊病历',
    },
  ];

  // 假数据 - 病历列表
  const medicalRecords: MedicalRecord[] = [
    {
      key: '1',
      id: 'MR2023001',
      patientName: '张三',
      patientId: 'P2023001',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=1',
      doctorName: '李医生',
      department: '内科',
      visitDate: '2023-07-15',
      visitType: '门诊',
      diagnosis: '高血压',
      status: '已完成',
    },
    {
      key: '2',
      id: 'MR2023002',
      patientName: '李四',
      patientId: 'P2023002',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=2',
      doctorName: '王医生',
      department: '外科',
      visitDate: '2023-07-16',
      visitType: '门诊',
      diagnosis: '腹部疼痛',
      status: '进行中',
    },
    {
      key: '3',
      id: 'MR2023003',
      patientName: '王五',
      patientId: 'P2023003',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=3',
      doctorName: '张医生',
      department: '骨科',
      visitDate: '2023-07-17',
      visitType: '住院',
      diagnosis: '膝关节损伤',
      status: '已完成',
    },
    {
      key: '4',
      id: 'MR2023004',
      patientName: '赵六',
      patientId: 'P2023004',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=female&seed=4',
      doctorName: '刘医生',
      department: '眼科',
      visitDate: '2023-07-18',
      visitType: '门诊',
      diagnosis: '结膜炎',
      status: '已完成',
    },
    {
      key: '5',
      id: 'MR2023005',
      patientName: '钱七',
      patientId: 'P2023005',
      patientAvatar: 'https://xsgames.co/randomusers/avatar.php?g=male&seed=5',
      doctorName: '陈医生',
      department: '急诊科',
      visitDate: '2023-07-19',
      visitType: '急诊',
      diagnosis: '急性腹痛',
      status: '进行中',
    },
  ];

  // 表格列定义
  const columns: ColumnsType<MedicalRecord> = [
    {
      title: '病历ID',
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
      title: '医生/科室',
      dataIndex: 'doctorName',
      key: 'doctorName',
      render: (_, record) => (
        <div>
          <div>{record.doctorName}</div>
          <div className="text-xs text-gray-500">{record.department}</div>
        </div>
      ),
      filters: [
        { text: '内科', value: '内科' },
        { text: '外科', value: '外科' },
        { text: '骨科', value: '骨科' },
        { text: '眼科', value: '眼科' },
        { text: '急诊科', value: '急诊科' },
      ],
      onFilter: (value, record) => record.department === value,
    },
    {
      title: '就诊日期',
      dataIndex: 'visitDate',
      key: 'visitDate',
      sorter: (a, b) => a.visitDate.localeCompare(b.visitDate),
    },
    {
      title: '就诊类型',
      dataIndex: 'visitType',
      key: 'visitType',
      filters: [
        { text: '门诊', value: '门诊' },
        { text: '住院', value: '住院' },
        { text: '急诊', value: '急诊' },
      ],
      onFilter: (value, record) => record.visitType === value,
      render: (type) => {
        let color = '';
        switch (type) {
          case '门诊':
            color = 'green';
            break;
          case '住院':
            color = 'blue';
            break;
          case '急诊':
            color = 'red';
            break;
          default:
            color = 'default';
        }
        return <Tag color={color}>{type}</Tag>;
      },
    },
    {
      title: '诊断',
      dataIndex: 'diagnosis',
      key: 'diagnosis',
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: '已完成', value: '已完成' },
        { text: '进行中', value: '进行中' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => {
        const color = status === '已完成' ? 'success' : 'processing';
        return <Tag color={color}>{status}</Tag>;
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
            onClick={() => setSelectedRecordId(record.id)}
          />
          <Button type="text" icon={<EditOutlined />} />
          <Button type="text" icon={<DeleteOutlined />} danger />
        </Space>
      ),
    },
  ];

  // 病历详情数据（模拟）
  const recordDetail = {
    basicInfo: {
      id: 'MR2023001',
      patientName: '张三',
      patientId: 'P2023001',
      gender: '男',
      age: 45,
      phone: '13800138000',
      visitDate: '2023-07-15 09:30',
      visitType: '门诊',
      department: '内科',
      doctor: '李医生',
    },
    chiefComplaint: '反复头痛、头晕3年，加重1周',
    presentIllness: '患者3年前无明显诱因出现头痛、头晕，多为后枕部胀痛，伴有轻度恶心，无呕吐，无视物模糊，无肢体麻木，无意识障碍。曾在当地医院就诊，测血压160/100mmHg，诊断为"高血压"，给予降压药物治疗（具体不详），症状好转。近1周来头痛加重，为持续性胀痛，伴有头晕、乏力，遂来我院就诊。',
    pastHistory: '既往体健，否认肝炎、结核等传染病史，否认药物过敏史，否认手术外伤史。',
    physicalExamination: '体温36.5℃，脉搏76次/分，呼吸18次/分，血压168/105mmHg。神志清楚，精神可，发育正常，营养中等，查体合作。全身皮肤粘膜无黄染及出血点。浅表淋巴结未触及肿大。头颅无畸形，眼睑无水肿，巩膜无黄染，瞳孔等大等圆，对光反射灵敏。口唇无发绀，咽无充血，扁桃体无肿大。颈软，气管居中，甲状腺无肿大。',
    diagnosis: '原发性高血压（2级）',
    treatment: [
      {
        time: '2023-07-15 09:45',
        type: '用药医嘱',
        content: '缬沙坦胶囊，80mg，每日1次，口服',
      },
      {
        time: '2023-07-15 09:45',
        type: '用药医嘱',
        content: '氨氯地平片，5mg，每日1次，口服',
      },
      {
        time: '2023-07-15 09:46',
        type: '检查医嘱',
        content: '血常规、尿常规、肝肾功能、心电图、心脏彩超',
      },
      {
        time: '2023-07-15 10:30',
        type: '处置医嘱',
        content: '建议低盐低脂饮食，规律作息，适当运动',
      },
    ],
    labTests: [
      {
        name: '血常规',
        time: '2023-07-15 10:15',
        result: '白细胞计数：6.8×10^9/L，红细胞计数：4.5×10^12/L，血红蛋白：145g/L，血小板计数：230×10^9/L',
        conclusion: '正常',
      },
      {
        name: '尿常规',
        time: '2023-07-15 10:20',
        result: '尿蛋白(-), 尿糖(-), 尿潜血(-)',
        conclusion: '正常',
      },
      {
        name: '肝功能',
        time: '2023-07-15 10:25',
        result: 'ALT: 25U/L, AST: 28U/L, TBIL: 12μmol/L',
        conclusion: '正常',
      },
      {
        name: '肾功能',
        time: '2023-07-15 10:30',
        result: '血肌酐: 78μmol/L, 尿素氮: 5.2mmol/L',
        conclusion: '正常',
      },
    ],
    followUp: '两周后复诊，监测血压，必要时调整用药',
  };

  return (
    <div className="animate-fade-in">
      <Title level={2} className="text-gradient mb-6">电子病历管理</Title>
      
      {/* 统计卡片 */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="总病历数" 
              value={1256} 
              prefix={<FileTextOutlined className="text-emerald-600 mr-2" />}
              valueStyle={{ color: '#10b981' }}
            />
            <Text type="secondary" className="block mt-2">本月新增 <span className="text-emerald-600">+86</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="今日病历" 
              value={24} 
              prefix={<MedicineBoxOutlined className="text-teal-600 mr-2" />}
              valueStyle={{ color: '#0d9488' }}
            />
            <Text type="secondary" className="block mt-2">较昨日 <span className="text-teal-600">+15%</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="待处理病历" 
              value={8} 
              prefix={<ExperimentOutlined className="text-cyan-600 mr-2" />}
              valueStyle={{ color: '#0891b2' }}
            />
            <Text type="secondary" className="block mt-2">需要审核 <span className="text-cyan-600">3</span></Text>
          </Card>
        </Col>
      </Row>
      
      {/* 操作栏 */}
      <Card className="mb-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button type="primary" icon={<PlusOutlined />} className="btn-primary">
              新增病历
            </Button>
            <Dropdown menu={{ items: filterOptions }}>
              <Button icon={<FilterOutlined />}>
                筛选 <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <Input.Search
            placeholder="搜索病历ID、患者姓名或诊断"
            allowClear
            enterButton={<SearchOutlined />}
            style={{ width: 300 }}
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </Card>
      
      {/* 病历表格和详情 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={selectedRecordId ? 12 : 24}>
          <Card>
            <Table
              columns={columns}
              dataSource={medicalRecords}
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
        
        {selectedRecordId && (
          <Col xs={24} lg={12}>
            <Card 
              title={
                <div className="flex items-center justify-between">
                  <span>病历详情</span>
                  <Button 
                    type="text" 
                    icon={<CheckCircleOutlined />} 
                    onClick={() => setSelectedRecordId(null)}
                  />
                </div>
              }
              className="card-shadow-lg"
            >
              <Tabs defaultActiveKey="1">
                <TabPane tab="基本信息" key="1">
                  <Descriptions bordered column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}>
                    <Descriptions.Item label="病历ID">{recordDetail.basicInfo.id}</Descriptions.Item>
                    <Descriptions.Item label="患者姓名">{recordDetail.basicInfo.patientName}</Descriptions.Item>
                    <Descriptions.Item label="患者ID">{recordDetail.basicInfo.patientId}</Descriptions.Item>
                    <Descriptions.Item label="性别/年龄">{recordDetail.basicInfo.gender} / {recordDetail.basicInfo.age}岁</Descriptions.Item>
                    <Descriptions.Item label="联系电话">{recordDetail.basicInfo.phone}</Descriptions.Item>
                    <Descriptions.Item label="就诊时间">{recordDetail.basicInfo.visitDate}</Descriptions.Item>
                    <Descriptions.Item label="就诊类型">{recordDetail.basicInfo.visitType}</Descriptions.Item>
                    <Descriptions.Item label="科室/医生">{recordDetail.basicInfo.department} / {recordDetail.basicInfo.doctor}</Descriptions.Item>
                  </Descriptions>
                  
                  <Divider orientation="left">主诉</Divider>
                  <Paragraph>{recordDetail.chiefComplaint}</Paragraph>
                  
                  <Divider orientation="left">现病史</Divider>
                  <Paragraph>{recordDetail.presentIllness}</Paragraph>
                  
                  <Divider orientation="left">既往史</Divider>
                  <Paragraph>{recordDetail.pastHistory}</Paragraph>
                  
                  <Divider orientation="left">体格检查</Divider>
                  <Paragraph>{recordDetail.physicalExamination}</Paragraph>
                  
                  <Divider orientation="left">诊断</Divider>
                  <Paragraph className="font-bold text-lg">{recordDetail.diagnosis}</Paragraph>
                </TabPane>
                
                <TabPane tab="医嘱" key="2">
                  <Timeline mode="left">
                    {recordDetail.treatment.map((item, index) => (
                      <Timeline.Item 
                        key={index} 
                        label={item.time}
                        color={item.type.includes('用药') ? 'green' : item.type.includes('检查') ? 'blue' : 'gray'}
                      >
                        <div className="font-medium">{item.type}</div>
                        <div className="text-gray-600">{item.content}</div>
                      </Timeline.Item>
                    ))}
                  </Timeline>
                  
                  <Divider orientation="left">复诊建议</Divider>
                  <Paragraph>{recordDetail.followUp}</Paragraph>
                </TabPane>
                
                <TabPane tab="检验结果" key="3">
                  {recordDetail.labTests.map((test, index) => (
                    <Card 
                      key={index} 
                      title={test.name} 
                      size="small" 
                      className="mb-4"
                      extra={<Tag color={test.conclusion === '正常' ? 'success' : 'error'}>{test.conclusion}</Tag>}
                    >
                      <p className="text-gray-500 text-sm mb-2">检查时间: {test.time}</p>
                      <p>{test.result}</p>
                    </Card>
                  ))}
                </TabPane>
              </Tabs>
              
              <div className="flex justify-end mt-4 space-x-4">
                <Button icon={<EditOutlined />}>编辑病历</Button>
                <Button icon={<PrinterOutlined />}>打印病历</Button>
              </div>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default MedicalRecordManagement; 