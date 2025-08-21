import { Select } from 'antd';
import React from 'react';

const flagStyle: React.CSSProperties = {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  objectFit: 'cover',
  verticalAlign: 'middle',
};

const options = [
  {
    label: (
      <span>
        <img
          src="/flags/us.png" // ← replace with your image path
          alt="EN"
          style={flagStyle}
        />
      </span>
    ),
    value: 'en',
  },
  {
    label: (
      <span>
        <img src="/flags/fr.png" alt="FR" style={flagStyle} />
      </span>
    ),
    value: 'fr',
  },
];

function SelectLanguage() {
  return (
    <Select
      defaultValue="en"
      style={{
        height: '40px',
        border: 'none',
      }}
      options={options}
    />
  );
}

export default SelectLanguage;
