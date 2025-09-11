import Ticket from './Ticket';

function TicketsShower() {
  return (
    <div className="bg-card/50 p-4 gap-3 flex flex-col rounded-xl flex-1">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
}

export default TicketsShower;
