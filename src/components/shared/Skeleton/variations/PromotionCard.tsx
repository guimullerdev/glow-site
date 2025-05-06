import { Skeleton } from '../base';

function PromotionGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-24 w-full" />
    </div>
  );
}

export { PromotionGridSkeleton };
