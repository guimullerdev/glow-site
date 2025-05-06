import { Skeleton } from '../base';

function ProductCardSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export { ProductCardSkeleton };
