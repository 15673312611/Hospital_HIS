import { useState, ChangeEvent } from 'react';
import { Card, Table, Button, Input, Space, Tag, Dropdown, Typography, Avatar, Row, Col, Statistic, Progress, Badge, Tabs, Form, Select, InputNumber, DatePicker } from 'antd';
import { 
  PlusOutlined, 
  SearchOutlined, 
  FilterOutlined, 
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  DownOutlined,
  MedicineBoxOutlined,
  ExperimentOutlined,
  WarningOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ShoppingCartOutlined,
  BarcodeOutlined,
  PrinterOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

interface Medication {
  key: string;
  id: string;
  name: string;
  category: string;
  specification: string;
  manufacturer: string;
  price: number;
  stock: number;
  stockStatus: string;
  expiryDate: string;
  batchNumber: string;
  location: string;
}

interface Prescription {
  key: string;
  id: string;
  patientName: string;
  patientId: string;
  doctorName: string;
  department: string;
  createTime: string;
  status: string;
  medications: {
    name: string;
    specification: string;
    quantity: number;
    usage: string;
  }[];
}

const PharmacyManagement = () => {
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
      label: '全部药品',
    },
    {
      key: '2',
      label: '库存不足',
    },
    {
      key: '3',
      label: '即将过期',
    },
    {
      key: '4',
      label: '常用药品',
    },
    {
      key: '5',
      label: '处方药',
    },
  ];

  // 假数据 - 药品列表
  const medications: Medication[] = [
    {
      key: '1',
      id: 'M10001',
      name: '阿莫西林胶囊',
      category: '抗生素',
      specification: '0.25g*24粒/盒',
      manufacturer: '哈药集团制药总厂',
      price: 15.8,
      stock: 120,
      stockStatus: '充足',
      expiryDate: '2024-06-30',
      batchNumber: 'B20230101',
      location: 'A-01-02',
    },
    {
      key: '2',
      id: 'M10002',
      name: '布洛芬缓释胶囊',
      category: '解热镇痛药',
      specification: '0.3g*10粒/盒',
      manufacturer: '上海强生制药有限公司',
      price: 22.5,
      stock: 85,
      stockStatus: '充足',
      expiryDate: '2024-05-15',
      batchNumber: 'B20230205',
      location: 'A-02-03',
    },
    {
      key: '3',
      id: 'M10003',
      name: '辛伐他汀片',
      category: '调血脂药',
      specification: '20mg*7片/盒',
      manufacturer: '北京诺华制药有限公司',
      price: 38.6,
      stock: 15,
      stockStatus: '不足',
      expiryDate: '2024-08-20',
      batchNumber: 'B20230308',
      location: 'B-03-01',
    },
    {
      key: '4',
      id: 'M10004',
      name: '盐酸二甲双胍片',
      category: '降糖药',
      specification: '0.5g*30片/盒',
      manufacturer: '江苏恒瑞医药股份有限公司',
      price: 28.9,
      stock: 56,
      stockStatus: '充足',
      expiryDate: '2023-08-15',
      batchNumber: 'B20230402',
      location: 'B-05-04',
    },
    {
      key: '5',
      id: 'M10005',
      name: '氨氯地平片',
      category: '降压药',
      specification: '5mg*7片/盒',
      manufacturer: '华东医药股份有限公司',
      price: 32.5,
      stock: 8,
      stockStatus: '紧急',
      expiryDate: '2024-09-10',
      batchNumber: 'B20230506',
      location: 'C-02-01',
    },
  ];

  // 假数据 - 处方列表
  const prescriptions: Prescription[] = [
    {
      key: '1',
      id: 'P2023001',
      patientName: '张三',
      patientId: 'PT10001',
      doctorName: '李医生',
      department: '内科',
      createTime: '2023-07-15 09:45',
      status: '待发药',
      medications: [
        {
          name: '阿莫西林胶囊',
          specification: '0.25g*24粒/盒',
          quantity: 1,
          usage: '口服，一次1粒，一日3次，饭后服用',
        },
        {
          name: '布洛芬缓释胶囊',
          specification: '0.3g*10粒/盒',
          quantity: 1,
          usage: '口服，一次1粒，一日2次，必要时服用',
        },
      ],
    },
    {
      key: '2',
      id: 'P2023002',
      patientName: '李四',
      patientId: 'PT10002',
      doctorName: '王医生',
      department: '心内科',
      createTime: '2023-07-15 10:30',
      status: '待发药',
      medications: [
        {
          name: '辛伐他汀片',
          specification: '20mg*7片/盒',
          quantity: 2,
          usage: '口服，一次1片，一日1次，睡前服用',
        },
      ],
    },
    {
      key: '3',
      id: 'P2023003',
      patientName: '王五',
      patientId: 'PT10003',
      doctorName: '张医生',
      department: '内分泌科',
      createTime: '2023-07-15 11:15',
      status: '已发药',
      medications: [
        {
          name: '盐酸二甲双胍片',
          specification: '0.5g*30片/盒',
          quantity: 1,
          usage: '口服，一次1片，一日3次，饭后服用',
        },
      ],
    },
    {
      key: '4',
      id: 'P2023004',
      patientName: '赵六',
      patientId: 'PT10004',
      doctorName: '刘医生',
      department: '内科',
      createTime: '2023-07-15 14:20',
      status: '已发药',
      medications: [
        {
          name: '氨氯地平片',
          specification: '5mg*7片/盒',
          quantity: 3,
          usage: '口服，一次1片，一日1次，早晨服用',
        },
      ],
    },
  ];

  // 药品表格列定义
  const medicationColumns: ColumnsType<Medication> = [
    {
      title: '药品ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: '药品名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '类别',
      dataIndex: 'category',
      key: 'category',
      filters: [
        { text: '抗生素', value: '抗生素' },
        { text: '解热镇痛药', value: '解热镇痛药' },
        { text: '调血脂药', value: '调血脂药' },
        { text: '降糖药', value: '降糖药' },
        { text: '降压药', value: '降压药' },
      ],
      onFilter: (value, record) => record.category === value,
    },
    {
      title: '规格',
      dataIndex: 'specification',
      key: 'specification',
    },
    {
      title: '生产厂家',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
      ellipsis: true,
    },
    {
      title: '单价(元)',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      render: (price) => `¥${price.toFixed(2)}`,
    },
    {
      title: '库存',
      dataIndex: 'stock',
      key: 'stock',
      sorter: (a, b) => a.stock - b.stock,
      render: (stock, record) => (
        <div>
          <div className="flex items-center">
            <Progress 
              percent={stock > 100 ? 100 : stock} 
              size="small" 
              strokeColor={
                record.stockStatus === '充足' ? '#10b981' : 
                record.stockStatus === '不足' ? '#f59e0b' : 
                '#ef4444'
              }
              showInfo={false}
              className="mr-2"
              style={{ width: 60 }}
            />
            <span>{stock}</span>
          </div>
          <div className="mt-1">
            <Tag 
              color={
                record.stockStatus === '充足' ? 'success' : 
                record.stockStatus === '不足' ? 'warning' : 
                'error'
              }
            >
              {record.stockStatus}
            </Tag>
          </div>
        </div>
      ),
    },
    {
      title: '有效期',
      dataIndex: 'expiryDate',
      key: 'expiryDate',
      sorter: (a, b) => a.expiryDate.localeCompare(b.expiryDate),
      render: (date) => {
        const now = new Date();
        const expiry = new Date(date);
        const diffMonths = (expiry.getFullYear() - now.getFullYear()) * 12 + 
                          (expiry.getMonth() - now.getMonth());
        
        let color = 'success';
        if (diffMonths <= 1) color = 'error';
        else if (diffMonths <= 3) color = 'warning';
        
        return <Tag color={color}>{date}</Tag>;
      },
    },
    {
      title: '批号',
      dataIndex: 'batchNumber',
      key: 'batchNumber',
    },
    {
      title: '货架位置',
      dataIndex: 'location',
      key: 'location',
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

  // 处方表格列定义
  const prescriptionColumns: ColumnsType<Prescription> = [
    {
      title: '处方ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: '患者信息',
      dataIndex: 'patientName',
      key: 'patientName',
      render: (_, record) => (
        <div>
          <div className="font-medium">{record.patientName}</div>
          <div className="text-xs text-gray-500">{record.patientId}</div>
        </div>
      ),
    },
    {
      title: '开方医生',
      dataIndex: 'doctorName',
      key: 'doctorName',
    },
    {
      title: '科室',
      dataIndex: 'department',
      key: 'department',
      filters: [
        { text: '内科', value: '内科' },
        { text: '心内科', value: '心内科' },
        { text: '内分泌科', value: '内分泌科' },
      ],
      onFilter: (value, record) => record.department === value,
    },
    {
      title: '开方时间',
      dataIndex: 'createTime',
      key: 'createTime',
      sorter: (a, b) => a.createTime.localeCompare(b.createTime),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: '待发药', value: '待发药' },
        { text: '已发药', value: '已发药' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => {
        const color = status === '待发药' ? 'processing' : 'success';
        const icon = status === '待发药' ? <SyncOutlined spin /> : <CheckCircleOutlined />;
        return <Tag color={color} icon={icon}>{status}</Tag>;
      },
    },
    {
      title: '药品数量',
      dataIndex: 'medications',
      key: 'medicationCount',
      render: (medications) => medications.length,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="text" icon={<EyeOutlined />} />
          {record.status === '待发药' && (
            <Button type="primary" size="small" icon={<ShoppingCartOutlined />}>
              发药
            </Button>
          )}
          <Button type="text" icon={<PrinterOutlined />} />
        </Space>
      ),
    },
  ];

  // 药品入库表单
  const MedicationEntryForm = () => (
    <Card className="card-shadow mb-6">
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="药品名称"
              name="medicationName"
              rules={[{ required: true, message: '请选择药品' }]}
            >
              <Select placeholder="选择药品">
                {medications.map(med => (
                  <Option key={med.id} value={med.id}>{med.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="批号"
              name="batchNumber"
              rules={[{ required: true, message: '请输入批号' }]}
            >
              <Input placeholder="输入批号" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="入库数量"
              name="quantity"
              rules={[{ required: true, message: '请输入入库数量' }]}
            >
              <InputNumber min={1} placeholder="输入数量" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="生产日期"
              name="productionDate"
              rules={[{ required: true, message: '请选择生产日期' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="有效期至"
              name="expiryDate"
              rules={[{ required: true, message: '请选择有效期' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="供应商"
              name="supplier"
              rules={[{ required: true, message: '请选择供应商' }]}
            >
              <Select placeholder="选择供应商">
                <Option value="supplier1">华东医药供应链</Option>
                <Option value="supplier2">国药控股</Option>
                <Option value="supplier3">上海医药集团</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="采购价格"
              name="purchasePrice"
              rules={[{ required: true, message: '请输入采购价格' }]}
            >
              <InputNumber 
                min={0} 
                step={0.01} 
                placeholder="输入价格" 
                style={{ width: '100%' }}
                prefix="¥"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="货架位置"
              name="location"
              rules={[{ required: true, message: '请输入货架位置' }]}
            >
              <Input placeholder="输入货架位置" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="备注"
              name="remarks"
            >
              <Input placeholder="输入备注信息" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" className="btn-primary">
            确认入库
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );

  return (
    <div className="animate-fade-in">
      <Title level={2} className="text-gradient mb-6">药房管理</Title>
      
      {/* 统计卡片 */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="药品总数" 
              value={1256} 
              prefix={<MedicineBoxOutlined className="text-emerald-600 mr-2" />}
              valueStyle={{ color: '#10b981' }}
            />
            <Text type="secondary" className="block mt-2">库存总值 <span className="text-emerald-600">¥125,680</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="待发药处方" 
              value={12} 
              prefix={<FileTextOutlined className="text-teal-600 mr-2" />}
              valueStyle={{ color: '#0d9488' }}
            />
            <Text type="secondary" className="block mt-2">今日已发药 <span className="text-teal-600">36</span></Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="stat-card">
            <Statistic 
              title="库存预警" 
              value={8} 
              prefix={<WarningOutlined className="text-amber-600 mr-2" />}
              valueStyle={{ color: '#f59e0b' }}
            />
            <Text type="secondary" className="block mt-2">近效期 <span className="text-amber-600">5</span></Text>
          </Card>
        </Col>
      </Row>
      
      <Tabs activeKey={activeTab} onChange={setActiveTab} className="mb-6">
        <TabPane tab="药品库存" key="1">
          {/* 操作栏 */}
          <Card className="mb-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button type="primary" icon={<PlusOutlined />} className="btn-primary">
                  新增药品
                </Button>
                <Dropdown menu={{ items: filterOptions }}>
                  <Button icon={<FilterOutlined />}>
                    筛选 <DownOutlined />
                  </Button>
                </Dropdown>
                <Button icon={<BarcodeOutlined />}>
                  扫码查询
                </Button>
              </div>
              <Input.Search
                placeholder="搜索药品名称、ID或批号"
                allowClear
                enterButton={<SearchOutlined />}
                style={{ width: 300 }}
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
          </Card>
          
          {/* 药品表格 */}
          <Card>
            <Table
              columns={medicationColumns}
              dataSource={medications}
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
        
        <TabPane tab="处方发药" key="2">
          {/* 操作栏 */}
          <Card className="mb-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Select defaultValue="today" style={{ width: 150 }}>
                  <Option value="today">今日处方</Option>
                  <Option value="week">本周处方</Option>
                  <Option value="month">本月处方</Option>
                  <Option value="all">全部处方</Option>
                </Select>
                <Select defaultValue="all" style={{ width: 150 }}>
                  <Option value="all">全部状态</Option>
                  <Option value="pending">待发药</Option>
                  <Option value="completed">已发药</Option>
                </Select>
              </div>
              <Input.Search
                placeholder="搜索处方ID或患者姓名"
                allowClear
                enterButton={<SearchOutlined />}
                style={{ width: 300 }}
              />
            </div>
          </Card>
          
          {/* 处方表格 */}
          <Card>
            <Table
              columns={prescriptionColumns}
              dataSource={prescriptions}
              rowKey="key"
              expandable={{
                expandedRowRender: (record) => (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-3">处方药品明细</h4>
                    <Table
                      columns={[
                        { title: '药品名称', dataIndex: 'name', key: 'name' },
                        { title: '规格', dataIndex: 'specification', key: 'specification' },
                        { title: '数量', dataIndex: 'quantity', key: 'quantity' },
                        { title: '用法用量', dataIndex: 'usage', key: 'usage' },
                      ]}
                      dataSource={record.medications}
                      pagination={false}
                      size="small"
                    />
                  </div>
                ),
              }}
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total) => `共 ${total} 条记录`,
              }}
            />
          </Card>
        </TabPane>
        
        <TabPane tab="药品入库" key="3">
          <MedicationEntryForm />
          
          {/* 最近入库记录 */}
          <Card title="最近入库记录">
            <Table
              columns={[
                { title: '入库单号', dataIndex: 'id', key: 'id' },
                { title: '药品名称', dataIndex: 'name', key: 'name' },
                { title: '批号', dataIndex: 'batchNumber', key: 'batchNumber' },
                { title: '数量', dataIndex: 'quantity', key: 'quantity' },
                { title: '入库时间', dataIndex: 'time', key: 'time' },
                { title: '操作人', dataIndex: 'operator', key: 'operator' },
              ]}
              dataSource={[
                { key: '1', id: 'IN20230715001', name: '阿莫西林胶囊', batchNumber: 'B20230101', quantity: 200, time: '2023-07-15 08:30', operator: '张药师' },
                { key: '2', id: 'IN20230715002', name: '布洛芬缓释胶囊', batchNumber: 'B20230205', quantity: 100, time: '2023-07-15 09:15', operator: '张药师' },
                { key: '3', id: 'IN20230714001', name: '氨氯地平片', batchNumber: 'B20230506', quantity: 50, time: '2023-07-14 14:20', operator: '李药师' },
              ]}
              pagination={false}
              size="small"
            />
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PharmacyManagement; 