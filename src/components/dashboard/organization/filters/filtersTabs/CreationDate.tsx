import type { Dayjs } from 'dayjs';
import { useState } from 'react';
import ApplyButton from './ui/applyButton';
import { Calender } from './ui/calender';

function CreationDate() {
  const [firstDate, setFirstDate] = useState<Dayjs | null>(null);
  const [secondDate, setSecondDate] = useState<Dayjs | null>(null);
  return (
    <div className="space-y-1 my-1 ">
      <Calender label="Start Date" date={firstDate} setDate={setFirstDate} />
      <Calender
        label="End Date"
        date={secondDate}
        setDate={setSecondDate}
        firstDateForSecondDateValidation={firstDate}
      />
      <div className="px-0.5 mt-1.5">
        <ApplyButton />
      </div>
    </div>
  );
}

export default CreationDate;
