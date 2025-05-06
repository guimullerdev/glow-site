import { PageLayout } from '@/components/layout/PageLayout';
import {
  Skeleton,
  CouponCardSkeleton,
  CouponComboCardSkeleton,
} from '@/components/shared/Skeleton';

const LoadingPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto p-4 pb-20 max-w-6xl">
        <div className="mb-8">
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-9 w-full" />
                </div>
                <div className="flex mt-1 ml-8">
                  <Skeleton className="h-4 w-72" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-full" />
              </div>
            </div>
          </div>
        </div>

        <Skeleton className="h-7 w-full mb-4" />
        <CouponComboCardSkeleton />

        <CouponCardSkeleton />
      </div>
    </PageLayout>
  );
};

export default LoadingPage;
