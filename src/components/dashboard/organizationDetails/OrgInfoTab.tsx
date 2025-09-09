import type { DataRecord } from '@/types';
import { Edit } from 'iconsax-reactjs';

const OrgInfoTab = ({ OrgInfo }: { OrgInfo: DataRecord | null }) => {

  return (
    <article className="px-4 pb-4">
      <h3>Organization Info</h3>
      <div className="bg-background p-4 border border-border rounded-lg my-4 relative">
        <div className="grid grid-cols-2 gap-8 md:gap-20 items-start capitalize">
          <table cellSpacing={10}>
            <tbody>
              <tr className="*:leading-6 *:pb-5">
                <td className="text-text/50">Industry</td>
                <td>n/a</td>
              </tr>
              <tr className="*:leading-6 *:pb-5">
                <td className="text-text/50">domains url</td>
                <td>ex.domain.com</td>
              </tr>
              <tr className="*:leading-6 *:pb-5">
                <td className="text-text/50">domains number</td>
                <td>6742</td>
              </tr>
              <tr className="*:leading-6 *:pb-5">
                <td className="text-text/50">Employees Size</td>
                <td>63384</td>
              </tr>
              <tr className="*:leading-6">
                <td className="text-text/50">Creation Date</td>
                <td>{OrgInfo?.creationDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end absolute top-1 md:top-4 end-1 md:end-4">
          <p className="cursor-pointer rounded-lg border border-border bg-primary/15 p-1">
            <Edit size={20} />
          </p>
        </div>
      </div>
      <h3>Owner Info</h3>
      <div className="bg-background p-4 border border-border rounded-lg mt-4 relative ">
        <div className="grid grid-cols-2 gap-8 md:gap-20 items-start capitalize">
          <table cellSpacing={10}>
            <tbody>
              <tr className="*:leading-6 *:pb-5">
                <td className="text-text/50">owner's full name</td>
                <td>{OrgInfo?.owner}</td>
              </tr>
              <tr className="*:leading-6 *:pb-5">
                <td className="text-text/50">owner's email</td>
                <td>ex.user@domain.com</td>
              </tr>
              <tr className="*:leading-6 *:pb-5">
                <td className="text-text/50">owner's phone number</td>
                <td>123456789</td>
              </tr>
              <tr className="*:leading-6 *:pb-5">
                <td className="text-text/50">Creation Date</td>
                <td>{OrgInfo?.creationDate}</td>
              </tr>
              <tr className="*:leading-6">
                <td className="text-text/50">last login</td>
                <td>{OrgInfo?.creationDate}</td>
              </tr>
            </tbody>
          </table>
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

export default OrgInfoTab;
