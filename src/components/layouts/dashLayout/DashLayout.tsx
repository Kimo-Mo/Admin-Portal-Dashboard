import SideBar from './sidebar/SideBar';

import { Grid, Layout } from 'antd';
import { type ReactNode } from 'react';
import ProductsSidebar from './sidebar/ProductsSidebar';
import Header from './header/Header';
import Drawer from './sidebar/Drawer';

const { Content } = Layout;
const DashLayout = ({ children }: { children: ReactNode }) => {
  const screens = Grid.useBreakpoint();

  return (
    <Layout hasSider>
      {screens.md && <ProductsSidebar />}
      <Layout>
        <Header />
        <Layout
          hasSider
          style={{
            padding: '.75rem 1rem 0',
            borderTop: '1px solid var(--c-border)',
          }}>
          {screens.md && <SideBar />}
          {!screens.md && <Drawer />}
          <Content
            style={{
              margin: '1rem 1rem 0',
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
