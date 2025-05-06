import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { QrCode, Ticket, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QRCode from 'react-qr-code';
import { useState } from 'react';

type QrCodeModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  couponCode: string;
  title: string;
};

function QrCodeModal({
  open,
  onOpenChange,
  couponCode,
  title,
}: QrCodeModalProps) {
  const [copied, setCopied] = useState(false);
  const qrValue = `JAH_ACAI_COUPON:${couponCode}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary">
            <QrCode className="h-5 w-5" />
            <DialogTitle>Escaneie o QR Code</DialogTitle>
          </div>
          <DialogDescription>
            Apresente este código no caixa para resgatar seu desconto
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center space-y-6 py-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-primary/10 relative">
            <div className="absolute -top-2 -left-2 h-3 w-3 rounded-full bg-primary/70" />
            <div className="absolute -top-2 -right-2 h-3 w-3 rounded-full bg-primary/70" />
            <div className="absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-primary/70" />
            <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-primary/70" />
            <QRCode value={qrValue} size={200} className="m-auto" level="H" />
          </div>

          <div className="text-center space-y-4 w-full">
            <div>
              <h3 className="font-bold text-lg">{title}</h3>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <Ticket className="h-3.5 w-3.5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Cupom válido em todas as lojas
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="bg-muted py-3 px-4 rounded-md flex items-center justify-center gap-3 border border-border"
                onClick={handleCopyCode}
              >
                <div className="flex-1 text-center">
                  <span className="font-mono text-white text-lg tracking-wider font-semibold">
                    {couponCode}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-2"
                  onClick={handleCopyCode}
                >
                  {copied ? (
                    <span className="text-xs text-green-500">Copiado!</span>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 mr-1" />
                      <span className="text-xs">Copiar</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { QrCodeModal };
