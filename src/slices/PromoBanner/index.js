/**
 * @typedef {import("@prismicio/client").Content.PromoBannerSlice} PromoBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PromoBannerSlice>} PromoBannerProps
 * @param {PromoBannerProps}
 */
const PromoBanner = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
<img src="https://images.prismic.io/bimandgo-demo/Zk9VCiol0Zci9ZXA_Screenshot2024-05-23at16.38.54.png"></img>
    </section>
  );
};

export default PromoBanner;
