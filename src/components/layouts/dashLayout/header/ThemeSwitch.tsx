import { useTheme } from '@/services/contexts';
import { Segmented } from 'antd';
import { Moon, Sun1 } from 'iconsax-reactjs';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (value: 'light' | 'dark' | 'system') => {
    setTheme(value);
  };
  return (
    <Segmented
      style={{ padding: '0', margin: '0' }}
      defaultValue={theme}
      onChange={handleThemeChange}
      options={[
        {
          value: 'light',
          label: (
            <div className="w-full h-full justify-center items-center flex my-3">
              <Sun1
                variant="Bulk"
                size={16}
                color={theme == 'light' ? 'var(--c-primary)' : 'var(--c-text)'}
                opacity={theme == 'light' ? '1' : '0.6'}
              />
            </div>
          ),
        },
        {
          value: 'dark',
          label: (
            <div className="w-full h-full justify-center items-center flex my-3">
              <Moon
                size={16}
                variant="Bulk"
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
