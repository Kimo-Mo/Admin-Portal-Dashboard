import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { Button, Divider, Form, Input, Select, Switch } from 'antd';
import { ArrowDown2, ArrowRight, Trash } from 'iconsax-reactjs';
import { useEffect, useMemo, useState } from 'react';
import type { UserRecord } from './UsersTable';

const { Option } = Select;

interface EditUserContentProps {
  editUser: UserRecord | null;
  onClose: () => void;
}

const EditUserContent = ({ editUser, onClose }: EditUserContentProps) => {
  const { name, role, status, lastLogin } = editUser || {};

  const { setSuccessContent } = useSuccessPopup();
  const { setOpenConfirm, setContent, setSuccess, setOnOk, setModalType } = useConfirmPopup();
  const { setOpenSuccess } = useSuccessPopup();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [userStatus, setUserStatus] = useState(status);

  const handleStatusChange = (isActivating: boolean) => {
    setUserStatus(isActivating);
  };

  useEffect(() => {
    if (editUser) {
      form.setFieldsValue(editUser);
    }
  }, [editUser, form]);

  const onFinish = useMemo(() => {
    return async () => {
      try {
        setLoading(true);
        await form.validateFields();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSuccessContent('User Updated Successfully');
        setOpenSuccess(true);
        setOpenConfirm(false);
        setTimeout(() => {
          setOpenSuccess(false);
        }, 3000);
        onClose();
      } catch (error) {
        console.log('Validation failed:', error);
      } finally {
        setLoading(false);
      }
    };
  }, [form, onClose, setSuccessContent, setOpenConfirm, setOpenSuccess]);

  const handleDeleteUser = () => {
    setContent({
      icon: <Trash size={36} color="var(--c-danger)" />,
      text: 'Are You Sure You Want To Delete This User?',
    });
    setSuccessContent('User Deleted Successfully');
    setSuccess(true);
    setOpenConfirm(true);
    setOnOk(() => onClose);
    setModalType('error');
  };

  const actionButtons = useMemo(
    () => (
      <div className="flex items-center justify-end gap-4 mt-8">
        <Button
          size="large"
          disabled={loading}
          onClick={onClose}
          style={{
            background: 'var(--c-text)',
            color: 'var(--c-background)',
          }}>
          Cancel
        </Button>
        <Button size="large" type="primary" loading={loading} onClick={onFinish}>
          Confirm
        </Button>
      </div>
    ),
    [onClose, onFinish, loading]
  );

  return (
    <>
      <div className="bg-card rounded-xl border border-border p-4 flex justify-between items-center mb-8">
        <div className="flex items-start gap-2">
          <div className="w-[60px] flex items-start justify-center">
            <img src="/images/User Pic.png" alt="User Picture" />
          </div>
          <div>
            <p>{name}</p>
            <p>{role}</p>
            <button className="text-primary flex items-center gap-2 cursor-pointer underline">
              Send Reset Password <ArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end gap-4">
          <Trash
            className="text-text/50 cursor-pointer hover:text-danger transition-colors duration-200"
            onClick={handleDeleteUser}
          />
          <div
            className={`users-table-switch ${
              userStatus ? 'active' : 'inactive'
            } flex gap-2 my-2.5 ps-4`}>
            <Switch checked={userStatus} onChange={handleStatusChange} />{' '}
            <span>{userStatus ? 'Active' : 'Inactive'}</span>
          </div>
        </div>
      </div>
      <Form size="large" form={form} layout="vertical" requiredMark={false}>
        <Form.Item
          style={{ fontSize: 14 }}
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input size="large" placeholder="Enter Your Email" />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone"
          initialValue={'01234567890'}
          rules={[{ required: true, message: 'Please input your phone!' }]}>
          <Input size="large" placeholder="Enter Your Phone" />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true, message: 'Please select your role!' }]}>
          <Select size="large" placeholder="Select Your Role" suffixIcon={<ArrowDown2 />}>
            <Option value="Admin">Admin</Option>
            <Option value="Owner">Owner</Option>
            <Option value="Member">Member</Option>
            <Option value="Viewer">Viewer</Option>
          </Select>
        </Form.Item>
      </Form>
      <div className="flex flex-col gap-4">
        <h2 className="text-base text-text font-semibold">Details</h2>
        <Divider className="!border-border" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-text/90">Organization Details</p>
            <p className="text-text/70 bg-card p-4 rounded-lg">
              Content describes the organization
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-text/90">Last Login Details</p>
            <div className="text-text/70 bg-card p-4 rounded-lg">
              <p>
                <span>Date:</span>
                <span>{lastLogin}</span>
              </p>
              <p>Content describes what is the last thing he did.</p>
            </div>
          </div>
        </div>
      </div>
      {actionButtons}
    </>
  );
};

export default EditUserContent;
