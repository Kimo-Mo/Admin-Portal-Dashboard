import Sider from 'antd/es/layout/Sider';
import SideBarContent from './shared/SideBarContent';
import { useSideBar } from '@/services/contexts';

const siderStyle: React.CSSProperties = {
  overflowY: 'auto',
  overflowX: 'hidden',
  position: 'sticky',
  top: '117px',
  insetInlineStart: 0,
  bottom: 0,
  height: 'calc(100vh - 117px)',
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
