import BannerImg from '@/assets/images/banner-img.jpg';
const RandomRestaurant = () => {
  return (
    <section
      className=" h-[300px] py-[46px] px-[42px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${BannerImg})` }}>
      <div className="wrapper">
        <div>
          <h2>Random Restaurant campaign</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vel nullam adipiscing nec
            arcu vel justo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RandomRestaurant;
