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
  onOk: () => Promise<void>;
  setOnOk: (callback: () => void) => void;
  onCancel: () => void;
  success: boolean;
  setSuccess: (success: boolean) => void;
  modalType: 'success' | 'error';
  setModalType: (modalType: 'success' | 'error') => void;
  loading: boolean;
};

export const ConfirmPopupContext = createContext<ConfirmPopupContextType | undefined>(undefined);

type ConfirmPopupProviderProps = {
  children: React.ReactNode;
};

export const ConfirmPopupProvider = ({ children }: ConfirmPopupProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  // wether it's success or failure
  const [success, setSuccess] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error'>('success');
  const [content, setContent] = useState<{ icon: React.ReactNode; text: string }>({
    icon: null,
    text: '',
  });
  const [customOnOk, setCustomOnOk] = useState<() => void>();

  const { setOpenSuccess } = useSuccessPopup();

  const onOk = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOpenSuccess(true);
      setOpenConfirm(false);
      setTimeout(() => {
        setOpenSuccess(false);
      }, 3000);
      if (customOnOk) {
        customOnOk();
        setCustomOnOk(undefined);
      }
    } catch (error) {
      console.log('Validation failed:', error);
    } finally {
      setLoading(false);
    }
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
        setOnOk: setCustomOnOk,
        onCancel,
        success,
        setSuccess,
        modalType,
        setModalType,
        loading,
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
