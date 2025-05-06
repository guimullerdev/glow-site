import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type LoyaltyPointProps = {
  date: string;
  points: number;
  isPositive: boolean;
  description: string;
  className?: string;
};

function LoyaltyPoint({
  date,
  points,
  isPositive,
  description,
  className,
}: LoyaltyPointProps) {
  return (
    <Card className={cn('overflow-hidden border-gray-200', className)}>
      <CardContent className="p-3">
        <div className="flex justify-between items-start mb-1">
          <div className="font-medium">{date}</div>
          <span
            className={cn(
              'font-medium',
              isPositive ? 'text-green-600' : 'text-red-500',
            )}
          >
            {isPositive ? '+' : '-'}
            {points} ponto{points > 1 ? 's' : ''}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export { LoyaltyPoint };
