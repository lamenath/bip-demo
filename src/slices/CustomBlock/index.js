/**
 * @typedef {import("@prismicio/client").Content.CustomBlockSlice} CustomBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CustomBlockSlice>} CustomBlockProps
 * @param {CustomBlockProps}
 */
const CustomBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for custom_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CustomBlock;
