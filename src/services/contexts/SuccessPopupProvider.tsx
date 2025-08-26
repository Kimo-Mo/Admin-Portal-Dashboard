import React, { createContext, useContext, useState } from 'react';

interface SuccessPopupContextType {
  openSuccess: boolean;
  setOpenSuccess: (openSuccess: boolean) => void;
  successContent: string;
  setSuccessContent: (successContent: string) => void;
}

export const SuccessPopupContext = createContext<SuccessPopupContextType | undefined>(undefined);

export const SuccessPopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [successContent, setSuccessContent] = useState<string>('');
  return (
    <SuccessPopupContext.Provider
      value={{
        openSuccess,
        setOpenSuccess,
        successContent,
        setSuccessContent,
      }}>
      {children}
    </SuccessPopupContext.Provider>
  );
};

export const useSuccessPopup = () => {
  const context = useContext(SuccessPopupContext);
  if (!context) {
    throw new Error('useSuccessPopup must be used within a SuccessPopupProvider');
  }
  return context;
};
