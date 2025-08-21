import SideBar from './sidebar/SideBar';

import { Layout } from 'antd';
import { type ReactNode } from 'react';
import ProductsSidebar from './sidebar/ProductsSidebar';
import Header from './header/Header';

const { Content } = Layout;

const DashLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout hasSider>
      <ProductsSidebar />
      <Layout>
        <Header />
        <Layout hasSider style={{ padding: '1rem 1rem 0', borderTop: '1px solid var(--c-border)' }}>
          <SideBar />
          <Content
            style={{
              margin: '24px 16px 0',
              overflow: 'initial',
            }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashLayout;
