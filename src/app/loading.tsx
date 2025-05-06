import { PageLayout } from '@/components/layout/PageLayout';
import {
  BannerSkeleton,
  CarouselSkeleton,
  PromotionGridSkeleton,
  Skeleton,
} from '@/components/shared/Skeleton';

function HomeLoading() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-6 pb-20">
        <BannerSkeleton />

        <div className="px-4">
          <PromotionGridSkeleton />
        </div>

        <div className="px-4">
          <Skeleton className="h-8 w-32" />
        </div>

        <div className="px-4">
          <CarouselSkeleton />
        </div>
      </div>
    </PageLayout>
  );
}

export default HomeLoading;
