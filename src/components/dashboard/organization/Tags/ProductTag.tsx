function ProductTag({ product }: { product: string }) {
  return (
    <div
      className="flex justify-center items-center my-[0.5px] rounded-lg size-10 text-xs"
      style={{ backgroundColor: 'color-mix(in srgb,  var(--c-primary) 20%, transparent' }}>
      <span className="text-xs font-medium leading-[1.4] text-text opacity-50">{product}</span>
    </div>
  );
}

export default ProductTag;
