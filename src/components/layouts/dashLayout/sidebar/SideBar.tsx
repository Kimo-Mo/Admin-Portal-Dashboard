import Sider from 'antd/es/layout/Sider';
import SideBarContent from './shared/SideBarContent';
import { useSideBar } from '@/services/contexts';

const siderStyle: React.CSSProperties = {
  overflowY: 'auto',
  overflowX: 'hidden',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const SideBar = () => {
  const { collapsedSideBar } = useSideBar();
  return (
    <Sider
      collapsed={collapsedSideBar}
      breakpoint="lg"
      width={'15.25rem'}
      style={siderStyle}
      className="*:flex *:flex-col *:justify-between">
      <SideBarContent />
    </Sider>
  );
};

export default SideBar;
