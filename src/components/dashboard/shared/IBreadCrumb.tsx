import { useSideBar } from '@/services/contexts';
import { Breadcrumb } from 'antd';
import { ArrowRight2 } from 'iconsax-reactjs';
import { useNavigate } from 'react-router-dom';

const IBreadCrumb = ({ title, child }: { title: string; child?: string }) => {
  const navigate = useNavigate();
  const { setSelectedKey } = useSideBar();
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
          title: child,
          className: 'cursor-pointer',
          onClick: () => {
            setSelectedKey(child || '');
            navigate(`/dashboard/${child}`);
          },
        },
        {
          title: title,
        },
      ]}
    />
  );
};

export default IBreadCrumb;
