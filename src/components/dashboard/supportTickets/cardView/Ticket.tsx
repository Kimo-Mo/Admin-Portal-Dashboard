import { Checkbox } from 'antd';
import { ArrowSquareDown } from 'iconsax-reactjs';
import { useState } from 'react';
import TicketDate from './TicketDate';
import TicketDescription from './TicketDescription';
import TicketsTagSelector from './TicketsTagSelector';

function Ticket() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-card rounded-xl">
      <div className="flex items-center justify-between px-4 py-4 ">
        <div className="flex items-center">
          <Checkbox
            style={{
              marginInline: '1rem',
            }}
          />
          <ArrowSquareDown
            variant="Bulk"
            className="text-text/50 cursor-pointer"
            style={{
              marginInline: '0.3125rem',
            }}
            size={24}
            onClick={() => setIsOpen(!isOpen)}
          />
          <p className="text-text font-semibold">Ticket Title 0X</p>
        </div>
        <div className="flex items-center gap-4">
          <TicketsTagSelector values={['High', 'Medium', 'Low']} />
          <TicketsTagSelector values={['Pending', 'In Progress', 'Ignored', 'Closed']} />
          <TicketDate type="Created" date="Oct 10, 2023" />
          <TicketDate type="Updated" date="Oct 15, 2023" />
        </div>
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}>
        <div className="overflow-hidden px-2">{<TicketDescription />}</div>
      </div>
    </div>
  );
}

export default Ticket;
