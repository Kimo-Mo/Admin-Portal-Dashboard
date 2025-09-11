import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { Button, Pagination } from 'antd';
import { Forbidden2, Setting5, TickSquare } from 'iconsax-reactjs';
import { useState } from 'react';
import Filters from '../organization/filters/Filters';
import { ExportButton, IBreadCrumb, SearchInput } from '../shared';
import SupportTable from './SupportTable';
import TicketsShower from './cardView/TicketsShower';

const MainSupportTickets = () => {
  const { setOpenConfirm, setContent, setSuccess, setModalType } = useConfirmPopup();
  const { setSuccessContent } = useSuccessPopup();
  const [selectedRows, setSelectedRows] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isFiltersOpenAnimate, setIsFiltersOpenAnimate] = useState(false);
  const [viewType, setViewType] = useState('table');

  const onExportClick = () => {
    if (selectedRows) {
      setContent({
        icon: <TickSquare variant="Bulk" size={36} className="text-success/60" />,
        text: 'Are You Sure You Want To Export the selected users?',
      });
      setModalType('success');
      setSuccess(true);
      setOpenConfirm(true);
      setSuccessContent('Users Exported Successfully');
    } else {
      setContent({
        icon: <Forbidden2 size={36} color="var(--c-danger)" />,
        text: 'No Users Were Selected',
      });
      setModalType('error');
      setSuccess(false);
      setOpenConfirm(true);
    }
  };
  return (
    <section>
      <IBreadCrumb title="Support Tickets" />
      <div className="flex items-center justify-between my-6">
        <h1 className="text-xl font-medium py-2.5">Support Tickets</h1>
        <ExportButton onClick={onExportClick} />
      </div>
      <div className="flex items-center gap-3">
        <SearchInput />
        <Button
          size="large"
          onClick={() => {
            if (isFiltersOpen) {
              setTimeout(() => setIsFiltersOpen(!isFiltersOpen), 300);
              setIsFiltersOpenAnimate(!isFiltersOpenAnimate);
            } else {
              setIsFiltersOpen(!isFiltersOpen);
              setTimeout(() => setIsFiltersOpenAnimate(!isFiltersOpenAnimate), 300);
            }
          }}
          style={{
            backgroundColor: 'var(--c-secondary)',
            fontSize: '16px',
            padding: '0.75rem',
            borderRadius: '8px',
          }}
          classNames={{
            icon: 'size-6',
          }}
          icon={<Setting5 size={24} />}
        />
      </div>
      <div className="my-5">
        <button
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setViewType(viewType === 'table' ? 'card' : 'table')}>
          {viewType === 'table' ? (
            <img src="/customIcons/TableView.svg" alt="Table View" className="size-7.5" />
          ) : (
            <img src="/customIcons/CardView.svg" alt="Card View" className="size-7.5" />
          )}
        </button>
      </div>
      <div className="flex">
        {viewType === 'table' && (
          <div className="flex flex-1">
            <SupportTable setSelectedRows={setSelectedRows} />
          </div>
        )}
        {viewType === 'card' && <TicketsShower />}
        {isFiltersOpen && (
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isFiltersOpenAnimate ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}>
            {<Filters />}
          </div>
        )}
      </div>
      <div className="w-full mt-4 flex items-center flex-col">
        <Pagination total={120} showSizeChanger={false} />
      </div>
    </section>
  );
};

export default MainSupportTickets;
