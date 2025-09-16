import { Button, DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import { Calendar2 } from 'iconsax-reactjs';
import * as React from 'react';

export function Calender({
  label,
  date,
  setDate,
  firstDateForSecondDateValidation,
}: {
  label: string;
  date: Dayjs | null;
  firstDateForSecondDateValidation?: Dayjs | null;
  setDate: (date: Dayjs | null) => void;
}) {
  const [open, setOpen] = React.useState(false);

  // Check if this is a second date picker (has validation prop)
  const isSecondDatePicker = firstDateForSecondDateValidation !== undefined;

  // Disable if it's second date picker and first date is not selected
  const isDisabled = isSecondDatePicker && !firstDateForSecondDateValidation;

  const handleDateSelect = (value: Dayjs | null) => {
    setDate(value);
    setOpen(false);
  };

  const handleButtonClick = () => {
    if (!isDisabled) {
      setOpen(!open);
    }
  };

  // Disable dates before the first selected date for second date picker
  const disabledDate = (current: Dayjs) => {
    if (isSecondDatePicker && firstDateForSecondDateValidation) {
      return current && current.isBefore(firstDateForSecondDateValidation, 'day');
    }
    return false;
  };

  return (
    <div className="flex flex-col gap-3" style={{ position: 'relative' }}>
      <DatePicker
        value={date}
        onChange={handleDateSelect}
        open={open}
        onOpenChange={setOpen}
        suffixIcon={null}
        showNow={false}
        disabled={isDisabled}
        disabledDate={disabledDate}
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: -1,
        }}
        getPopupContainer={() => document.body}
      />
      <Button
        onClick={handleButtonClick}
        disabled={isDisabled}
        style={{
          backgroundColor: isDisabled ? '' : 'var(--c-card)',
          border: 'none',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          opacity: isDisabled ? 0.6 : 1,
        }}
        className="flex items-center justify-start w-full font-normal max-h-6 py-0.5 rounded-sm hover:text-text !shadow-none">
        <Calendar2 size={15} />
        <span className="font-normal text-[0.8125rem]">
          {date ? date.format('MM/DD/YYYY') : label}
        </span>
      </Button>
    </div>
  );
}
