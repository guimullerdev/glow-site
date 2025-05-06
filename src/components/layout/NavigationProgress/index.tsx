'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
  minimum: 0.3,
});

export function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();

    NProgress.done();

    return () => {
      NProgress.remove();
    };
  }, [pathname, searchParams]);

  return null;
}
