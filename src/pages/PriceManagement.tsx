import React, { useState } from 'react'
import { 
  Card, 
  Table, 
  Button, 
  Space, 
  Input, 
  Select, 
  DatePicker, 
  Modal, 
  Form, 
  InputNumber,
  Tag,
  Tooltip,
  Popconfirm,
  message
} from 'antd'
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  SearchOutlined,
  DollarOutlined,
  HistoryOutlined
} from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'

const { Search } = Input
const { Option } = Select

interface PriceItem {
  key: string
  productName: string
  category: string
  currentPrice: number
  originalPrice: number
  discount: number
  status: 'active' | 'inactive' | 'promotion'
  lastUpdated: string
  updatedBy: string
}

const PriceManagement: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingRecord, setEditingRecord] = useState<PriceItem | null>(null)
  const [form] = Form.useForm()

  // 模拟数据
  const data: PriceItem[] = [
    {
      key: '1',
      productName: 'iPhone 15 Pro',
      category: '电子产品',
      currentPrice: 8999,
      originalPrice: 9999,
      discount: 10,
      status: 'active',
      lastUpdated: '2024-01-15',
      updatedBy: '管理员',
    },
    {
      key: '2',
      productName: 'MacBook Air M2',
      category: '电子产品',
      currentPrice: 7999,
      originalPrice: 8999,
      discount: 11,
      status: 'promotion',
      lastUpdated: '2024-01-14',
      updatedBy: '管理员',
    },
    {
      key: '3',
      productName: 'AirPods Pro',
      category: '配件',
      currentPrice: 1999,
      originalPrice: 1999,
      discount: 0,
      status: 'active',
      lastUpdated: '2024-01-13',
      updatedBy: '管理员',
    },
    {
      key: '4',
      productName: 'iPad Air',
      category: '电子产品',
      currentPrice: 4599,
      originalPrice: 4799,
      discount: 4,
      status: 'inactive',
      lastUpdated: '2024-01-12',
      updatedBy: '管理员',
    },
  ]

  const columns: ColumnsType<PriceItem> = [
    {
      title: '产品名称',
      dataIndex: 'productName',
      key: 'productName',
      sorter: (a, b) => a.productName.localeCompare(b.productName),
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      filters: [
        { text: '电子产品', value: '电子产品' },
        { text: '配件', value: '配件' },
      ],
      onFilter: (value, record) => record.category === value,
    },
    {
      title: '当前价格',
      dataIndex: 'currentPrice',
      key: 'currentPrice',
      render: (price: number) => `¥${price.toLocaleString()}`,
      sorter: (a, b) => a.currentPrice - b.currentPrice,
    },
    {
      title: '原价',
      dataIndex: 'originalPrice',
      key: 'originalPrice',
      render: (price: number) => `¥${price.toLocaleString()}`,
    },
    {
      title: '折扣',
      dataIndex: 'discount',
      key: 'discount',
      render: (discount: number) => (
        <Tag color={discount > 0 ? 'red' : 'default'}>
          {discount > 0 ? `${discount}% OFF` : '无折扣'}
        </Tag>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusConfig = {
          active: { color: 'green', text: '正常' },
          inactive: { color: 'default', text: '停用' },
          promotion: { color: 'orange', text: '促销' },
        }
        const config = statusConfig[status as keyof typeof statusConfig]
        return <Tag color={config.color}>{config.text}</Tag>
      },
      filters: [
        { text: '正常', value: 'active' },
        { text: '停用', value: 'inactive' },
        { text: '促销', value: 'promotion' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: '最后更新',
      dataIndex: 'lastUpdated',
      key: 'lastUpdated',
      sorter: (a, b) => new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime(),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="编辑价格">
            <Button 
              type="text" 
              icon={<EditOutlined />} 
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Tooltip title="价格历史">
            <Button 
              type="text" 
              icon={<HistoryOutlined />} 
              onClick={() => handleHistory(record)}
            />
          </Tooltip>
          <Popconfirm
            title="确定要删除这个价格记录吗？"
            onConfirm={() => handleDelete(record.key)}
            okText="确定"
            cancelText="取消"
          >
            <Tooltip title="删除">
              <Button 
                type="text" 
                danger 
                icon={<DeleteOutlined />} 
              />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const handleAdd = () => {
    setEditingRecord(null)
    form.resetFields()
    setIsModalVisible(true)
  }

  const handleEdit = (record: PriceItem) => {
    setEditingRecord(record)
    form.setFieldsValue(record)
    setIsModalVisible(true)
  }

  const handleDelete = (key: string) => {
    message.success('删除成功')
    // 这里应该调用API删除数据
  }

  const handleHistory = (record: PriceItem) => {
    message.info(`查看 ${record.productName} 的价格历史`)
    // 这里应该打开价格历史弹窗
  }

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields()
      if (editingRecord) {
        message.success('更新成功')
      } else {
        message.success('添加成功')
      }
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      console.error('表单验证失败:', error)
    }
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  return (
    <div className="space-y-6">
      {/* 搜索和操作栏 */}
      <Card className="card-shadow">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <Search
              placeholder="搜索产品名称"
              allowClear
              style={{ width: 250 }}
              onSearch={(value) => console.log('搜索:', value)}
            />
            <Select
              placeholder="选择分类"
              allowClear
              style={{ width: 150 }}
              onChange={(value) => console.log('分类筛选:', value)}
            >
              <Option value="电子产品">电子产品</Option>
              <Option value="配件">配件</Option>
            </Select>
            <Select
              placeholder="选择状态"
              allowClear
              style={{ width: 120 }}
              onChange={(value) => console.log('状态筛选:', value)}
            >
              <Option value="active">正常</Option>
              <Option value="inactive">停用</Option>
              <Option value="promotion">促销</Option>
            </Select>
          </div>
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={handleAdd}
          >
            添加价格
          </Button>
        </div>
      </Card>

      {/* 价格表格 */}
      <Card className="card-shadow">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            total: data.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => 
              `第 ${range[0]}-${range[1]} 条/共 ${total} 条`,
          }}
          scroll={{ x: 1200 }}
        />
      </Card>

      {/* 添加/编辑价格弹窗 */}
      <Modal
        title={editingRecord ? '编辑价格' : '添加价格'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={600}
        okText="确定"
        cancelText="取消"
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ status: 'active' }}
        >
          <Form.Item
            name="productName"
            label="产品名称"
            rules={[{ required: true, message: '请输入产品名称' }]}
          >
            <Input placeholder="请输入产品名称" />
          </Form.Item>
          
          <Form.Item
            name="category"
            label="产品分类"
            rules={[{ required: true, message: '请选择产品分类' }]}
          >
            <Select placeholder="请选择产品分类">
              <Option value="电子产品">电子产品</Option>
              <Option value="配件">配件</Option>
            </Select>
          </Form.Item>
          
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="currentPrice"
              label="当前价格"
              rules={[{ required: true, message: '请输入当前价格' }]}
            >
              <InputNumber
                placeholder="请输入价格"
                min={0}
                precision={2}
                style={{ width: '100%' }}
                addonBefore="¥"
              />
            </Form.Item>
            
            <Form.Item
              name="originalPrice"
              label="原价"
              rules={[{ required: true, message: '请输入原价' }]}
            >
              <InputNumber
                placeholder="请输入原价"
                min={0}
                precision={2}
                style={{ width: '100%' }}
                addonBefore="¥"
              />
            </Form.Item>
          </div>
          
          <Form.Item
            name="status"
            label="状态"
            rules={[{ required: true, message: '请选择状态' }]}
          >
            <Select placeholder="请选择状态">
              <Option value="active">正常</Option>
              <Option value="inactive">停用</Option>
              <Option value="promotion">促销</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default PriceManagement 