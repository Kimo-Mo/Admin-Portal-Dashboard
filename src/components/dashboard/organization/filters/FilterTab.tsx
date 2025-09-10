import { ArrowUp2 } from 'iconsax-reactjs';
import { useState } from 'react';

function FilterTab({ title, Content }: { title: string; Content: React.ElementType }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="justify-between w-full flex items-center">
        <h3 className="font-normal text-sm my-2.5">{title}</h3>
        <ArrowUp2
          onClick={() => setIsOpen(!isOpen)}
          className={`transition-transform  ease-in-out duration-400  ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}>
        <div className="overflow-hidden">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default FilterTab;
