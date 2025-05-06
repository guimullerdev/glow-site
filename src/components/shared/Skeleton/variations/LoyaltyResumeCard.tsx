import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '../base';

function LoyaltyResumeCardSkeleton() {
  return (
    <Card className="overflow-hidden border-primary/20 py-0 my-4">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-8 w-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </CardContent>
    </Card>
  );
}

export { LoyaltyResumeCardSkeleton };
