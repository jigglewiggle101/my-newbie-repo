'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // Use this import path for Swiper v7 and later

import AOS from 'aos';
import 'aos/dist/aos.css';

const memories = [
  {
    title: '2019 Memories',
    description: 'Our first date at the park.',
    images: [
      { url: '/1dec19.jpg', caption: 'Service with fam ❤.' },
      { url: '/6dec19pt2.jpg', caption: 'Christmas Wonderland with ❤.' },
      { url: '/8dec19.jpg', caption: 'At Jimboi house for phototaking w fam ❤.' },
      { url: '/15dec19.jpg', caption: 'Christmas Candlelight service with fam ❤.' },
      { url: '/28dec19.jpg', caption: '1st Monthsary with Shawnie pt 1 ❤.' },
      { url: '/28dec19pt2.jpg', caption: '1st Monthsary with Shawnie pt 2 ❤.' },
    ],
  },
  {
    title: '2020 Memories',
    description: 'The amazing vacation in Paris!',
    images: [
      { url: '/5jan20.jpg', caption: 'Flyer Job with love ❤.' },
      { url: '/26jan20.jpg', caption: 'Flyer Job with love ❤.' },
      { url: '/28jan20.jpg', caption: 'At the Eiffel Tower.' },
      { url: '/14mar20.jpg', caption: 'with love ❤.' },
      { url: '/19may20.jpg', caption: 'with love ❤.' },
      { url: '/4oct20.jpg', caption: 'with love ❤.' },
      { url: '/12oct20.jpg', caption: 'with love ❤.' },
      { url: '/26oct20.jpg', caption: 'with love ❤.' },
      { url: '/20nov20.jpg', caption: 'with love ❤.' },
      { url: '/27dec20.jpg', caption: 'with love ❤.' },
      { url: '/31dec20.jpg', caption: 'Christmas with love ❤.' },
    ],
  },
  // {
  //   title: '2021 Memories',
  //   description: 'The amazing vacation in Paris!',
  //   images: [
  //     { url: '/public/5jan20.jpg', caption: 'Flyer Job with love ❤.' },
  //     { url: '/public/26jan20.jpg', caption: 'Flyer Job with love ❤.' },
  //     { url: '/public/28jan20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/14mar20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/19may20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/4oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/12oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/26oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/20nov20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/27dec20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/31dec20.jpg', caption: 'At the Eiffel Tower.' },
  //   ],
  // },
  // {
  //   title: '2022 Memories',
  //   description: 'The amazing vacation in Paris!',
  //   images: [
  //     { url: '/public/5jan20.jpg', caption: 'Flyer Job with love ❤.' },
  //     { url: '/public/26jan20.jpg', caption: 'Flyer Job with love ❤.' },
  //     { url: '/public/28jan20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/14mar20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/19may20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/4oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/12oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/26oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/20nov20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/27dec20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/31dec20.jpg', caption: 'At the Eiffel Tower.' },
  //   ],
  // },
  // {
  //   title: '2023 Memories',
  //   description: 'The amazing vacation in Paris!',
  //   images: [
  //     { url: '/public/5jan20.jpg', caption: 'Flyer Job with love ❤.' },
  //     { url: '/public/26jan20.jpg', caption: 'Flyer Job with love ❤.' },
  //     { url: '/public/28jan20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/14mar20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/19may20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/4oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/12oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/26oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/20nov20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/27dec20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/31dec20.jpg', caption: 'At the Eiffel Tower.' },
  //   ],
  // },
  // {
  //   title: '2024 Memories',
  //   description: 'The amazing vacation in Paris!',
  //   images: [
  //     { url: '/public/5jan20.jpg', caption: 'Flyer Job with love ❤.' },
  //     { url: '/public/26jan20.jpg', caption: 'Flyer Job with love ❤.' },
  //     { url: '/public/28jan20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/14mar20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/19may20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/4oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/12oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/26oct20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/20nov20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/27dec20.jpg', caption: 'At the Eiffel Tower.' },
  //     { url: '/public/31dec20.jpg', caption: 'At the Eiffel Tower.' },
  //   ],
  // },
  {
    title: '2025 Memories',
    description: 'The amazing vacation in Paris!',
    images: [
      { url: '/14feb25.jpg', caption: 'Art with love ❤.' },
      { url: '/18feb25.jpg', caption: 'Smashing with love ❤.' },
    ],
  },
  {
    title: 'Wedding Day',
    description: 'The happiest day of our lives.',
    images: [
      { url: '/31may24.jpg', caption: 'Our first pict as a married couple ❤.' },
      { url: '/31may24pt2.jpg', caption: 'Dancing the night away with maternal fam ❤.' },
      { url: '/31may24pt3.jpg', caption: 'Dancing the night away with Shawnie fam ❤.' },
      { url: '/31may24pt4.jpg', caption: 'Dancing the night away with both Shawnie and mine ❤.' },
      { url: '/31may24pt5.jpg', caption: 'Picture with the car as wedded hubs and wifey ❤' },
      { url: '/31may24pt6.jpg', caption: 'ROM picture with maternal fam ❤.' },
      { url: '/31may24pt7.jpg', caption: 'Dancing the night away with Shawnie fam pt 2 ❤.' },
      { url: '/31may24pt8.jpg', caption: 'ROM picture with Shawnie fam ❤.' },
    ],
  },
];

const MemoryLanePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const swiperRef = useRef<any>(null);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl text-center mb-8">Memory Lane</h1>
      <div className="max-w-5xl mx-auto space-y-8">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold">{memory.title}</h3>
            <p className="text-lg mt-2">{memory.description}</p>

            {/* Image Carousel */}
            <div className="mt-4 relative">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                navigation={{
                  nextEl: `.next-btn-${index}`,
                  prevEl: `.prev-btn-${index}`,
                }}
                ref={swiperRef}
              >
                {memory.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative">
                      <img
                        src={image.url}
                        alt={`${memory.title} - ${idx + 1}`}
                        className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                      <p className="absolute bottom-4 left-4 text-white text-xl font-semibold bg-black bg-opacity-50 p-2 rounded-md">
                        {image.caption}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button
                className={`next-btn-${index} absolute top-1/2 right-4 text-white bg-gray-700 p-3 rounded-full`}
              >
                ➡️
              </button>
              <button
                className={`prev-btn-${index} absolute top-1/2 left-4 text-white bg-gray-700 p-3 rounded-full`}
              >
                ⬅️
              </button>
            </div>

            {/* Accordion - Show/Hide Detailed Info */}
            <div className="mt-4 text-gray-700">
              <details className="group">
                <summary className="cursor-pointer text-lg font-semibold group-hover:text-blue-500">
                  More Details
                </summary>
                <p className="mt-2">{`Here are some more details about this memory...`}</p>
              </details>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryLanePage;
