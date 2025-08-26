import { Modal } from 'antd';
import { useSuccessPopup } from '@/services/contexts';
import { TickCircle } from 'iconsax-reactjs';

const SuccessPopup = () => {
  const { openSuccess, successContent } = useSuccessPopup();
  return (
    <Modal
      destroyOnHidden
      centered
      width={450}
      closable={false}
      open={openSuccess}
      footer={null}
      style={{
        padding: '0',
      }}
      styles={{
        content: {
          paddingInline: '36px',
          paddingBlock: '40px',
        },
      }}>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="size-15 bg-primary/10 rounded-xl p-3">
          <TickCircle variant="Bold" size={36} color="var(--c-primary)" />
        </div>
        <p className="text-xl font-semibold text-center">{successContent}</p>
      </div>
    </Modal>
  );
};

export default SuccessPopup;
