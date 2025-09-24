import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { Button, Divider, Form, Input, Select, Switch } from 'antd';
import { ArrowDown2, ArrowRight, Trash } from 'iconsax-reactjs';
import { useEffect, useState } from 'react';
import { useUpdateUser, useDeleteUser } from '@/services/hooks/users.query';
import type { UpdateUserDto, User } from '@/types/users.types';
import { useQueryClient } from '@tanstack/react-query';

const { Option } = Select;

interface EditUserContentProps {
  editUser: User;
  onClose: () => void;
}

const EditUserContent = ({ editUser, onClose }: EditUserContentProps) => {
  const { first_name, last_name, role, status, phone } = editUser;

  const queryClient = useQueryClient();
  const { setSuccessContent, setOpenSuccess } = useSuccessPopup();
  const { setOpenConfirm, setContent, setSuccess, setOnOk, setModalType } = useConfirmPopup();

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [userStatus, setUserStatus] = useState(status);

  useEffect(() => {
    setUserStatus(status);
  }, [status]);
  const { mutateAsync: updateUser } = useUpdateUser();
  const { mutateAsync: deleteUser } = useDeleteUser();

  useEffect(() => {
    if (editUser) {
      form.setFieldsValue(editUser);
    }
  }, [editUser, form]);

  const onFinish = async () => {
    try {
      setLoading(true);
      const formData = await form.validateFields();
      const payload: UpdateUserDto = {
        phone: formData.phone,
        role: formData.role.toLowerCase(),
      };

      await updateUser(
        { id: editUser.id, payload },
        {
          onSuccess: () => {
            setSuccessContent('User Updated Successfully');
            setOpenSuccess(true);
            setOpenConfirm(false);
            queryClient.invalidateQueries({ queryKey: ['users'] });
            setTimeout(() => setOpenSuccess(false), 1000);
            onClose();
          },
        }
      );
    } catch (error) {
      console.log('Validation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = () => {
    setContent({
      icon: <Trash size={36} color="var(--c-danger)" />,
      text: 'Are You Sure You Want To Delete This User?',
    });
    setSuccessContent('User Deleted Successfully');
    setSuccess(true);
    setModalType('error');
    setOpenConfirm(true);

    setOnOk(() => async () => {
      await deleteUser(editUser.id, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['users'] });
          onClose();
        },
      });
    });
  };

  return (
    <>
      <div className="bg-card rounded-xl border border-border p-4 flex justify-between items-center mb-8">
        <div className="flex items-start gap-2">
          <div className="w-[60px] flex items-start justify-center">
            <img src="/images/User Pic.png" alt="User Picture" />
          </div>
          <div>
            <p>
              {first_name} {last_name}
            </p>
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
              userStatus === 'Active' ? 'active' : 'inactive'
            } flex gap-2 my-2.5 ps-4`}>
            <Switch
              checked={userStatus === 'Active'}
              onChange={async (checked) => {
                const newStatus = checked ? 'Active' : 'Inactive';
                setUserStatus(newStatus);

                await updateUser(
                  {
                    id: editUser.id,
                    payload: { status: newStatus },
                  },
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries({ queryKey: ['users'] });
                    },
                  }
                );
              }}
            />
            <span>{userStatus === 'Active' ? 'Active' : 'Inactive'}</span>
          </div>
        </div>
      </div>

      <Form size="large" form={form} layout="vertical" requiredMark={false} onFinish={onFinish}>
        <Form.Item
          style={{ fontSize: 14 }}
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input size="large" placeholder="Enter Your Email" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          initialValue={phone || ''}
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
        <Divider className="!border-border" />
        <h2 className="text-base text-text font-semibold">Details</h2>
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
                <span>{}</span>
              </p>
              <p>Content describes what is the last thing he did.</p>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default EditUserContent;
