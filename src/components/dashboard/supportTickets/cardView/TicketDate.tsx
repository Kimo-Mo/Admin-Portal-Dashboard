function TicketDate({ type, date }: { type: string; date: string }) {
  return (
    <div className="flex flex-col font-normal">
      <p className="text-xs">{type}</p>
      <p className="text-text text-sm">{date}</p>
    </div>
  );
}

export default TicketDate;
