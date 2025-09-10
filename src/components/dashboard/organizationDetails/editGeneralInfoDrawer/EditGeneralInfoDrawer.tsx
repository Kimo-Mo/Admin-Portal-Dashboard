import { ConfigProvider, Drawer } from 'antd';
import { CloseCircle, Export } from 'iconsax-reactjs';
import EditGeneralInfoDrawerContent from './EditGeneralInfoDrawerContent';
import type { DataRecord } from '@/types';

interface EditUserDrawerProps {
  open: boolean;
  onClose: () => void;
  OrgInfo: DataRecord | null;
}

const EditGeneralInfoDrawer = ({ open, onClose, OrgInfo }: EditUserDrawerProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            controlHeightLG: 48,
            paddingInlineLG: 16,
            paddingBlockLG: 12,
            borderRadiusLG: 12,
            fontSizeLG: 16,
          },
          Input: {
            borderRadiusLG: 12,
            paddingBlockLG: 16,
            paddingInlineLG: 18,
            controlHeightLG: 56,
          },
          Select: {
            optionLineHeight: '38px',
            singleItemHeightLG: 56,
            borderRadiusLG: 12,
            fontSizeLG: 14,
            optionPadding: '8px 12px',
          },
        },
      }}>
      <Drawer
        width={543}
        destroyOnHidden
        title={
          <h1 className="text-base font-semibold flex items-center justify-between">
            General Info <Export className="text-text/50" />
          </h1>
        }
        closeIcon={<CloseCircle />}
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
        classNames={{
          header: '*:flex-row-reverse *:gap-2.5 bg-background',
          body: 'bg-background',
        }}
        styles={{
          header: { borderBottom: '1px solid var(--c-border)', padding: '1rem 2rem' },
          body: {
            paddingInline: '1rem',
          },
        }}>
        <EditGeneralInfoDrawerContent OrgInfo={OrgInfo} onClose={onClose} />
      </Drawer>
    </ConfigProvider>
  );
};

export default EditGeneralInfoDrawer;
