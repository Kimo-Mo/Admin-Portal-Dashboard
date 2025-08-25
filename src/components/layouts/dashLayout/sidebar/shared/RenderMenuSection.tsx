import { useSideBar } from '@/services/contexts';
import { Menu, type MenuProps } from 'antd';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RenderMenuSection = ({ items }: { items: MenuProps['items'] }) => {
  const { selectedKey, setSelectedKey } = useSideBar();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSelect = (key: string) => {
    if (key !== pathname && key !== 'dashboard') {
      setSelectedKey(key);
      navigate(`/dashboard/${key}`);
    }
    if (key === 'dashboard' && pathname !== '/dashboard') {
      setSelectedKey(key);
      navigate('/dashboard');
    }
  };
  useEffect(() => {
    if (pathname !== '/dashboard' && selectedKey === 'dashboard') {
      setSelectedKey(pathname.split('/').pop() || '');
    }
    if (pathname === '/dashboard' && selectedKey !== 'dashboard') {
      setSelectedKey('dashboard');
    }
  }, [pathname, selectedKey, setSelectedKey]);
  return (
    <Menu
      inlineIndent={12}
      style={{
        backgroundColor: 'transparent',
        fontSize: '16px',
        border: 'none',
      }}
      className="*:border *:border-border"
      mode="inline"
      onSelect={(e) => handleSelect(e.key as string)}
      selectedKeys={[selectedKey]}
      items={items}
    />
  );
};

export default RenderMenuSection;
