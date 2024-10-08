// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title_part_1: 'FryftEats',
          title_part_2: 'Website',
          path: '/fryfteats-website3.png',
          link: 'https://github.com/VictorH38/FryftEats-2.0',
        },
        {
          title_part_1: 'FryftEats',
          title_part_2: 'Mobile',
          path: '/fryfteats-mobile4.png',
          link: 'https://github.com/VictorH38/FryftEats-Mobile',
        },
        // {
        //   title_part_1: 'title',
        //   title_part_2: 'title',
        //   path: '/thumb3.jpg',
        //   link: '',
        // },
        // {
        //   title_part_1: 'title',
        //   title_part_2: 'title',
        //   path: '/thumb4.jpg',
        //   link: '',
        // },
      ],
    },
    // {
    //   images: [
    //     {
    //       title_part_1: 'title',
    //       title_part_2: 'title',
    //       path: '/thumb4.jpg',
    //       link: '',
    //     },
    //     {
    //       title_part_1: 'title',
    //       title_part_2: 'title',
    //       path: '/thumb1.jpg',
    //       link: '',
    //     },
    //     {
    //       title_part_1: 'title',
    //       title_part_2: 'title',
    //       path: '/thumb2.jpg',
    //       link: '',
    //     },
    //     {
    //       title_part_1: 'title',
    //       title_part_2: 'title',
    //       path: '/thumb3.jpg',
    //       link: '',
    //     },
    //   ],
    // },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt='' />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[11px] sm:text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>
                              {image.title_part_1}
                            </div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              {image.title_part_2}
                            </div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
