import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { Button, Form, Input, Select } from 'antd';
import { useMemo, useState } from 'react';

const { Option } = Select;

const AddUserContent = ({ onClose }: { onClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const { setSuccessContent } = useSuccessPopup();
  const { setOpenConfirm } = useConfirmPopup();
  const { setOpenSuccess } = useSuccessPopup();
  const [form] = Form.useForm();

  const onFinish = useMemo(() => {
    return async () => {
      try {
        setLoading(true);
        await form.validateFields();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSuccessContent('User Added Successfully');
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
  }, [form, onClose, setOpenConfirm, setOpenSuccess, setSuccessContent]);

  return (
    <Form form={form} size="large" layout="vertical" onFinish={onFinish} requiredMark={false}>
      <div className="flex items-center gap-4">
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: 'Please input your name' }]}>
          <Input placeholder="Enter First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: 'Please input your name' }]}>
          <Input placeholder="Enter Last Name" />
        </Form.Item>
      </div>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input your email' }]}>
        <Input placeholder="Enter Your Email" />
      </Form.Item>
      <Form.Item
        name="role"
        label="Role"
        rules={[{ required: true, message: 'Please input your role' }]}>
        <Select placeholder="Select Your Role">
          <Option value="admin">Admin</Option>
          <Option value="owner">Owner</Option>
          <Option value="member">Member</Option>
          <Option value="viewer">Viewer</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="organization"
        label="Organization"
        rules={[{ required: true, message: 'Please input your organization' }]}>
        <Input placeholder="Enter Organization" />
      </Form.Item>
      <div className="flex items-center justify-end gap-4 mt-8">
        <Button
          size="large"
          disabled={loading}
          onClick={onClose}
          style={{ background: 'var(--c-text)', color: 'var(--c-background)' }}>
          Cancel
        </Button>
        <Button size="large" type="primary" onClick={onFinish} loading={loading}>
          Confirm
        </Button>
      </div>
    </Form>
  );
};

export default AddUserContent;
