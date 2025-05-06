import { ReactNode } from 'react';

import { Header } from '../Header';

type PageLayoutProps = {
  children: ReactNode;
  showHeader?: boolean;
  title?: string;
};

export function PageLayout({
  children,
  showHeader = true,
  title,
}: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {showHeader && <Header />}

      {title && (
        <div className="px-4 py-3 border-b">
          <h1 className="font-bold text-lg">{title}</h1>
        </div>
      )}

      <div className="flex-1">{children}</div>
    </div>
  );
}
