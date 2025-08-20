import { useState } from 'react';

type SidebarProduct = 'TI' | 'DW' | 'ASM' | 'BP';

const ProductsSidebar = () => {
  const [active, setActive] = useState<SidebarProduct>('ASM');

  const handleClick = (product: SidebarProduct) => setActive(product);

  return (
    <nav className="h-screen pt-6 px-4 w-20 flex flex-col justify-start items-center text-center bg-background-dark overflow-auto scrollbar-thin scrollbar-gutter-stable sticky top-0 ">
      <div className="logo mb-6">
        <img src="/Full Logo.png" alt="dark atlas logo" />
      </div>
      <ul className="flex flex-col gap-3.5">
        {['TI', 'DW', 'ASM', 'BP'].map((product) => (
          <li
            key={product}
            className={`${
              active === product ? 'bg-primary' : 'bg-background'
            } rounded-full size-9.5 flex items-center justify-center cursor-pointer border border-border font-semibold text-xs`}
            onClick={() => handleClick(product as SidebarProduct)}>
            {product}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductsSidebar;
