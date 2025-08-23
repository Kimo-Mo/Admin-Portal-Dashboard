import RenderMenuSection from './RenderMenuSection';
import { downItems, mainItems } from './menuItems';

const SideBarContent = () => {
  return (
    <>
      <RenderMenuSection
        items={mainItems}
      />
      <RenderMenuSection
        items={downItems}
      />
    </>
  );
};
export default SideBarContent;
