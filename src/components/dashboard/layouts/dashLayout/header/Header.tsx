import { Select } from 'antd';
import HeaderButton from './HeaderButton';
import { CaretDownIcon, HeadsetIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import SelectLanguage from './SelectLanguage';
import ThemeSwitch from './ThemeSwitch';
// const { Header: AntHeader } = Layout;

const iconStyle = {
  size: 16,
  color: 'var(--c-text)',
  opacity: 0.6,
};

const Header = () => {
  return (
    // <AntHeader
    //   style={{
    //     position: 'sticky',
    //     top: 0,
    //     zIndex: 1,
    //     width: '100%',
    //     display: 'flex',
    //     marginBlock: '1.5rem',
    //     alignItems: 'center',
    //     backgroundColor: 'var(--bg-background)',
    //   }}>

    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center my-6 px-4 w-full">
        <div className="flex justify-between items-center gap-5">
          <img src="/arrow-square-left.svg" sizes="24px" />
          <Select
            defaultValue="Paymob"
            style={{ width: '8rem', height: '3.5rem', border: 'none' }}
            size="large"
          />
        </div>
        <div className="flex justify-between items-base gap-3">
          <HeaderButton icon={<MagnifyingGlassIcon {...iconStyle} />} />
          <ThemeSwitch />
          <SelectLanguage />
          <HeaderButton icon={<HeadsetIcon {...iconStyle} />} />
          <div className="flex justify-between items-center gap-2.5 min-w-30 bg-background-dark px-1 rounded-lg py-1 cursor-pointer text-icon">
            <img src="/user-square.svg" alt="avatar" style={{ width: '32px' }} />
            <span>Ahmed</span>
            <CaretDownIcon size={16} />
          </div>
        </div>
      </div>
    </div>
    // </AntHeader>
  );
};

export default Header;
