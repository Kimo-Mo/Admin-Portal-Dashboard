import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { ArrowDown2 } from 'iconsax-reactjs';
import { useMemo, useState } from 'react';

const { Option } = Select;

const InvOwnerDrawerContent = ({ onClose }: { onClose: () => void }) => {
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
        setSuccessContent('Owner Invited Successfully');
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
      <Form.Item
        name="email"
        label={<span className="text-text/50">Email</span>}
        rules={[{ required: true, message: 'Please input your email' }]}>
        <Input placeholder="Enter Email" />
      </Form.Item>
      <Form.Item
        name="numberDomains"
        label={<span className="text-text/50">Number of Domains</span>}
        rules={[{ required: true, message: 'Please input the number of domains' }]}>
        <Input placeholder="Enter The Number of Domains" />
      </Form.Item>
      <Form.Item
        name="package"
        label={<span className="text-text/50">Select Package</span>}
        rules={[{ required: true, message: 'Please select the package' }]}>
        <Select placeholder="Select the desired package" suffixIcon={<ArrowDown2 />}>
          <Option value="free">Free Package</Option>
          <Option value="premium">Premium Package</Option>
          <Option value="enterprise">Enterprise Package</Option>
          <Option value="special">Special Package</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="products"
        label={<span className="text-text/50 mt-6">Assigned Products</span>}
        rules={[{ required: true, message: 'Please select at least one product' }]}>
        <Checkbox.Group>
          <div className="flex flex-col gap-8 ">
            <Checkbox value="A">
              <span className="ms-6 relative top-[1px] font-normal text-sm">Product A</span>
            </Checkbox>

            <Checkbox value="B">
              <span className="ms-6 relative top-[1px] font-normal text-sm">Product B</span>
            </Checkbox>

            <Checkbox value="C">
              <span className="ms-6 relative top-[1px] font-normal text-sm">Product C</span>
            </Checkbox>

            <Checkbox value="D">
              <span className="ms-6 relative top-[1px] font-normal text-sm">Product D</span>
            </Checkbox>

            <Checkbox value="E">
              <span className="ms-6 relative top-[1px] font-normal text-sm">Product E</span>
            </Checkbox>
          </div>
        </Checkbox.Group>
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
          Invite
        </Button>
      </div>
    </Form>
  );
};

export default InvOwnerDrawerContent;
