import { useState } from 'react';
import { Layout, Input, Badge, Avatar, Dropdown, Space, Button, Divider, Statistic } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  SearchOutlined,
  MedicineBoxOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import type { ChangeEvent } from 'react';

const { Header } = Layout;

const AppHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  // 用户菜单项
  const userMenuItems: MenuProps['items'] = [
    {
      key: '1',
      label: '个人资料',
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: '账户设置',
      icon: <SettingOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: '退出登录',
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  // 通知菜单项
  const notificationItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className="max-w-xs">
          <div className="font-medium">急诊患者入院</div>
          <div className="text-gray-500 text-xs mt-1">张三(急诊)已入院，需立即处理</div>
          <div className="text-gray-400 text-xs mt-1">5分钟前</div>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="max-w-xs">
          <div className="font-medium">检验结果就绪</div>
          <div className="text-gray-500 text-xs mt-1">李四的血常规检验结果已出，请查看</div>
          <div className="text-gray-400 text-xs mt-1">15分钟前</div>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div className="max-w-xs">
          <div className="font-medium">药品库存预警</div>
          <div className="text-gray-500 text-xs mt-1">阿莫西林胶囊库存不足，请及时补充</div>
          <div className="text-gray-400 text-xs mt-1">30分钟前</div>
        </div>
      ),
    },
    {
      key: '4',
      label: (
        <div className="max-w-xs">
          <div className="font-medium">系统维护通知</div>
          <div className="text-gray-500 text-xs mt-1">系统将于今晚23:00-次日凌晨2:00进行维护</div>
          <div className="text-gray-400 text-xs mt-1">2小时前</div>
        </div>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '5',
      label: <div className="text-center text-emerald-600">查看全部通知</div>,
    },
  ];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Header className="bg-white p-0 flex items-center justify-between shadow-sm h-16">
      {/* 左侧品牌区域 */}
      <div className="flex items-center pl-6">
        <MedicineBoxOutlined className="text-2xl text-emerald-600 mr-2" />
        <span className="text-lg font-bold text-gray-800">医院信息系统</span>
      </div>

      {/* 中间搜索区域 */}
      <div className="flex-1 flex justify-center px-4">
        <Input
          placeholder="搜索患者、医生、科室..."
          prefix={<SearchOutlined className="text-gray-400" />}
          value={searchValue}
          onChange={handleSearchChange}
          className="max-w-md rounded-full border-gray-200 hover:border-emerald-500 focus:border-emerald-500"
        />
      </div>

      {/* 右侧功能区域 */}
      <div className="flex items-center pr-6 space-x-4">
        {/* 统计数据 */}
        <div className="hidden md:flex items-center space-x-6 mr-4">
          <Statistic 
            title="今日门诊" 
            value={124} 
            className="custom-statistic"
            valueStyle={{ color: '#10b981', fontSize: '18px' }}
          />
          <Divider type="vertical" className="h-8" />
          <Statistic 
            title="住院患者" 
            value={68} 
            className="custom-statistic"
            valueStyle={{ color: '#0d9488', fontSize: '18px' }}
          />
          <Divider type="vertical" className="h-8" />
          <Statistic 
            title="待处理" 
            value={12} 
            className="custom-statistic"
            valueStyle={{ color: '#f59e0b', fontSize: '18px' }}
          />
        </div>
        
        {/* 排班按钮 */}
        <Button 
          type="default"
          icon={<CalendarOutlined />}
          className="flex items-center border-gray-200 hover:border-emerald-500 hover:text-emerald-600"
        >
          排班
        </Button>
        
        {/* 帮助按钮 */}
        <Button 
          type="default"
          icon={<QuestionCircleOutlined />}
          className="flex items-center border-gray-200 hover:border-emerald-500 hover:text-emerald-600"
        >
          帮助
        </Button>
        
        {/* 通知 */}
        <Dropdown
          menu={{ items: notificationItems }}
          placement="bottomRight"
          arrow
          trigger={['click']}
        >
          <Badge count={4} overflowCount={99} size="small">
            <Button 
              type="default" 
              shape="circle" 
              icon={<BellOutlined />}
              className="flex items-center justify-center border-gray-200 hover:border-emerald-500 hover:text-emerald-600"
            />
          </Badge>
        </Dropdown>
        
        {/* 用户菜单 */}
        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
          <Space className="cursor-pointer">
            <Avatar
              size={36}
              icon={<UserOutlined />}
              className="bg-gradient-to-r from-emerald-500 to-teal-600"
            />
            <span className="hidden md:inline-block">李医生</span>
          </Space>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader; 