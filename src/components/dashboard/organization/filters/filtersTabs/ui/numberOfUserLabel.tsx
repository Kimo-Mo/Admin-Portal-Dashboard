import { Input } from 'antd';
import { useState, type ChangeEvent } from 'react';

function NumberOfUserLabel({ title }: { title: string }) {
  const [number, setNumber] = useState<number>();

  return (
    <Input
      type="text"
      size="small"
      className="flex justify-center items-center w-full rounded-sm bg-card placeholder:text-center"
      id="number"
      placeholder={number ? String(number) : title}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber(+e.target.value)}
    />
  );
}

export default NumberOfUserLabel;
