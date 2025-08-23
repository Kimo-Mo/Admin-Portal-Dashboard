import { useSideBar } from '@/services/contexts';
import { Menu, type MenuProps } from 'antd';
const RenderMenuSection = ({ items }: { items: MenuProps['items'] }) => {
  const { selectedKey, setSelectedKey } = useSideBar();
  return (
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
  );
};

export default RenderMenuSection;
