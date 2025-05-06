import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '../base';
import Image from 'next/image';
import { Badge, Clock, QrCodeIcon, TagIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

function CouponCardSkeleton() {
  return (
    <Card className="overflow-hidden border-gray-300 transition-all duration-300 py-0 hover:shadow-lg my-4">
      <CardContent className="p-0">
        <div className="relative">
          <div className="relative h-48 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Skeleton className="h-64 w-full" />
          </div>

          <div className="absolute top-3 right-3 z-20">
            <Skeleton className="h-6 w-6 rounded-none" />
          </div>

          <Skeleton className="h-6 w-full rounded-none" />
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-bold text-xl leading-tight">
              <Skeleton className="h-6 w-full" />
            </h3>
            <div className="text-sm text-muted-foreground mt-1">
              <Skeleton className="h-4 w-full" />
            </div>
          </div>

          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Skeleton className="h-8 w-full" />
      </CardFooter>
    </Card>
  );
}

export { CouponCardSkeleton };
