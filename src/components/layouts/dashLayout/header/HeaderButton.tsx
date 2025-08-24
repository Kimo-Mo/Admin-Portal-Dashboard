import { Button } from 'antd';
import type { JSX } from 'react';

function HeaderButton({
  icon,
  customStyle,
}: {
  icon: JSX.Element;
  customStyle?: React.CSSProperties;
}) {
  return (
    <Button
      style={{
        height: '2.4rem',
        width: '2.45rem',
        margin: 0,
        padding: 0,
        border: 'none',
        ...customStyle,
      }}>
      {icon}
    </Button>
  );
}

export default HeaderButton;
