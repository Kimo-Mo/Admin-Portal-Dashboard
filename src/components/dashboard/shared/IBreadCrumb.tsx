import { Breadcrumb } from 'antd';
import { ArrowRight2 } from 'iconsax-reactjs';
import { useNavigate } from 'react-router-dom';

const IBreadCrumb = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <Breadcrumb
      style={{ marginBottom: '0.75rem' }}
      className="*:items-center"
      separator={<ArrowRight2 size={16} className="text-text" />}
      items={[
        {
          title: 'Dashboard',
          className: 'cursor-pointer',
          onClick: () => navigate('/dashboard'),
        },
        {
          title: title,
        },
      ]}
    />
  );
};

export default IBreadCrumb;
