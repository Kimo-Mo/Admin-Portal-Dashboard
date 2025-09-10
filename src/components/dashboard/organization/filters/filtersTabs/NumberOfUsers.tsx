import ApplyButton from './ui/applyButton';
import NumberOfUserLabel from './ui/numberOfUserLabel';

function NumberOfUsers() {
  return (
    <div className="flex flex-col gap-1">
      <NumberOfUserLabel title="From" />
      <NumberOfUserLabel title="To" />
      <div className="mt-1 px-[1px]">
        <ApplyButton />
      </div>
    </div>
  );
}

export default NumberOfUsers;
