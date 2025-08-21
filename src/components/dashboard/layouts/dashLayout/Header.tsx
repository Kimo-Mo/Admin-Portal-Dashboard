import { Layout } from 'antd';
const { Header: AntHeader } = Layout;
const Header = () => {
  return (
    <AntHeader
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--bg-background)',
      }}>
      <div className="flex justify-between items-center"></div>
    </AntHeader>
  );
};

export default Header;
