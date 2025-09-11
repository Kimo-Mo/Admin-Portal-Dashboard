import { Checkbox } from 'antd';
import { ArrowDown2 } from 'iconsax-reactjs';

function Ticket() {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-card rounded-xl">
      <div className="">
        <Checkbox className="px-4.5" />
        <ArrowDown2 variant="Bulk" className="px-1.5" />
        <p className="text-text font-semibold">Ticket Title 0X</p>
      </div>
    </div>
  );
}

export default Ticket;
