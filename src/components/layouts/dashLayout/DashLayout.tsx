import SideBar from './sidebar/SideBar';

import { Grid, Layout } from 'antd';
import ProductsSidebar from './sidebar/ProductsSidebar';
import Header from './header/Header';
import Drawer from './sidebar/Drawer';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;
const DashLayout = () => {
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
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashLayout;
