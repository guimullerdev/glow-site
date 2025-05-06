import { Skeleton } from '../base';
import { ProductCardSkeleton } from './ProductCard';

type CarouselSkeletonProps = {
  items?: number;
};

function CarouselSkeleton({ items = 4 }: CarouselSkeletonProps) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-4">
        {Array(items)
          .fill(0)
          .map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
      </div>
    </div>
  );
}

export { CarouselSkeleton };
