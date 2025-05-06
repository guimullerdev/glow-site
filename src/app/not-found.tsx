import Link from 'next/link';
import { Suspense } from 'react';
import { Home } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { BackButton } from '@/components/shared/BackButton';

function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
        <div className="max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              404
            </h1>
            <h2 className="text-2xl font-semibold tracking-tight">
              Página não encontrada
            </h2>
            <p className="text-muted-foreground">
              Ops! Parece que você está tentando acessar uma página que não
              existe.
            </p>
          </div>

          <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center">
            <span className="text-4xl">🍦</span>
          </div>

          <p className="text-sm text-muted-foreground">
            A página que você está procurando foi movida, removida ou nunca
            existiu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BackButton />
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Página inicial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default NotFound;
