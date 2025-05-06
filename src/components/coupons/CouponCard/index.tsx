'use client';

import Image from 'next/image';
import { useState } from 'react';
import { QrCodeIcon, Clock, TagIcon } from 'lucide-react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { QrCodeModal } from '@/components/coupons/QrCodeModal';

import { Coupon } from '@/lib/types';

type CouponCardProps = {
  coupon: Coupon;
  className?: string;
};

function CouponCard({ coupon, className }: CouponCardProps) {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  return (
    <>
      <Card
        className={`overflow-hidden border-gray-300 transition-all duration-300 py-0 hover:shadow-lg ${className}`}
      >
        <CardContent className="p-0">
          <div className="relative">
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <Image
                src={coupon.thumb}
                alt={coupon.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="absolute top-3 right-3 z-20">
              <Badge
                variant="secondary"
                className="bg-primary/90 text-primary-foreground font-medium"
              >
                {coupon.type === 'ONE_PER_CUSTOMER' ? 'Uso único' : coupon.type}
              </Badge>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm px-4 py-2 z-20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TagIcon className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-mono font-bold">
                    {coupon.coupon}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Válido</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div>
              <h3 className="font-bold text-xl leading-tight">
                {coupon.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {coupon.subtitle}
              </p>
            </div>

            <div className="border-l-2 border-primary/70 pl-3 py-0.5">
              <p className="text-xs text-muted-foreground">
                {coupon.description}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full gap-2 group hover:bg-primary/90"
            onClick={() => setQrModalOpen(true)}
          >
            <QrCodeIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
            Usar cupom
          </Button>
        </CardFooter>
      </Card>

      <QrCodeModal
        open={qrModalOpen}
        onOpenChange={setQrModalOpen}
        couponCode={coupon.coupon}
        title={coupon.title}
      />
    </>
  );
}

export { CouponCard };
