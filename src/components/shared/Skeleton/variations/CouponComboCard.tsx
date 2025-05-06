import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '../base';

function CouponComboCardSkeleton() {
  return (
    <Card className="overflow-hidden border-gray-300 transition-all duration-300 hover:shadow-lg my-4">
      <CardContent className="p-0">
        <div className="relative p-4">
          <div className="absolute -top-2 right-4">
            <Skeleton className="h-6 w-6 rounded-none" />
          </div>
          <Skeleton className="h-32 w-full rounded-none" />
        </div>

        <div className="p-4">
          <div className="flex gap-4 mb-5">
            <div className="flex-1 relative h-40 rounded-md overflow-hidden">
              <Skeleton className="h-64 w-full" />
            </div>

            <div className="flex-1 relative h-40 rounded-md overflow-hidden">
              <Skeleton className="h-64" />
            </div>
          </div>

          <Skeleton className="h-16 w-full mb-2" />

          <Skeleton className="h-8 w-full" />
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Skeleton className="h-8 w-full" />
      </CardFooter>
    </Card>
  );
}

export { CouponComboCardSkeleton };
