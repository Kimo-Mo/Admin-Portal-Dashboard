import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { Button, Checkbox, Form, Select } from 'antd';
import { ArrowDown2, TickSquare } from 'iconsax-reactjs';
import { useCallback, useState } from 'react';

const { Option } = Select;

const EditPackageDrawerContent = ({ onClose }: { onClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const { setContent, setModalType, setSuccess, setOpenConfirm, setOnOk } = useConfirmPopup();
  const { setSuccessContent } = useSuccessPopup();
  const [form] = Form.useForm();

  const onFinish = useCallback(async () => {
    try {
      setLoading(true);
      await form.validateFields();
      setContent({
        icon: <TickSquare variant="Bulk" size={36} className="text-success/60" />,
        text: 'Are you sure you want to apply these changes?',
      });
      setSuccessContent('Changes applied successfully');
      setSuccess(true);
      setOpenConfirm(true);
      setOnOk(() => onClose);
      setModalType('success');
    } catch (error) {
      console.log('Validation failed:', error);
    } finally {
      setLoading(false);
    }
  }, [
    form,
    setOpenConfirm,
    setContent,
    setModalType,
    setSuccess,
    setSuccessContent,
    onClose,
    setOnOk,
  ]);

  return (
    <Form form={form} size="large" layout="vertical" onFinish={onFinish} requiredMark={false}>
      <Form.Item
        initialValue={'standard'}
        name="package"
        label={<span className="text-text/50">Current Package</span>}>
        <Select placeholder="Select the desired package" suffixIcon={<ArrowDown2 />}>
          <Option value="standard">Standard Package</Option>
          <Option value="premium">Premium Package</Option>
          <Option value="enterprise">Enterprise Package</Option>
          <Option value="special">Special Package</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="products"
        initialValue={['A', 'B', 'C']}
        label={null}
        rules={[{ required: true, message: 'Please select at least one product' }]}>
        <Checkbox.Group className="flex flex-col gap-6" name="products">
          <p className="text-text/50">Assigned Products</p>
          <div className="flex flex-col gap-8" id="products">
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
          style={{ background: 'var(--c-text)', color: 'var(--c-background)', width: '128px' }}>
          Cancel
        </Button>
        <Button
          size="large"
          type="primary"
          onClick={onFinish}
          loading={loading}
          style={{ width: '150px' }}>
          Save Changes
        </Button>
      </div>
    </Form>
  );
};

export default EditPackageDrawerContent;
