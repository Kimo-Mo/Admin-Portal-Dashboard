import ApplyButton from './ui/applyButton';
import { Calender } from './ui/calender';

function CreationDate() {
  return (
    <div className="space-y-1 my-1 ">
      <Calender label="Start Date" />
      <Calender label="End Date" />
      <div className="px-0.5 mt-1.5">
        <ApplyButton />
      </div>
    </div>
  );
}

export default CreationDate;
