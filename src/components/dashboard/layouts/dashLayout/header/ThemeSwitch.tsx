import { useTheme } from '@/services/contexts';
import { MoonStarsIcon, SunDimIcon } from '@phosphor-icons/react';
import { Segmented } from 'antd';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (value: 'light' | 'dark' | 'system') => {
    setTheme(value);
  };
  return (
    <Segmented
      style={{ padding: '0' }}
      defaultValue="dark"
      onChange={handleThemeChange}
      options={[
        {
          value: 'light',
          label: (
            <div className="w-full h-full justify-center items-center flex my-3.5">
              <SunDimIcon
                height={16}
                width={16}
                color={theme == 'light' ? 'var(--c-primary)' : 'var(--c-text)'}
                opacity={theme == 'light' ? '1' : '0.6'}
              />
            </div>
          ),
        },
        {
          value: 'dark',
          label: (
            <div className="w-full h-full justify-center items-center flex my-3.5">
              <MoonStarsIcon
                height={16}
                width={16}
                color={theme == 'dark' ? 'var(--c-primary)' : 'var(--c-text)'}
                opacity={theme == 'dark' ? '1' : '0.6'}
              />
            </div>
          ),
        },
      ]}
    />
  );
}

export default ThemeSwitch;
