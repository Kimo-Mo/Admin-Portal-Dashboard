import { Drawer as AntdDrawer } from 'antd';
import SideBarContent from './shared/SideBarContent';
import ThemeSwitch from '../header/ThemeSwitch';
import SelectLanguage from '../header/SelectLanguage';
import { useSideBar } from '@/services/contexts';
import ProductsSidebar from './ProductsSidebar';

const Drawer = () => {
  const { drawerOpened, setDrawerOpened } = useSideBar();
  return (
    <AntdDrawer
      destroyOnHidden
      title={<img src="/images/Full Logo.png" alt="dark atlas logo" />}
      placement="left"
      classNames={{
        header: '*:flex-row-reverse bg-background',
        body: 'bg-background flex flex-col gap-4',
      }}
      styles={{
        header: { borderBottom: '1px solid var(--c-border)' },
        body: { paddingInline: '20px' },
      }}
      open={drawerOpened}
      onClose={() => setDrawerOpened(false)}>
      <div className="flex-1">
        <SideBarContent />
      </div>
      <div className="flex flex-col items-center gap-4 mt-4 mr-0.5">
        <div>
          <ProductsSidebar />
        </div>
        <div className="flex gap-4">
          <ThemeSwitch />
          <SelectLanguage />
        </div>
      </div>
    </AntdDrawer>
  );
};

export default Drawer;
