import BannerImg from '@/assets/images/banner-img.jpg';

const RandomRestaurant = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="rounded-[12px] overflow-hidden relative min-h-[40vh] w-full">
          <img
            src={BannerImg.src}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'scaleX(-1)' }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center h-[40vh] justify-between py-6 sm:py-8 lg:py-[46px] pl-4 sm:pl-6 lg:pl-[45px] text-white z-20 relative">
            <div className="max-w-full sm:max-w-[400px] lg:max-w-[555px] mb-4 lg:mb-0">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight">
                Random Restaurant campaign
              </h4>
              <p className="text-sm sm:text-base lg:text-lg mt-2">
                Lorem ipsum dolor sit amet consectetur. Vel nullam adipiscing
                nec arcu vel justo.
              </p>
            </div>
            <div className="pr-4 sm:pr-8 md:pr-16 lg:pr-[200px] self-end lg:self-auto">
              <span className="text-[#E0E19B] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold font-raleway">
                20% off
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomRestaurant;
