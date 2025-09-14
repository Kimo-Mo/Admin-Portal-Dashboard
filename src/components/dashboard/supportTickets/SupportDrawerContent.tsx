import type { TicketRecord } from '@/types';
import { Form, Input, Select } from 'antd';
import { useEffect } from 'react';

const SupportDrawerContent = ({ ticket }: { ticket: TicketRecord | null }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (ticket) {
      form.setFieldsValue(ticket);
    }
  }, [ticket, form]);
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 py-2 mb-4">
        <div className="flex items-center gap-2">
          <p>Status : </p>
          <Select
            value={ticket?.status}
            style={{ width: 120 }}
            options={[
              { value: 'pending', label: 'Pending' },
              { value: 'in-progress', label: 'In Progress' },
              { value: 'completed', label: 'Completed' },
            ]}
          />
        </div>
        <div className="flex items-center gap-2">
          <p>Priority : </p>
          <Select
            value={ticket?.priority}
            style={{ width: 120 }}
            options={[
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
            ]}
          />
        </div>
      </div>
      <Form form={form} size="large" layout="vertical" requiredMark={false}>
        <Form.Item
          name="description"
          label={<span className="text-text/50">Description</span>}
          rules={[{ required: true, message: 'Please input your email' }]}>
          <Input.TextArea
            placeholder="Enter Description"
            className="!resize-none !min-h-40"
          />
        </Form.Item>
        <Form.Item
          name="organization"
          label={<span className="text-text/50">Organization</span>}
          rules={[{ required: true, message: 'Please input the number of domains' }]}>
          <Input placeholder="Enter Organization" />
        </Form.Item>
        <Form.Item
          name="notes"
          label={<span className="text-text/50">Notes</span>}
          rules={[{ required: true, message: 'Please select the package' }]}>
          <Input.TextArea placeholder="Enter Notes" />
        </Form.Item>
        <Form.Item
          name="creationDate"
          label={<span className="text-text/50">Creation Date</span>}
          rules={[{ required: true, message: 'Please select the package' }]}>
          <Input placeholder="Enter Creation Date" />
        </Form.Item>
        <Form.Item
          name="updated"
          label={<span className="text-text/50">Updated</span>}
          rules={[{ required: true, message: 'Please select the package' }]}>
          <Input placeholder="Enter Updated" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default SupportDrawerContent;
