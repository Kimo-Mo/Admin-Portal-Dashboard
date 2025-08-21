import { Grid, Select } from 'antd';
import HeaderButton from './HeaderButton';
import { CaretDownIcon, HeadsetIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import SelectLanguage from './SelectLanguage';
import ThemeSwitch from './ThemeSwitch';
import { useSideBar } from '@/services/contexts';

const iconStyle = {
  size: 16,
  color: 'var(--c-text)',
  opacity: 0.6,
};

const Header = () => {
  const { collapsedSideBar, setCollapsedSideBar, drawerOpened, setDrawerOpened } = useSideBar();
  const screens = Grid.useBreakpoint();
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center my-6 px-4 w-full">
        <div className="flex justify-between items-center gap-5">
          {screens.md ? (
            <img
              src="/arrow-square-left.svg"
              sizes="24px"
              className={`cursor-pointer translation-all duration-150 ${
                collapsedSideBar ? '-rotate-180' : ''
              }`}
              onClick={() => setCollapsedSideBar(!collapsedSideBar)}
            />
          ) : (
            <img
              src="/menu.svg"
              sizes="24px"
              className="cursor-pointer"
              onClick={() => setDrawerOpened(!drawerOpened)}
            />
          )}
          {screens.md ? (
            <Select
              defaultValue="Paymob"
              style={{ width: '8rem', height: '3.5rem', border: 'none' }}
              size="large"
            />
          ) : (
            <img src="/Full Logo.png" alt="dark atlas logo" />
          )}
        </div>
        <div className="flex justify-between items-base gap-3">
          <HeaderButton icon={<MagnifyingGlassIcon {...iconStyle} />} />
          {screens.md && <ThemeSwitch />}
          {screens.md && <SelectLanguage />}
          <HeaderButton icon={<HeadsetIcon {...iconStyle} />} />
          <div className="flex justify-between items-center gap-2.5 min-w-30 bg-background-dark px-1 rounded-lg py-1 cursor-pointer text-icon">
            <img src="/user-square.svg" alt="avatar" style={{ width: '32px' }} />
            <span>Ahmed</span>
            <CaretDownIcon size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
