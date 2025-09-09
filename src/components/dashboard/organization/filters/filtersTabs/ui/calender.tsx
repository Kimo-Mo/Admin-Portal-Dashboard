import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar2 } from 'iconsax-reactjs';
import * as React from 'react';

export function Calender({ label }: { label: string }) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            style={{
              backgroundColor: 'var(--c-card)',
              border: 'none',
            }}
            className="flex items-center justify-start w-full font-normal max-h-6 py-0.5 rounded-sm hover:text-text">
            <Calendar2 size={15} />
            <span className="font-normal text-[0.8125rem]">
              {date ? date.toLocaleDateString() : label}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
