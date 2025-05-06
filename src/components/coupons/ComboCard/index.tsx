'use client';

import { useState } from 'react';
import Image from 'next/image';
import { QrCodeIcon, Calendar, Tag, Percent } from 'lucide-react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { QrCodeModal } from '@/components/coupons/QrCodeModal';

function ComboCard() {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const comboCoupon = {
    code: 'COMBOPERFEITO',
    title: 'COMBO PERFEITO',
  };

  return (
    <>
      <Card className="overflow-hidden border-gray-300 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-0">
          <div className="relative bg-primary/10 p-4">
            <div className="absolute -top-2 right-4">
              <Badge className="bg-primary text-primary-foreground">
                <Percent className="h-3 w-3 mr-1" /> 13,5% OFF
              </Badge>
            </div>
            <div className="flex items-center justify-center flex-col pt-2">
              <h2 className="text-center font-bold text-xl">
                {comboCoupon.code}
              </h2>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                <Tag className="h-3.5 w-3.5" />
                <span>Cupom especial</span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="flex gap-4 mb-5">
              <div className="flex-1 relative h-40 rounded-md overflow-hidden border border-muted">
                <Image
                  src="https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png"
                  alt="Açaí de JAH 1.5L"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-2">
                  <span className="text-white font-bold text-sm">
                    Açaí de JAH
                  </span>
                  <span className="text-white/90 text-xs">1,5L</span>
                </div>
              </div>

              <div className="flex-1 relative h-40 rounded-md overflow-hidden border border-muted">
                <Image
                  src="https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png"
                  alt="Açaí MORANGO 500ml"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-2">
                  <span className="text-white font-bold text-sm">MORANGO</span>
                  <span className="text-white/90 text-xs">500ml</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-4 bg-gray-100 py-3 rounded-md">
              <p className="font-bold text-lg">
                COMBO POR <span className="text-primary">R$72,64</span>
              </p>
              <p className="text-sm">Cupom 13,5% de desconto no Caixa</p>
            </div>

            <div className="border-l-2 border-primary/70 pl-3 py-1 mb-3">
              <div className="flex items-center text-xs text-muted-foreground gap-1.5 mb-1">
                <Calendar className="h-3.5 w-3.5" />
                <p>Válido a partir de 21/04/25 a partir das 00h00</p>
              </div>
              <p className="text-xs text-muted-foreground">
                Aplicável a todos os produtos participantes deste cupom.
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full gap-2 group"
            onClick={() => setQrModalOpen(true)}
          >
            <QrCodeIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
            Usar cupom!
          </Button>
        </CardFooter>
      </Card>

      <QrCodeModal
        open={qrModalOpen}
        onOpenChange={setQrModalOpen}
        couponCode={comboCoupon.code}
        title={comboCoupon.title}
      />
    </>
  );
}

export { ComboCard };
