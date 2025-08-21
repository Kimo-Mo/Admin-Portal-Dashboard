import { useTheme } from '@/services/contexts';
import {
  BankOutlined,
  GlobalOutlined,
  HomeOutlined,
  MessageOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Menu, type MenuProps, type MenuTheme } from 'antd';
import Sider from 'antd/es/layout/Sider';

const siderStyle: React.CSSProperties = {
  overflowY: 'auto',
  overflowX: 'hidden',
  height: 'calc(100vh - 104px)',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};
const items: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    key: 'users',
    label: 'Users',
    icon: <TeamOutlined />,
  },
  {
    key: 'organizations',
    label: 'Organizations',
    icon: <BankOutlined />,
  },
  {
    key: 'global',
    label: 'Global',
    icon: <GlobalOutlined />,
  },
];
const downItems: MenuProps['items'] = [
  {
    key: 'organizations',
    label: 'Organizations',
    icon: <BankOutlined />,
  },
  {
    key: 'support',
    label: 'Support',
    icon: <MessageOutlined />,
  },
];
const SideBar = () => {
  const { theme } = useTheme();
  return (
    <Sider
      breakpoint="lg"
      style={siderStyle}
      theme={theme as MenuTheme}
      className="*:flex *:flex-col *:justify-between">
      <Menu
        style={{
          backgroundColor: 'var(--c-background)',
          fontSize: '16px',
        }}
        className="*:border *:border-border"
        mode="inline"
        theme={theme as MenuTheme}
        defaultSelectedKeys={['dashboard']}
        items={items}
      />
      <Menu
        style={{
          backgroundColor: 'var(--c-background)',
          fontSize: '16px',
        }}
        className="*:border *:border-border"
        mode="inline"
        theme={theme as MenuTheme}
        defaultSelectedKeys={['dashboard']}
        items={downItems}
      />
    </Sider>
  );
};

export default SideBar;
