import { Card } from '@/components/ui/card';
import { Skeleton } from '../base';

function LoyaltyCardSkeleton() {
  return (
    <Card className="overflow-hidden border-primary/20 py-0">
      <div className="bg-primary text-primary-foreground p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="md:flex-1 space-y-4">
            <div>
              <Skeleton className="h-8 w-full" />
            </div>

            <Skeleton className="h-8 w-full" />
          </div>

          <div className="md:w-72 md:border-l border-primary-foreground/20 md:pl-6">
            <div className="rounded-lg bg-primary-foreground/10 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Skeleton className="h-8 w-full" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-8 w-full" />
                </div>
                <Skeleton className="h-8 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export { LoyaltyCardSkeleton };
