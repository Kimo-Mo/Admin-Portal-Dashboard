import React, { createContext, useContext, useState } from 'react';
import { useSuccessPopup } from './SuccessPopupProvider';

type ConfirmPopupContextType = {
  openConfirm: boolean;
  setOpenConfirm: (openConfirm: boolean) => void;
  content: {
    icon: React.ReactNode;
    text: string;
  };
  setContent: (content: { icon: React.ReactNode; text: string }) => void;
  onOk: () => void;
  onCancel: () => void;
  success: boolean;
  setSuccess: (success: boolean) => void;
};

export const ConfirmPopupContext = createContext<ConfirmPopupContextType | undefined>(undefined);

type ConfirmPopupProviderProps = {
  children: React.ReactNode;
};

export const ConfirmPopupProvider = ({ children }: ConfirmPopupProviderProps) => {
  const [openConfirm, setOpenConfirm] = useState(false);
  // wether it's success or failure
  const [success, setSuccess] = useState(false);

  const [content, setContent] = useState<{ icon: React.ReactNode; text: string }>({
    icon: null,
    text: '',
  });
  const { setOpenSuccess } = useSuccessPopup();
  const onOk = () => {
    setOpenConfirm(false);
    setOpenSuccess(true);
    setTimeout(() => {
      setOpenSuccess(false);
    }, 3000);
  };
  const onCancel = () => {
    setOpenConfirm(false);
  };
  return (
    <ConfirmPopupContext.Provider
      value={{
        openConfirm,
        setOpenConfirm,
        content,
        setContent,
        onOk,
        onCancel,
        success,
        setSuccess,
      }}>
      {children}
    </ConfirmPopupContext.Provider>
  );
};

export const useConfirmPopup = () => {
  const context = useContext(ConfirmPopupContext);
  if (!context) {
    throw new Error('useConfirmPopup must be used within a ConfirmPopupProvider');
  }
  return context;
};
