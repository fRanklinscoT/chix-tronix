import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { Navigation, Pagination, Autoplay, FreeMode, Thumbs } from 'swiper/modules';

const GALLERY_ITEMS = [
    { id: 1, src: 'https://images.pexels.com/photos/9875682/pexels-photo-9875682.jpeg', service: 'Solar Energy Solutions', title: 'Solar Panel Rooftop' },
    { id: 2, src: 'https://images.pexels.com/photos/35105436/pexels-photo-35105436.jpeg', service: 'Solar Energy Solutions', title: 'Solar Farm Installation' },
    { id: 3, src: 'https://images.pexels.com/photos/27662879/pexels-photo-27662879.jpeg', service: 'Automated Gates & Garage Doors', title: 'Automation & Access Control' },
    { id: 4, src: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg', service: 'Electric Fencing', title: 'Secure Perimeter Fencing' },
    { id: 5, src: 'https://images.pexels.com/photos/277359/pexels-photo-277359.jpeg', service: 'CCTV & Security Systems', title: 'Outdoor CCTV Camera' },
    { id: 6, src: 'https://images.pexels.com/photos/22610370/pexels-photo-22610370.jpeg', service: 'Smart Home Automation', title: 'Smart Home Controls' },
    { id: 7, src: 'https://images.pexels.com/photos/27662879/pexels-photo-27662879.jpeg', service: 'Smart Home Automation', title: 'Connected Devices Setup' },
    { id: 8, src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', service: 'Security Consulting', title: 'Security Planning & Consulting' },
];

const PictureGallery = () => {
    const [searchParams] = useSearchParams();
    const serviceFilter = searchParams.get('service');
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const filteredImages = useMemo(() => {
        if (!serviceFilter) return GALLERY_ITEMS;
        return GALLERY_ITEMS.filter(item =>
            item.service.toLowerCase() === serviceFilter.toLowerCase()
        );
    }, [serviceFilter]);

    return (
        <section
            className="relative py-10 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200')",
            }}
        >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative container mx-auto px-4 py-8 max-h-screen">
                <h1 className="text-3xl font-bold mb-8 text-center text-white capitalize drop-shadow-lg">
                    {serviceFilter ? `${serviceFilter} Gallery` : 'Our Projects'}
                </h1>

                {filteredImages.length > 0 ? (
                    <div>
                        {/* MAIN SWIPER */}
                        <Swiper
                            modules={[Pagination, Autoplay, FreeMode, Thumbs]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            spaceBetween={20}
                            loop
                            thumbs={{ swiper: thumbsSwiper }}
                            className="rounded-lg overflow-hidden mb-6"
                        >
                            {filteredImages.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-[740px] object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 bg-black/70 text-white p-4 w-full">
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                            <p className="text-sm capitalize">{item.service}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* THUMBNAIL SWIPER */}
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            modules={[FreeMode, Thumbs]}
                            spaceBetween={10}
                            slidesPerView={5}
                            freeMode
                            watchSlidesProgress
                            className="cursor-pointer"
                        >
                            {filteredImages.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-24 object-cover rounded-lg border border-gray-300 hover:border-blue-500 transition"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className="text-center text-white text-lg py-12">
                        No images found for this service category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default PictureGallery;
