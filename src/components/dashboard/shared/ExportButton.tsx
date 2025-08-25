import { Button } from 'antd';
import { Export } from 'iconsax-reactjs';

const ExportButton = ({ title }: { title?: string }) => {
  return (
    <Button
      size="large"
      icon={<Export variant="Bulk" />}
      style={{
        background: 'linear-gradient(90deg, #281543 , #0E2248 )',
        color: '#fff',
      }}>
      Export {title}
    </Button>
  );
};

export default ExportButton;
