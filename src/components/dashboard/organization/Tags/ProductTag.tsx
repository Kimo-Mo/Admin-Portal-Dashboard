function ProductTag({ product }: { product: string }) {
  return (
    <div
      className="py-3 px-3 rounded-lg"
      style={{ backgroundColor: 'color-mix(in srgb,  var(--c-primary) 20%, transparent' }}>
      <span className="text-xs font-medium leading-[1.4] text-text opacity-50">{product}</span>
    </div>
  );
}

export default ProductTag;
