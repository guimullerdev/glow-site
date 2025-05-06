'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

function BackButton() {
  return (
    <Button variant="outline" size="lg" onClick={() => window.history.back()}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      Voltar
    </Button>
  );
}

export { BackButton };
