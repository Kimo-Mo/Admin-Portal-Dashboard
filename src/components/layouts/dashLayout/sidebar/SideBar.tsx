import {
  BankOutlined,
  GlobalOutlined,
  HomeOutlined,
  MessageOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Menu, type MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';

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
  const [selectedKey, setSelectedKey] = useState('dashboard');
  return (
    <Sider breakpoint="lg" style={siderStyle} className="*:flex *:flex-col *:justify-between">
      <Menu
        style={{
          backgroundColor: 'transparent',
          fontSize: '16px',
          border: 'none',
        }}
        className="*:border *:border-border"
        mode="inline"
        onClick={(e) => setSelectedKey(e.key)}
        selectedKeys={[selectedKey]}
        items={items}
      />
      <Menu
        style={{
          backgroundColor: 'transparent',
          fontSize: '16px',
          border: 'none',
        }}
        className="*:border *:border-border"
        mode="inline"
        onClick={(e) => setSelectedKey(e.key)}
        selectedKeys={[selectedKey]}
        items={downItems}
      />
    </Sider>
  );
};

export default SideBar;
