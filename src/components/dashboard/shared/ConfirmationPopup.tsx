import React from 'react';
import { Button, Modal, ConfigProvider } from 'antd';
import { useConfirmPopup } from '@/services/contexts';

const ConfirmationPopup: React.FC = () => {
  const { content, onOk, onCancel, openConfirm, success, modalType, loading } = useConfirmPopup();
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            paddingInlineLG: 40,
            paddingBlockLG: 10,
            controlHeightLG: 40,
          },
        },
      }}>
      <Modal
        destroyOnHidden
        centered
        width={450}
        closable={false}
        open={openConfirm}
        onOk={onOk}
        footer={null}
        style={{
          padding: '0',
        }}
        styles={{
          content: {
            padding: '36px',
          },
        }}>
        <>
          <div className="flex flex-col justify-center items-center gap-6">
            <div
              className={`size-15 rounded-xl p-3 ${
                modalType === 'success' ? 'bg-success/10' : 'bg-danger/10'
              }`}>
              {content?.icon}
            </div>
            <p className="text-base leading-5 text-center">{content?.text}</p>
          </div>
          <div className="flex items-center justify-center gap-2.5 mt-6">
            <Button
              size="large"
              onClick={onCancel}
              disabled={loading}
              className="w-32"
              style={{
                background: 'var(--c-text)',
                color: 'var(--c-background)',
              }}>
              Cancel
            </Button>
            {success && (
              <Button size="large" type="primary" className="w-32" onClick={onOk} loading={loading}>
                Yes
              </Button>
            )}
          </div>
        </>
      </Modal>
    </ConfigProvider>
  );
};

export default ConfirmationPopup;
