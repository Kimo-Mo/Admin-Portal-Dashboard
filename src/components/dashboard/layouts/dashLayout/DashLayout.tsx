import SideBar from './SideBar';

import { Layout } from 'antd';
import { type ReactNode } from 'react';
import ProductsSidebar from './ProductsSidebar';
import Header from './Header';

const { Content } = Layout;

const DashLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout hasSider>
      <ProductsSidebar />
      <Layout>
        <Header />
        <Layout hasSider style={{ padding: '24px 24px 0' }}>
          <SideBar />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashLayout;
