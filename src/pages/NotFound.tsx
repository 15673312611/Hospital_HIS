import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { MedicineBoxOutlined } from '@ant-design/icons';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      <div className="w-full max-w-2xl p-8">
        <Result
          status="404"
          title="页面不存在"
          subTitle="抱歉，您访问的页面不存在或已被移除。"
          icon={
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-5xl shadow-lg">
                <MedicineBoxOutlined />
              </div>
            </div>
          }
          extra={
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button type="primary" size="large" className="btn-gradient">
                <Link to="/dashboard">返回首页</Link>
              </Button>
              <Button size="large">
                <Link to="/help">帮助中心</Link>
              </Button>
            </div>
          }
          className="shadow-xl rounded-2xl border border-gray-100 bg-white"
        />
        <div className="text-center mt-8 text-gray-500">
          <p>医院信息系统 &copy; {new Date().getFullYear()} 版权所有</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 