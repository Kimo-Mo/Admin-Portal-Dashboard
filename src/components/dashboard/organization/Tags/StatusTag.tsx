const getStatusColor = (status: string) => {
  switch (status) {
    case 'Rejected':
      return 'var(--c-danger)';
    case 'In Negotiation':
      return 'var(--c-warning)';
    case 'Under Review':
      return 'var(--c-info)';
    case 'Accepted':
      return 'var(--c-success)';
    case 'Prospective':
      return 'var(--c-prospective)';
  }
};

function StatusTag({
  status,
}: {
  status: 'Rejected' | 'In Negotiation' | 'Under Review' | 'Accepted' | 'Prospective';
}) {
  const clr = getStatusColor(status);
  return (
    <div className="flex justify-center w-full items-center">
      <div
        className="py-1 px-3 rounded-lg border w-full leading-[1.4] flex justify-center items-center"
        style={{
          color: `${clr}`,
          backgroundColor: `color-mix(in srgb, ${clr} 20%, transparent)`,
          borderColor: `color-mix(in srgb, ${clr} 60%, transparent)`,
        }}>
        {status}
      </div>
    </div>
  );
}

export default StatusTag;
