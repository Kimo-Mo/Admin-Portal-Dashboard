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
  backgroundColor: 'transparent',
};
const items: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <HomeOutlined className="*:size-6" />,
  },
  {
    key: 'users',
    label: 'Users',
    icon: <TeamOutlined className="*:size-6" />,
  },
  {
    key: 'organizations',
    label: 'Organizations',
    icon: <BankOutlined className="*:size-6" />,
  },
  {
    key: 'global',
    label: 'Global',
    icon: <GlobalOutlined className="*:size-6" />,
  },
];
const downItems: MenuProps['items'] = [
  {
    key: 'organizations',
    label: 'Organizations',
    icon: <BankOutlined className="*:size-6" />,
  },
  {
    key: 'support',
    label: 'Support',
    icon: <MessageOutlined className="*:size-6" />,
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
        style={{ backgroundColor: 'transparent' }}
        mode="inline"
        theme={theme as MenuTheme}
        defaultSelectedKeys={['dashboard']}
        items={items}
      />
      <Menu
        style={{ backgroundColor: 'transparent' }}
        mode="inline"
        theme={theme as MenuTheme}
        defaultSelectedKeys={['dashboard']}
        items={downItems}
      />
    </Sider>
  );
};

export default SideBar;
