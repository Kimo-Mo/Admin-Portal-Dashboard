import { Sort } from 'iconsax-reactjs';

function TicketDescription() {
  return (
    <div className="px-2 my-2 bg-background rounded-lg py-2.5 flex flex-col gap-2">
      <div className="flex items-center justify-between py-1">
        <p className="text-text/50 text-sm ps-1">Description</p>
        <Sort color={'var(--c-primary)'} />
      </div>
      <div className="max-h-41 flex bg-card rounded-lg p-4 gap-16">
        <div>
          <p className="text-text text-sm leading-6 font-normal">
            Description written describes the ticket issue, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="flex flex-col font-normal">
          <p className="text-xs">Organization</p>
          <p className="text-text text-sm">Name</p>
        </div>
        <div className="flex flex-col font-normal min-w-50">
          <p className="text-xs">Notes</p>
          <p className="text-text text-sm">Notes Written if needed to highlight on something.</p>
        </div>
      </div>
    </div>
  );
}

export default TicketDescription;
