import { cn } from '@/lib/utils';

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        'header h-14 flex items-center justify-center relative',
        className,
      )}
    >
      <h1 className="text-2xl font-bold">JAH</h1>
    </header>
  );
}

export { Header };
