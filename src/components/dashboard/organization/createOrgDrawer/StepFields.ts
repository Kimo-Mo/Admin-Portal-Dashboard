import type { Rule } from 'antd/es/form';

export interface FormFieldConfig {
  name: string;
  label: string;
  placeholder: string;
  type?: 'input' | 'select' | 'date';
  rules?: Rule[];
  options?: { label: string; value: string }[];
}
export const OWNER_INFO_FIELDS: FormFieldConfig[] = [
  {
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Enter First Name',
    rules: [{ required: true, message: 'First name is required' }],
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter Last Name',
    rules: [{ required: true, message: 'Last name is required' }],
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter Email',
    rules: [
      { required: true, message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email' },
    ],
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    placeholder: 'Enter Phone Number',
    rules: [
      { required: true, message: 'Phone number is required' },
      { pattern: /^\d{10,}$/, message: 'Please enter a valid phone number' },
    ],
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter Password',
    rules: [
      { required: true, message: 'Password is required' },
      {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
      },
    ],
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    rules: [
      { required: true, message: 'Please confirm your password' },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('Passwords do not match'));
        },
      }),
    ],
  },
];

export const ORGANIZATION_INFO_FIELDS: FormFieldConfig[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    placeholder: 'Enter Company Name',
    rules: [{ required: true, message: 'Company name is required' }],
  },
  {
    name: 'industry',
    label: 'Industry',
    placeholder: 'Enter Industry',
    rules: [{ required: true, message: 'Industry is required' }],
  },
  {
    name: 'domainUrl',
    label: 'Domain URL',
    placeholder: 'Enter Domain URL',
    rules: [
      { required: true, message: 'Domain URL is required' },
      { type: 'url', message: 'Please enter a valid URL' },
    ],
  },
  {
    name: 'domainsNumber',
    label: 'Domains Number',
    placeholder: 'Enter Domains Number',
    rules: [{ required: true, message: 'Number of domains is required' }],
  },
  {
    name: 'employeeSize',
    label: 'Employee Size',
    placeholder: 'Enter Employee Size',
    rules: [{ required: true, message: 'Employee size is required' }],
  },
  {
    name: 'purpose',
    label: 'Purpose of Organization',
    placeholder: 'Enter Purpose of Organization',
    rules: [{ required: true, message: 'Purpose is required' }],
  },
];

export const PACKAGE_INFO_FIELDS: FormFieldConfig[] = [
  {
    name: 'package',
    label: 'Package',
    placeholder: 'Select Package',
    type: 'select',
    rules: [{ required: true, message: 'Package selection is required' }],
    options: [
      { label: 'Basic', value: 'basic' },
      { label: 'Standard', value: 'standard' },
      { label: 'Premium', value: 'premium' },
    ],
  },
  {
    name: 'startDate',
    label: 'Start Date',
    placeholder: 'Select Start Date',
    type: 'date',
    rules: [{ required: true, message: 'Start date is required' }],
  },
  {
    name: 'endDate',
    label: 'End Date',
    placeholder: 'Select End Date',
    type: 'date',
    rules: [{ required: true, message: 'End date is required' }],
  },
  {
    name: 'initialCategories',
    label: 'Initial Categories',
    placeholder: 'Select Categories',
    type: 'select',
    rules: [{ required: true, message: 'Categories selection is required' }],
    options: [
      { label: 'Technology', value: 'technology' },
      { label: 'Finance', value: 'finance' },
      { label: 'Healthcare', value: 'healthcare' },
      { label: 'Education', value: 'education' },
    ],
  },
  {
    name: 'assignedProducts',
    label: 'Assigned Products',
    placeholder: 'Enter assigned products',
    rules: [{ required: true, message: 'Assigned products are required' }],
  },
];
