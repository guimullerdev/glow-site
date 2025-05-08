'use client';

import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import 'swiper/css';
import 'swiper/css/navigation';

type Product = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  discountPrice?: number;
};

type ProductCarouselProps = {
  title: string;
  products: Product[];
};

function ProductCarousel({ title, products }: ProductCarouselProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="space-y-4 relative">
      <h2 className="text-lg font-bold">{title}</h2>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.swiper-prev-${title.replace(/\s+/g, '')}`,
          nextEl: `.swiper-next-${title.replace(/\s+/g, '')}`,
        }}
        slidesPerView={2}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
        }}
        loop={products.length > 4}
        className="product-carousel"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card>
              <CardContent className="p-2">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src={product.thumb}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="pt-2">
                  <h3 className="font-medium text-sm line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center mt-1">
                    <div>
                      {product.discountPrice ? (
                        <div className="flex flex-col">
                          <span className="text-xs line-through text-gray-600">
                            {formatCurrency(product.price)}
                          </span>
                          <span className="text-sm font-bold">
                            {formatCurrency(product.discountPrice)}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm font-bold">
                          {formatCurrency(product.price)}
                        </span>
                      )}
                    </div>
                    <Button size="sm" variant="secondary">
                      +
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`swiper-prev-${title.replace(/\s+/g, '')} absolute -left-4 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md`}
      >
        <ChevronLeft size={20} />
      </div>
      <div
        className={`swiper-next-${title.replace(/\s+/g, '')} absolute -right-4 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md`}
      >
        <ChevronRight size={20} />
      </div>
    </div>
  );
}

export { ProductCarousel };
