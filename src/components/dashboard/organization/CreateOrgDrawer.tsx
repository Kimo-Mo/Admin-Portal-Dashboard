import { Drawer, Input, Select } from 'antd';
import { Box, Building, CloseCircle, Export, User } from 'iconsax-reactjs';
import { Button, Form, message, Steps } from 'antd';
import { useState } from 'react';

const CreateOrgDrawer = ({
  createOrgDrawer,
  onClose,
}: {
  createOrgDrawer: boolean;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = [
    {
      title: 'Owner Info',
      content: (
        <Form
          size="large"
          layout="vertical"
          form={form}
          style={{ backgroundColor: 'var(--c-background)', maxWidth: 'none', border: 'none' }}>
          <Form.Item label="First Name">
            <Input placeholder="Enter First Name" />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input placeholder="Enter Last Name" />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="Enter Email" />
          </Form.Item>
          <Form.Item label="Phone Number">
            <Input placeholder="Enter Phone Number" />
          </Form.Item>
          <Form.Item label="Password">
            <Input placeholder="Enter Password" />
          </Form.Item>
          <Form.Item label="Confirm Password">
            <Input placeholder="Confirm Password" />
          </Form.Item>
        </Form>
      ),
      icon: <User />,
    },
    {
      title: 'Organization Info',
      content: (
        <Form
          size="large"
          layout="vertical"
          form={form}
          style={{ backgroundColor: 'var(--c-background)', maxWidth: 'none', border: 'none' }}>
          <Form.Item label="Company Name">
            <Input placeholder="Enter Company Name" />
          </Form.Item>
          <Form.Item label="Industry">
            <Input placeholder="Enter Industry" />
          </Form.Item>
          <Form.Item label="Domain URL">
            <Input placeholder="Enter Domain URL" />
          </Form.Item>
          <Form.Item label="Domains Number">
            <Input placeholder="Enter Domains Number" />
          </Form.Item>
          <Form.Item label="Employee Size">
            <Input placeholder="Enter Employee Size" />
          </Form.Item>
          <Form.Item label="Purpose of Organization">
            <Input placeholder="Enter Purpose of Organization" />
          </Form.Item>
        </Form>
      ),
      icon: <Building />,
    },
    {
      title: 'Package Info',
      content: (
        <Form
          size="large"
          layout="vertical"
          form={form}
          style={{ backgroundColor: 'var(--c-background)', maxWidth: 'none', border: 'none' }}>
          <Form.Item label="Package">
            <Select placeholder="Select Package" />
          </Form.Item>
          <div className="flex gap-3">
            <Form.Item label="Start Date">
              <Input placeholder="Start Date" />
            </Form.Item>
            <Form.Item label="End Date">
              <Input placeholder="End Date" />
            </Form.Item>
          </div>
          <Form.Item label="Initial Categories">
            <Select placeholder="Select Categories" />
          </Form.Item>
          <Form.Item label="Assigned Products">
            <Input placeholder="Enter assigned products" />
          </Form.Item>
        </Form>
      ),
      icon: <Box />,
    },
  ];

  return (
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
          scrollbarWidth: 'thin',
          scrollbarGutter: 'stable',
          paddingInline: '1rem',
          paddingBlock: '0.75rem',
        },
      }}>
      <Steps current={current} items={items} labelPlacement="vertical" />
      <div>{items[current].content}</div>
      <div className="flex items-center justify-end gap-2">
        {current > 0 && (
          <Button size="large" onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current === items.length - 1 && (
          <Button
            type="primary"
            size="large"
            onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current < items.length - 1 && (
          <Button type="primary" size="large" onClick={() => next()}>
            Next
          </Button>
        )}
      </div>
    </Drawer>
  );
};

export default CreateOrgDrawer;
