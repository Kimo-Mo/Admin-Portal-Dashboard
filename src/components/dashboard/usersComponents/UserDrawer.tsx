import { ConfigProvider, Drawer } from 'antd';
import { CloseCircle, Export } from 'iconsax-reactjs';
import EditUserContent from './EditUserContent';
import AddUserContent from './AddUserContent';
import type { User } from '@/types/users.types';

interface EditUserDrawerProps {
  open: boolean;
  onClose: () => void;
  editUser: User | null;
}

const UserDrawer = ({ open, onClose, editUser }: EditUserDrawerProps) => {
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
        destroyOnClose
        title={
          <h1 className="text-base font-semibold flex items-center justify-between">
            {editUser ? 'User Profile' : 'Add New User'} <Export className="text-text/50" />
          </h1>
        }
        closeIcon={<CloseCircle />}
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
        {editUser ? (
          <EditUserContent editUser={editUser} onClose={onClose} />
        ) : (
          <AddUserContent onClose={onClose} />
        )}
      </Drawer>
    </ConfigProvider>
  );
};

export default UserDrawer;
