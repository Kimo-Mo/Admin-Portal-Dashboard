import { createContext, useContext, useState, type ReactNode } from 'react';

type SidebarProduct = 'TI' | 'DW' | 'ASM' | 'BP';

type SideBarContextType = {
  collapsedSideBar: boolean;
  setCollapsedSideBar: (collapsedSideBar: boolean) => void;
  drawerOpened: boolean;
  setDrawerOpened: (drawerOpened: boolean) => void;
  selectedKey: string;
  setSelectedKey: (selectedKey: string) => void;
  selectedProduct: SidebarProduct;
  setSelectedProduct: (selectedProduct: SidebarProduct) => void;
};

export const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [collapsedSideBar, setCollapsedSideBar] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [selectedKey, setSelectedKey] = useState('dashboard');
  const [selectedProduct, setSelectedProduct] = useState<SidebarProduct>('ASM');
  const value = {
    collapsedSideBar,
    setCollapsedSideBar,
    drawerOpened,
    setDrawerOpened,
    selectedKey,
    setSelectedKey,
    selectedProduct,
    setSelectedProduct,
  };
  return <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>;
};

export const useSideBar = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error('useSideBar must be used within a SideBarProvider');
  }
  return context;
};
