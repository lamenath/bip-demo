/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
<img src="https://images.prismic.io/bimandgo-demo/Zk9VDCol0Zci9ZXD_Screenshot2024-05-23at16.38.09.png"></img>
    </section>
  );
};

export default Hero;
