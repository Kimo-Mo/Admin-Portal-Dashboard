import { useSideBar } from '@/services/contexts';
import { Grid } from 'antd';

type SidebarProduct = 'TI' | 'DW' | 'ASM' | 'BP';

const ProductsSidebar = () => {
  const screens = Grid.useBreakpoint();
  const { selectedProduct, setSelectedProduct } = useSideBar();

  const handleClick = (product: SidebarProduct) => setSelectedProduct(product);

  return (
    <nav
      className={` ${
        !screens.md
          ? 'w-full'
          : 'h-screen pt-6 px-4 w-20 flex flex-col justify-start items-center text-center text-text bg-background-dark overflow-auto scrollbar-thin scrollbar-gutter-stable sticky top-0'
      }`}>
      {screens.md && (
        <div className="logo mb-6">
          <img src="src/assets/images/Full Logo.png" alt="dark atlas logo" />
        </div>
      )}
      <ul className={`flex ${screens.md ? 'flex-col' : 'flex-row'} gap-3.5`}>
        {['TI', 'DW', 'ASM', 'BP'].map((product) => (
          <li
            key={product}
            className={`${
              selectedProduct === product ? 'bg-primary text-white' : 'bg-background'
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
