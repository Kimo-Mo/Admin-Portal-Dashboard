import type { MenuProps } from 'antd';
import { Building, Global, Home, Layer, MessageNotif, Profile2User } from 'iconsax-reactjs';
export const mainItems: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <Home />,
  },
  {
    key: 'users',
    label: 'Users',
    icon: <Profile2User />,
  },
  {
    key: 'organizations',
    label: 'Organizations',
    icon: <Building />,
  },
  {
    key: 'global',
    label: 'Global',
    icon: <Global />,
  },
];
export const downItems: MenuProps['items'] = [
  {
    key: 'organization',
    label: 'Organization',
    icon: <Layer />,
  },
  {
    key: 'support',
    label: 'Support',
    icon: <MessageNotif />,
  },
];
