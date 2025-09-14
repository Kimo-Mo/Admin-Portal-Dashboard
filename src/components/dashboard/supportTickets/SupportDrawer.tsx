import { ConfigProvider, Drawer } from 'antd';
import { CloseCircle, Export } from 'iconsax-reactjs';
import SupportDrawerContent from './SupportDrawerContent';
import type { TicketRecord } from '@/types';

interface EditUserDrawerProps {
  open: boolean;
  onClose: () => void;
  ticket: TicketRecord | null;
}

const SupportDrawer = ({ open, onClose, ticket }: EditUserDrawerProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            controlHeightLG: 40,
            paddingInlineLG: 30,
            paddingBlockLG: 12,
            borderRadiusLG: 12,
          },
          Input: {
            borderRadiusLG: 12,
            paddingBlockLG: 16,
            paddingInlineLG: 24,
          },
          Select: {
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
            Ticket Title <Export className="text-text/50" />
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
            paddingInline: '2rem',
          },
        }}>
        <SupportDrawerContent ticket={ticket} />
      </Drawer>
    </ConfigProvider>
  );
};

export default SupportDrawer;
