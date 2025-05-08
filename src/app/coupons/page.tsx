import { Search, Tag, Ticket } from 'lucide-react';

import { getCoupons } from '@/lib/apiServer';

import { PageLayout } from '@/components/layout/PageLayout';
import { CouponCard } from '@/components/coupons/CouponCard';
import { ComboCard } from '@/components/coupons/ComboCard';
import { Input } from '@/components/ui/input';

async function CouponPage() {
  const coupons = await getCoupons();

  return (
    <PageLayout>
      <div className="container mx-auto p-4 pb-10 max-w-6xl">
        <div className="relative mb-8">
          <div className="absolute -top-6 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Ticket className="h-6 w-6 text-primary" />
                  <h1 className="text-3xl font-bold tracking-tight">
                    Cupons de Desconto
                  </h1>
                </div>
                <p className="text-muted-foreground text-sm mt-1 ml-8">
                  Resgate seus cupons para usar nas lojas ou no delivery
                </p>
              </div>

              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar cupons..."
                  className="pl-9 bg-background/50"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Ofertas Especiais</h2>
            </div>
            <ComboCard />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Cupons Disponíveis</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {coupons.map((coupon) => (
                <CouponCard key={coupon.uuid} coupon={coupon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default CouponPage;
