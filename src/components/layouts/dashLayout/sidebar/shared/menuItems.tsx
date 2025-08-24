import type { MenuProps } from 'antd';
import BankIcon from '@/assets/customIcons/org_icon.svg?react';
import UsersIcon from '@/assets/customIcons/users_icon.svg?react';
import LayerIcon from '@/assets/customIcons/layer.svg?react';

import { Global, Home, MessageNotif } from 'iconsax-reactjs';
export const mainItems: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <Home color="var(--c-text)" className="opacity-50" />,
  },
  {
    key: 'users',
    label: 'Users',
    icon: <UsersIcon color="var(--c-text)" />,
  },
  {
    key: 'organizations',
    label: 'Organizations',
    icon: <BankIcon />,
  },
  {
    key: 'global',
    label: 'Global',
    icon: <Global color="var(--c-text)" className="opacity-50" />,
  },
];
export const downItems: MenuProps['items'] = [
  {
    key: 'organization',
    label: 'Organization',
    icon: <LayerIcon />,
  },
  {
    key: 'support',
    label: 'Support',
    icon: <MessageNotif color="var(--c-text)" className="opacity-50" />,
  },
];
