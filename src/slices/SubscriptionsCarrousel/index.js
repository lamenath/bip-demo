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
      <img src="./screenshot-default.png"></img>
    </section>
  );
};

export default SubscriptionsCarrousel;
