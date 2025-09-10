import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { Button, Divider, Form, Input } from 'antd';
import { Trash } from 'iconsax-reactjs';
import { useEffect, useMemo, useState } from 'react';
import type { DataRecord } from '@/types';

interface EditGeneralInfoDrawerContentProps {
  onClose: () => void;
  OrgInfo: DataRecord | null;
}

const EditGeneralInfoDrawerContent = ({ onClose, OrgInfo }: EditGeneralInfoDrawerContentProps) => {
  const { setSuccessContent } = useSuccessPopup();
  const { setOpenConfirm, setContent, setSuccess, setOnOk, setModalType } = useConfirmPopup();
  const { setOpenSuccess } = useSuccessPopup();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

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
      <div className="flex items-center justify-end gap-4 mt-5">
        <Button
          size="large"
          type="primary"
          loading={loading}
          onClick={onFinish}
          style={{ fontSize: 16, width: '150px' }}>
          Save Changes
        </Button>
      </div>
    ),
    [onFinish, loading]
  );

  useEffect(() => {
    form.setFieldsValue({
      name: OrgInfo?.organization,
      email: 'ex.domain.com',
      phoneNumber: '01234567890',
      industry: 'n/a',
      domain: '6742',
      employeesSize: 63384,
    });
  }, [OrgInfo, form]);
  return (
    <>
      <div className="bg-card rounded-xl border border-border p-4 flex justify-between items-center mb-8">
        <div className="flex items-start gap-2">
          <div>
            <p className="text-base">{OrgInfo?.organization}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-4">
          <Trash
            className="text-text/50 cursor-pointer hover:text-danger transition-colors duration-200"
            onClick={handleDeleteUser}
          />
        </div>
      </div>
      <Divider className="!border-border" />
      <Form size="large" form={form} layout="vertical" requiredMark={false} className="!px-4.5">
        <Form.Item
          style={{ fontSize: 14 }}
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input size="large" placeholder="Enter Your Name" />
        </Form.Item>
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
          name="industry"
          label="Industry"
          rules={[{ required: true, message: 'Please select your industry!' }]}>
          <Input size="large" placeholder="Enter Your Industry" className="capitalize" />
        </Form.Item>
        <Form.Item
          name="domain"
          label="Domain"
          rules={[{ required: true, message: 'Please select your domain!' }]}>
          <Input size="large" placeholder="Enter Your Domain" />
        </Form.Item>
        <Form.Item
          name="employeesSize"
          label="Employees Size"
          rules={[{ required: true, message: 'Please select your employees size!' }]}>
          <Input size="large" placeholder="Enter Your Employees Size" />
        </Form.Item>
      </Form>
      {actionButtons}
    </>
  );
};

export default EditGeneralInfoDrawerContent;
