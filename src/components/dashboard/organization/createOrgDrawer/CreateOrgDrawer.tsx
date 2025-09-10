import { Button, ConfigProvider, Drawer, Form, message, Steps } from 'antd';
import { Box, Building, CloseCircle, Export, User } from 'iconsax-reactjs';
import { useCallback, useMemo, useState } from 'react';
import FormStep from './FormStep';
import {
  ORGANIZATION_INFO_FIELDS,
  OWNER_INFO_FIELDS,
  PACKAGE_INFO_FIELDS,
  type FormFieldConfig,
} from './StepFields';

interface CreateOrgDrawerProps {
  createOrgDrawer: boolean;
  onClose: () => void;
}

interface StepConfig {
  title: string;
  icon: React.ReactNode;
  fields: FormFieldConfig[];
}

const STEPS_CONFIG: StepConfig[] = [
  {
    title: 'Owner Info',
    icon: <User />,
    fields: OWNER_INFO_FIELDS,
  },
  {
    title: 'Organization Info',
    icon: <Building />,
    fields: ORGANIZATION_INFO_FIELDS,
  },
  {
    title: 'Package Info',
    icon: <Box />,
    fields: PACKAGE_INFO_FIELDS,
  },
];

const CreateOrgDrawer = ({ createOrgDrawer, onClose }: CreateOrgDrawerProps) => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleNext = useCallback(() => {
    setCurrent((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => prev - 1);
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log('Form values:', values);

      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      message.success('Organization created successfully!');
      form.resetFields();
      setCurrent(0);
      onClose();
    } catch {
      message.error('Please fill in all required fields correctly');
    } finally {
      setLoading(false);
    }
  }, [form, onClose]);

  const stepsItems = useMemo(
    () =>
      STEPS_CONFIG.map((step) => ({
        title: step.title,
        icon: step.icon,
      })),
    []
  );

  // Render all steps but only show the current one
  const allStepsContent = useMemo(
    () => (
      <Form
        form={form}
        layout="vertical"
        size="large"
        requiredMark={false}
        style={{ backgroundColor: 'var(--c-background)', maxWidth: 'none', border: 'none' }}>
        {STEPS_CONFIG.map((step, index) => (
          <div key={index} style={{ display: index === current ? 'block' : 'none' }}>
            <FormStep fields={step.fields} />
          </div>
        ))}
      </Form>
    ),
    [current, form]
  );

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            paddingInlineLG: 48,
            paddingBlockLG: 12,
            borderRadiusLG: 12,
          },
          Input: {
            borderRadiusLG: 12,
          },
        },
      }}>
      <Drawer
        width={543}
        destroyOnHidden
        title={
          <h1 className="text-base font-semibold flex items-center justify-between">
            Create New Organization <Export className="text-text/50" />
          </h1>
        }
        closeIcon={<CloseCircle />}
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={createOrgDrawer}
        classNames={{
          header: '*:flex-row-reverse bg-background',
          body: 'bg-background flex flex-col gap-13',
        }}
        styles={{
          header: { borderBottom: '1px solid var(--c-border)', padding: '1rem' },
          body: {
            paddingInline: '1rem',
            paddingBlock: '0.75rem',
          },
        }}>
        <Steps
          current={current}
          items={stepsItems}
          labelPlacement="vertical"
          onChange={(value) => setCurrent(value)}
        />
        <div>{allStepsContent}</div>
        <div className="flex items-center justify-end gap-2">
          {current > 0 && (
            <Button
              size="large"
              onClick={handlePrev}
              style={{
                background: 'linear-gradient(90deg, #281543 , #0E2248 )',
                color: '#fff',
              }}
              disabled={loading}>
              Previous
            </Button>
          )}
          {current === STEPS_CONFIG.length - 1 ? (
            <Button type="primary" size="large" loading={loading} onClick={handleSubmit}>
              Create Organization
            </Button>
          ) : (
            <Button type="primary" size="large" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </Drawer>
    </ConfigProvider>
  );
};
export default CreateOrgDrawer;
