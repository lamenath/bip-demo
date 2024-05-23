/**
 * @typedef {import("@prismicio/client").Content.AvantagesSlice} AvantagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AvantagesSlice>} AvantagesProps
 * @param {AvantagesProps}
 */
const Avantages = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <img src="https://images.prismic.io/bimandgo-demo/Zk9RGCol0Zci9ZTA_Screenshot2024-05-23at16.21.56.png"></img>
    </section>
  );
};

export default Avantages;
