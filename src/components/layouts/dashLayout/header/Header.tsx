import { Grid, Select } from 'antd';
import HeaderButton from './HeaderButton';
import SelectLanguage from './SelectLanguage';
import ThemeSwitch from './ThemeSwitch';
import { useSideBar } from '@/services/contexts';
import {
  ArrowDown2,
  Headphone,
  SearchNormal1,
  ArrowSquareLeft,
  HamburgerMenu,
} from 'iconsax-reactjs';

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
            <ArrowSquareLeft
              variant="Bulk"
              size="24px"
              className={`cursor-pointer translation-all duration-150 ${
                collapsedSideBar ? '-rotate-180' : ''
              }`}
              onClick={() => setCollapsedSideBar(!collapsedSideBar)}
            />
          ) : (
            <HamburgerMenu
              size="24px"
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
            <img src="src/assets/images/Full Logo.png" alt="dark atlas logo" />
          )}
        </div>
        <div className="flex justify-between gap-3">
          <HeaderButton icon={<SearchNormal1 {...iconStyle} />} />
          {screens.md && <ThemeSwitch />}
          {screens.md && <SelectLanguage />}
          <HeaderButton icon={<Headphone {...iconStyle} />} />
          <div className="flex justify-between items-center gap-2.5 bg-background-dark px-1 rounded-lg py-1 cursor-pointer text-icon">
            <img
              src="src/assets/customIcons/user-square.svg"
              alt="avatar"
              style={{ width: '32px' }}
            />
            <span>Ahmed</span>
            <ArrowDown2 size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
