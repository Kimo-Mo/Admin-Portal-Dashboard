import type { DataRecord } from '@/types';
import { Edit, TickCircle } from 'iconsax-reactjs';

const ProductsTab = ({ OrgInfo }: { OrgInfo: DataRecord | null }) => {
  return (
    <article className="px-4 pb-4">
      <div className="bg-background p-4 border border-border rounded-lg my-4 relative capitalize">
        <h3 className="text-lg font-semibold mb-2">current package</h3>
        <p>standard</p>
        <p className="text-text/50 mb-2">
          Secure your business and assets with a comprehensive security plan, advanced protection,
          and expert guidance.
        </p>
        <p>
          start date <span className="text-text/50">{OrgInfo?.creationDate}</span>
        </p>
        <p>
          end date <span className="text-text/50">{OrgInfo?.creationDate}</span>
        </p>
        <div className="flex justify-end absolute top-1 md:top-4 end-1 md:end-4">
          <p className="cursor-pointer rounded-lg border border-border bg-primary/15 p-1">
            <Edit size={20} />
          </p>
        </div>
      </div>
      <div className="bg-background p-4 border border-border rounded-lg my-4 relative capitalize">
        <h3 className="text-lg font-semibold mb-2">assigned products</h3>
        <div className="flex flex-col gap-2">
          {OrgInfo?.products.map((product) => (
            <p key={product} className="flex items-center gap-2">
              <TickCircle size={24} variant="Bold" /> {product}
            </p>
          ))}
        </div>
        <div className="flex justify-end absolute top-1 md:top-4 end-1 md:end-4">
          <p className="cursor-pointer rounded-lg border border-border bg-primary/15 p-1">
            <Edit size={20} />
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductsTab;
