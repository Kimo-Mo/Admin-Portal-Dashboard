import SideBar from './sidebar/SideBar';

import { Grid, Layout } from 'antd';
import ProductsSidebar from './sidebar/ProductsSidebar';
import Header from './header/DashboardHeader';
import Drawer from './sidebar/Drawer';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;
const DashLayout = () => {
  const screens = Grid.useBreakpoint();

  return (
    <Layout hasSider>
      {screens.md && <ProductsSidebar />}

      <div className="fixed -top-20 md:top-auto bottom-auto md:bottom-0 start-1/2 md:start-0 -translate-x-1/2 md:translate-x-0 -z-1">
        <img src="src/assets/images/Art Work.png" alt="art work" />
      </div>
      <Layout>
        <Header />
        <Layout
          hasSider
          style={{
            padding: '.75rem 1rem 0',
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
