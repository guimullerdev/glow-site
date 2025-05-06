'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { cn } from '@/lib/utils';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type BannerItem = {
  id: string;
  thumb: string;
  title: string;
  subtitle?: string;
};

type BannerSliderProps = {
  banners: BannerItem[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
};

function BannerSlider({
  banners,
  className,
  autoPlay = true,
  interval = 5000,
}: BannerSliderProps) {
  return (
    <div className={cn('relative', className)}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        autoplay={
          autoPlay
            ? {
                delay: interval,
                disableOnInteraction: false,
              }
            : false
        }
        loop={true}
        className="w-full h-52 md:h-64"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full w-full">
              <Image
                src={banner.thumb}
                alt={banner.title}
                fill
                className="object-cover"
              />
              {(banner.title || banner.subtitle) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  {banner.title && (
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      {banner.title}
                    </h2>
                  )}
                  {banner.subtitle && (
                    <p className="text-sm md:text-base text-white/90">
                      {banner.subtitle}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-md">
          <ChevronLeft size={20} />
        </div>
        <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-md">
          <ChevronRight size={20} />
        </div>
      </Swiper>
    </div>
  );
}
export { BannerSlider };
