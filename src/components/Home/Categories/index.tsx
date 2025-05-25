import Image from 'next/image';
import { categoriesData } from '@/data/categoriesData';

const Categories = () => {
  return (
    <section>
      <div className="wrapper">
        <div>
          <h2 className="text-black text-[19px] md:text-[24px] lg:text-[38px] font-semibold">
            Categories
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-[12px] sm:gap-[16px] md:gap-[24px] mt-[20px] md:mt-[32px]">
          {categoriesData.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.bgColor }}
              className="flex flex-col items-center py-[16px] px-[24px] sm:py-[20px] sm:px-[40px] md:py-[24px] md:px-[60px] rounded-[12px]">
              <div className="h-[36px] w-[36px] sm:h-[44px] sm:w-[44px] md:h-[52px] md:w-[52px] flex items-center justify-center">
                <Image
                  src={item.icon || '/placeholder.svg'}
                  alt={item.text}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <span
                style={{ color: item.textColor }}
                className="font-medium text-[16px] sm:text-[20px] md:text-[24px] pt-[8px] md:pt-[11px]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
