import {
  BankOutlined,
  GlobalOutlined,
  HomeOutlined,
  IssuesCloseOutlined,
  MessageOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
export const mainItems: MenuProps['items'] = [
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
export const downItems: MenuProps['items'] = [
  {
    key: 'issues',
    label: 'Issues',
    icon: <IssuesCloseOutlined />,
  },
  {
    key: 'support',
    label: 'Support',
    icon: <MessageOutlined />,
  },
];
