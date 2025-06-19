import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const { Content } = AntLayout;

const Layout = () => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <AntLayout className="site-layout">
        <Header />
        <Content className="p-6 m-6 bg-white rounded-xl shadow-sm" style={{ paddingLeft: 220 }}>
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout; 