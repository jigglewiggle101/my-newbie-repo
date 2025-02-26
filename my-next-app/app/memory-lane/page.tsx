'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // Use this import path for Swiper v7 and later

import AOS from 'aos';
import 'aos/dist/aos.css';

const memories = [
  {
    title: '2019 Memories',
    description: 'Our timeline in 2019, taking a walk flooded with good memories.',
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
    description: 'Our timeline in 2020, taking a walk flooded with good memories.',
    images: [
      { url: '/5jan20.jpg', caption: 'Flyer Job with love ❤.' },
      { url: '/26jan20.jpg', caption: '1st CNY with love ❤.' },
      { url: '/28jan20.jpg', caption: 'Karaoke singing of Ed Sheeran Perfect with love ❤.' },
      { url: '/14mar20.jpg', caption: 'Jack Place at CWP celebrating my mom bdae with love ❤.' },
      { url: '/19may20.jpg', caption: 'Home celebration for my dad with love ❤.' },
      { url: '/4oct20.jpg', caption: 'ZH and WL Guo Da Li with love ❤.' },
      { url: '/17oct20.jpg', caption: 'ZH and WL ROM with love FAM ❤.' },
      { url: '/20nov20.jpg', caption: 'My 1st ever bdae with love FAM ❤.' },
      { url: '/27dec20.jpg', caption: 'Christmas with love n my FAM ❤.' },
      { url: '/31dec20.jpg', caption: 'Christmas with love FAM ❤.' },
    ],
  },
  {
    title: '2021 Memories',
    description: 'Our timeline in 2021, taking a walk flooded with good memories.',
    images: [
      { url: '/11feb21.jpg', caption: '2nd CNY with love ❤.' },
      { url: '/11feb21pt2.jpg', caption: '2nd CNY with love FAM ❤.' },
      { url: '/12feb21.jpg', caption: '2nd CNY with my FAM ❤.' },
      { url: '/21feb21.jpg', caption: '1st Bdae celebration for love ❤.' },
      { url: '/2mar21.jpg', caption: 'Hospital visitation with love ❤.' },
      { url: '/2apr2021.jpg', caption: 'Makan session with love FAM ❤.' },
      { url: '/5may21.jpg', caption: 'Shawn graduation with mommy ❤.' },
      { url: '/19may21.jpg', caption: '2nd Home celebration for my dad with love ❤.' },
      { url: '/20may21.jpg', caption: 'Makan session with mommy n Shawn ❤' },
      { url: '/20may21pt2.jpg', caption: 'Shawn playing the guitar ❤' },
      { url: '/30may21.jpg', caption: 'Shawn cool "ah Beng side" ❤.' },
      { url: '/27jun21.jpg', caption: 'Jacket trying session with love ❤.' },
      { url: '/7jul21.jpg', caption: 'Love helped me dry my hair ❤.' },
      { url: '/25jul21.jpg', caption: 'Walking session with mommy n Shawn ❤' },
      { url: '/26oct21.jpg', caption: ' Phototaking with love at Orchard and bought me a new baby blue doll dress ❤.' },
      { url: '/21sep21.jpg', caption: 'Jie Birthday celebration with love FAM ❤.' },
      { url: '/21sep21pt2.jpg', caption: 'Jie Birthday celebration with love FAM pt 2 ❤.' },
      { url: '/11oct21.jpg', caption: '1st crab tasting with love at dancing crab ❤.' },
      { url: '/12oct21.jpg', caption: 'Ah Ma bdae celebation with my FAM ❤.' },
      { url: '/21oct21.jpg', caption: 'love colleague took cute picture of Him ❤.' },
      { url: '/21oct21pt2.jpg', caption: 'Mom bdae celebation with love FAM ❤.' },
      // { url: '/21oct21pt3.jpg', caption: 'ZH and WL ROM with love FAM ❤.' },
      { url: '/21nov21.jpg', caption: 'My 2nd bdae with love FAM ❤.' },
      { url: '/6dec21.jpg', caption: 'Christmas Wonderland with love ❤.' },
      { url: '/11dec21.jpg', caption: 'Walking with love at VivoCity ❤.' },
    ],
  },
  {
    title: '2022 Memories',
    description: 'Our timeline in 2022, taking a walk flooded with good memories.',
    images: [
      { url: '/6jan22.jpg', caption: 'Cycling with love ❤.' },
      { url: '/29jan22.jpg', caption: 'USS with love ❤.' },
      { url: '/2feb22.jpg', caption: '3rd CNY with love FAM ❤.' },
      { url: '/6may22.jpg', caption: 'Car driving with love and love friend ❤.' },
      { url: '/25jul2022.jpg', caption: '1st ever trip to Penang with love FAM ❤.' },
      { url: '/dec22.jpg', caption: 'Piggyback love and christmas celebration with love FAM ❤.' },
    ],
  },
  {
    title: '1st BTO purchase with love',
    description: 'Our home purchase journey with love.',
    images: [
      { url: '/3oct22.jpg', caption: 'Our home purchase journey with love ❤.' },
      { url: '/3oct22pt2.jpg', caption: 'Our home purchase journey with love pt 2 ❤.' },
      { url: '/3oct22pt3.jpg', caption: 'Our home purchase journey with love pt 3 ❤.' },
    ],
  },
  {
    title: '2023 Memories',
     description: 'Our timeline in 2023, taking a walk flooded with good memories.',
     images: [
      { url: '/22jan23.jpg', caption: '4th CNY with my FAM and hard carrying my boss ❤.' },
      { url: '/13feb23.jpg', caption: 'Valentines day celebration with love ❤.' },
      { url: '/11mar23.jpg', caption: 'Cycling session with love ❤.' },
      { url: '/1may23.jpg', caption: '1st Gym session with love ❤.' },
      { url: '/26jul23.jpg', caption: 'Tottenham Spur soccer match with love ❤.' },
      { url: '/19nov23.jpg', caption: 'My bdae with my MVP FAM ❤ ❤.' },
    ],
   },
   {
    title: 'Wedding Photoshoot with love',
     description: 'Our wedding photoshoot journey with love.',
     images: [
      { url: '/8sep23.jpg', caption: 'Taiwan with love ❤.' },
      { url: '/10sep23.jpg', caption: 'Proposal success ❤.' },
      { url: '/12sep23.jpg', caption: 'Wedding photoshoot with love ❤.' },
      { url: '/19sep23.jpg', caption: 'Cheryl and Raeanne gift to us ❤.' },
    ],
   },
  {
    title: '2024 Memories',
    description: 'Our timeline in 2024, taking a walk flooded with good memories.',
    images: [
      { url: '/3mar24.jpg', caption: 'Photoshoot with love FAM and newborn Oli ❤.' },
      { url: '/16mar24.jpg', caption: 'Celebrating newborn Oli 1st month ❤.' },
      { url: '/29mar24.jpg', caption: 'Praying with love ❤.' },
      { url: '/16jul24.mp4', caption: 'Doggie visit at JB with love ❤.' },
      { url: '/27aug24.jpg', caption: 'Shopee job, my MVP love helped out ❤.' },
      { url: '/4sep24.jpg', caption: 'Cycling session with love at ECP ❤.' },
      { url: '/29oct24.jpg', caption: 'Cycling session with love around Singapore Sports School ❤.' },
      { url: '/22nov24.jpg', caption: 'Our first ever BearBricks ❤.' },
      { url: '/22nov24pt2.jpg', caption: 'Our first ever BearBricks pt 2 ❤.' },
      { url: '/5dec24.jpg', caption: 'Karaoke Session with love ❤.' },
      { url: '/20dec24.jpg', caption: 'Nerdie us ❤.' },
    ],
  },
  {
    title: '2025 Memories',
    description: 'Our timeline in 2025, taking a walk flooded with good memories.',
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
