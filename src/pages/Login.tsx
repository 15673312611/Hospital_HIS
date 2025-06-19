import { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Typography, message, Divider } from 'antd';
import { UserOutlined, LockOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);
    
    // 模拟登录请求
    setTimeout(() => {
      setLoading(false);
      
      if (values.username === 'admin' && values.password === 'admin123') {
        message.success('登录成功，欢迎回来！');
        navigate('/dashboard');
      } else {
        message.error('用户名或密码错误，请重试');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-50 to-teal-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-4xl shadow-lg mb-4">
            <MedicineBoxOutlined />
          </div>
          <Title level={2} className="text-gradient">医院信息系统</Title>
          <Text type="secondary">Hospital Information System</Text>
        </div>
        
        <Card 
          className="shadow-2xl border-0 rounded-2xl overflow-hidden animate-fade-in"
          bordered={false}
        >
          <Title level={4} className="text-center mb-6">用户登录</Title>
          
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            size="large"
            layout="vertical"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input 
                prefix={<UserOutlined className="text-gray-400" />} 
                placeholder="用户名" 
                className="rounded-lg py-2"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="密码"
                className="rounded-lg py-2"
              />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-between items-center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住我</Checkbox>
                </Form.Item>
                <a className="text-emerald-600 hover:text-emerald-500">忘记密码？</a>
              </div>
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="w-full h-12 rounded-lg btn-gradient"
                loading={loading}
              >
                登录
              </Button>
            </Form.Item>
            
            <Divider plain>其他登录方式</Divider>
            
            <div className="flex justify-center space-x-6">
              <Button icon={<i className="fab fa-weixin text-green-600" />} shape="circle" />
              <Button icon={<i className="fab fa-qq text-blue-500" />} shape="circle" />
              <Button icon={<i className="fab fa-alipay text-blue-400" />} shape="circle" />
            </div>
          </Form>
        </Card>
        
        <div className="text-center mt-8 text-gray-500">
          <p>医院信息系统 &copy; {new Date().getFullYear()} 版权所有</p>
          <p className="text-xs mt-2">推荐使用Chrome、Edge、Firefox等现代浏览器</p>
        </div>
      </div>
    </div>
  );
};

export default Login; 