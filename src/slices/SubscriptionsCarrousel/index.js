/**
 * @typedef {import("@prismicio/client").Content.SubscriptionsCarrouselSlice} SubscriptionsCarrouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SubscriptionsCarrouselSlice>} SubscriptionsCarrouselProps
 * @param {SubscriptionsCarrouselProps}
 */
const SubscriptionsCarrousel = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <img src="https://images.prismic.io/bimandgo-demo/Zk9VCyol0Zci9ZXC_Screenshot2024-05-23at16.38.34.png"></img>
    </section>
  );
};

export default SubscriptionsCarrousel;
