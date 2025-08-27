import React from 'react';
import { Button, Modal, ConfigProvider } from 'antd';
import { useConfirmPopup } from '@/services/contexts';

const ConfirmationPopup: React.FC = () => {
  const { content, onOk, onCancel, openConfirm, success } = useConfirmPopup();
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
        {success && (
          <>
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="size-15 bg-success/10 rounded-xl p-3">{content?.icon}</div>
              <p className="text-base leading-5 text-center">{content?.text}</p>
            </div>
            <div className="flex items-center justify-center gap-2.5 mt-6">
              <Button
                size="large"
                onClick={onCancel}
                style={{
                  background: 'var(--c-text)',
                  color: 'var(--c-background)',
                }}>
                Cancel
              </Button>
              <Button size="large" type="primary" onClick={onOk}>
                Yes
              </Button>
            </div>
          </>
        )}
        {!success && (
          <>
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="size-15 bg-success/10 rounded-xl p-3">{content?.icon}</div>
              <p className="text-base leading-5 text-center">{content?.text}</p>
            </div>
            <div className="flex items-center justify-center mt-6">
              <Button
                size="large"
                onClick={onCancel}
                style={{
                  background: 'var(--c-text)',
                  color: 'var(--c-background)',
                }}>
                Ok
              </Button>
            </div>
          </>
        )}
      </Modal>
    </ConfigProvider>
  );
};

export default ConfirmationPopup;
