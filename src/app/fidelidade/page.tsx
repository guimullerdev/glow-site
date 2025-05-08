import { PageLayout } from '@/components/layout/PageLayout';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Gift,
  Calendar,
  Award,
  TrendingUp,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { LoyaltyPoint } from '@/components/loyalty/LoyaltyPoint';
import { getLoyalty } from '@/lib/apiServer';

async function FidelidadePage() {
  const loyalty = await getLoyalty();

  const totalPointsNeeded = loyalty.points + loyalty.pointsToRedeem;
  const progressPercentage = (loyalty.points / totalPointsNeeded) * 100;

  const formatDate = (date: Date) => {
    try {
      return format(date, 'dd/MM', { locale: ptBR });
    } catch (e) {
      return '';
    }
  };

  const groupTransactionsByMonth = () => {
    const grouped = loyalty.statements.reduce((acc: any, item) => {
      try {
        const date = new Date(item.createdAt);
        const monthKey = format(date, 'MM/yyyy', { locale: ptBR });
        const monthLabel = format(date, 'MMMM yyyy', { locale: ptBR });

        if (!acc[monthKey]) {
          acc[monthKey] = {
            label: monthLabel,
            items: [],
          };
        }

        acc[monthKey].items.push(item);
        return acc;
      } catch (e) {
        return acc;
      }
    }, {});

    return Object.entries(grouped);
  };

  const groupedTransactions = groupTransactionsByMonth();

  return (
    <PageLayout>
      <div className="container mx-auto p-4 space-y-8 pb-10 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              Programa de Fidelidade
            </h1>
            <p className="text-muted-foreground mt-1 ml-10">
              Acumule pontos e ganhe prêmios exclusivos
            </p>
          </div>
        </div>

        <Card className="overflow-hidden border-primary/20 py-0">
          <div className="bg-primary text-primary-foreground p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    {loyalty.points} pontos
                  </h2>
                  <p className="text-primary-foreground/80">
                    Faltam {loyalty.pointsToRedeem} pontos para seu próximo
                    prêmio
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span>{Math.round(progressPercentage)}%</span>
                  </div>
                  <Progress
                    value={progressPercentage}
                    className="h-2.5 bg-primary-foreground/20"
                  />
                </div>

                {loyalty.pointsToExpire > 0 && (
                  <div className="flex items-center gap-2 bg-yellow-500/20 text-yellow-200 p-3 rounded-md">
                    <Clock className="h-4 w-4 flex-shrink-0" />
                    <p className="text-sm">
                      <strong>{loyalty.pointsToExpire} ponto(s)</strong>{' '}
                      expirarão em 30 dias
                    </p>
                  </div>
                )}
              </div>

              <div className="md:w-72 md:border-l border-primary-foreground/20 md:pl-6">
                <div className="rounded-lg bg-primary-foreground/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="h-5 w-5" />
                    <h3 className="font-semibold">Próximo prêmio</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Açaí 500ml tradicional</span>
                      <Badge
                        variant="outline"
                        className="border-primary-foreground/30 text-white"
                      >
                        100 pts
                      </Badge>
                    </div>
                    <Button
                      variant="secondary"
                      className="w-full"
                      disabled={loyalty.pointsToRedeem > 0}
                    >
                      {loyalty.pointsToRedeem > 0
                        ? 'Acumule mais pontos'
                        : 'Resgatar prêmio'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden border-primary/20 py-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">
                  Resumo da sua fidelidade
                </h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground"
              >
                Ver detalhes
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-primary/5 to-primary/10 shadow-sm transition-all hover:shadow-md">
                <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
                  <Award className="h-full w-full text-primary" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Total acumulado
                    </h3>
                  </div>
                  <div className="flex items-baseline">
                    <div className="text-3xl font-bold tracking-tight">
                      {loyalty.totalPointsEarned || 0}
                    </div>
                    <div className="ml-2 text-sm text-primary">pontos</div>
                  </div>
                  <div className="mt-2 flex items-center text-xs text-muted-foreground">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    <span>
                      {loyalty.statements.length > 0
                        ? `${loyalty.statements.length} transações`
                        : 'Nenhuma transação'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/10 shadow-sm transition-all hover:shadow-md">
                <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
                  <Gift className="h-full w-full text-amber-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 p-2">
                      <Gift className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Prêmios resgatados
                    </h3>
                  </div>
                  <div className="flex items-baseline">
                    <div className="text-3xl font-bold tracking-tight">
                      {loyalty.totalAwardsRedeemed || 0}
                    </div>
                    <div className="ml-2 text-sm text-amber-600 dark:text-amber-400">
                      itens
                    </div>
                  </div>
                  {loyalty.totalAwardsRedeemed > 0 ? (
                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>Último resgate: 12/04/25</span>
                    </div>
                  ) : (
                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <Gift className="mr-1 h-3 w-3" />
                      <span>Resgate seu primeiro prêmio!</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10 shadow-sm transition-all hover:shadow-md">
                <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
                  <Clock className="h-full w-full text-blue-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Última atividade
                    </h3>
                  </div>
                  {loyalty.statements[0]?.createdAt ? (
                    <>
                      <div className="flex items-baseline">
                        <div className="text-3xl font-bold tracking-tight">
                          {formatDate(
                            new Date(loyalty.statements[0].createdAt),
                          )}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-xs text-muted-foreground truncate">
                        <Calendar className="mr-1 flex-shrink-0 h-3 w-3" />
                        <span className="truncate">
                          {loyalty.statements[0].description ||
                            (loyalty.statements[0].type === 'AWARD'
                              ? 'Pontos acumulados'
                              : 'Resgate de prêmio')}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-bold tracking-tight">
                        Sem atividades
                      </div>
                      <div className="mt-2 flex items-center text-xs text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>Faça sua primeira compra</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-semibold text-xl">Histórico de pontos</h2>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4 bg-gray-100">
              <TabsTrigger value="all">Todas atividades</TabsTrigger>
              <TabsTrigger value="earned">Ganhos</TabsTrigger>
              <TabsTrigger value="redeemed">Usados</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="space-y-2">
                <div className="sticky top-0 bg-background pt-2 pb-2 z-10">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/5 rounded-full p-0.5">
                      <ChevronDown className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary/80">Maio 2025</h3>
                    <Separator className="flex-1" />
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-green-600">+25 pts</span>
                      <span className="text-red-500">-0 pts</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pl-2">
                  <LoyaltyPoint
                    key="mock-1"
                    date="05/05/2025"
                    points={15}
                    isPositive={true}
                    description="Compra na loja - Açaí 500ml + complementos"
                  />
                  <LoyaltyPoint
                    key="mock-2"
                    date="02/05/2025"
                    points={10}
                    isPositive={true}
                    description="Bônus por indicação - Amanda Silva"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="sticky top-0 bg-background pt-2 pb-2 z-10">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/5 rounded-full p-0.5">
                      <ChevronDown className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary/80">Abril 2025</h3>
                    <Separator className="flex-1" />
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-green-600">+45 pts</span>
                      <span className="text-red-500">-50 pts</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pl-2">
                  <LoyaltyPoint
                    key="mock-3"
                    date="29/04/2025"
                    points={15}
                    isPositive={true}
                    description="Compra na loja - Açaí 700ml + complementos"
                  />
                  <LoyaltyPoint
                    key="mock-4"
                    date="25/04/2025"
                    points={50}
                    isPositive={false}
                    description="Resgate - Cupom de 15% de desconto"
                  />
                  <LoyaltyPoint
                    key="mock-5"
                    date="20/04/2025"
                    points={20}
                    isPositive={true}
                    description="Compra online - Combo família"
                  />
                  <LoyaltyPoint
                    key="mock-6"
                    date="12/04/2025"
                    points={10}
                    isPositive={true}
                    description="Bônus de aniversário"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="sticky top-0 bg-background pt-2 pb-2 z-10">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/5 rounded-full p-0.5">
                      <ChevronDown className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary/80">Março 2025</h3>
                    <Separator className="flex-1" />
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-green-600">+30 pts</span>
                      <span className="text-red-500">-100 pts</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pl-2">
                  <LoyaltyPoint
                    key="mock-7"
                    date="28/03/2025"
                    points={100}
                    isPositive={false}
                    description="Resgate - Açaí 1L grátis"
                  />
                  <LoyaltyPoint
                    key="mock-8"
                    date="15/03/2025"
                    points={15}
                    isPositive={true}
                    description="Compra na loja - Açaí 300ml + granola"
                  />
                  <LoyaltyPoint
                    key="mock-9"
                    date="08/03/2025"
                    points={15}
                    isPositive={true}
                    description="Promoção Dia da Mulher - Bônus"
                  />
                </div>
              </div>

              {groupedTransactions.map(
                ([monthKey, monthData]: [string, any]) => (
                  <div key={monthKey} className="space-y-2">
                    <div className="sticky top-0 bg-background pt-2 pb-2 z-10">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/5 rounded-full p-0.5">
                          <ChevronDown className="h-4 w-4 text-primary" />
                        </div>
                        <h3 className="font-medium text-primary/80">
                          {monthData.label}
                        </h3>
                        <Separator className="flex-1" />
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="text-green-600">
                            +
                            {monthData.items.reduce(
                              (acc: number, item: any) =>
                                acc +
                                (item.type === 'AWARD'
                                  ? item.pointsAwarded || 0
                                  : 0),
                              0,
                            )}{' '}
                            pts
                          </span>
                          <span className="text-red-500">
                            -
                            {monthData.items.reduce(
                              (acc: number, item: any) =>
                                acc +
                                (item.type === 'REDEEM'
                                  ? item.pointsRedeemed || 0
                                  : 0),
                              0,
                            )}{' '}
                            pts
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pl-2">
                      {monthData.items.map((item: any) => {
                        const date = new Date(item.createdAt);
                        const formattedDate = formatDate(date);

                        if (item.type === 'AWARD' && item.pointsAwarded) {
                          return (
                            <div
                              key={item.uuid}
                              className="border border-transparent hover:border-green-100 dark:hover:border-green-900/30 hover:bg-green-50/30 dark:hover:bg-green-900/10 rounded-lg transition-colors"
                            >
                              <LoyaltyPoint
                                date={formattedDate}
                                points={item.pointsAwarded}
                                isPositive={true}
                                description={item.description}
                              />
                            </div>
                          );
                        } else if (
                          item.type === 'REDEEM' &&
                          item.pointsRedeemed
                        ) {
                          return (
                            <div
                              key={item.uuid}
                              className="border border-transparent hover:border-red-100 dark:hover:border-red-900/30 hover:bg-red-50/30 dark:hover:bg-red-900/10 rounded-lg transition-colors"
                            >
                              <LoyaltyPoint
                                date={formattedDate}
                                points={item.pointsRedeemed}
                                isPositive={false}
                                description={item.description}
                              />
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                ),
              )}
            </TabsContent>

            <TabsContent value="earned" className="space-y-6">
              <div className="space-y-2">
                <div className="sticky top-0 bg-background pt-2 pb-2 z-10">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/5 rounded-full p-0.5">
                      <ChevronDown className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary/80">Maio 2025</h3>
                    <Separator className="flex-1" />
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-green-600">+25 pts</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pl-2">
                  <div className="border border-transparent hover:border-green-100 dark:hover:border-green-900/30 hover:bg-green-50/30 dark:hover:bg-green-900/10 rounded-lg transition-colors">
                    <LoyaltyPoint
                      key="mock-earned-1"
                      date="05/05/2025"
                      points={15}
                      isPositive={true}
                      description="Compra na loja - Açaí 500ml + complementos"
                    />
                  </div>
                  <div className="border border-transparent hover:border-green-100 dark:hover:border-green-900/30 hover:bg-green-50/30 dark:hover:bg-green-900/10 rounded-lg transition-colors">
                    <LoyaltyPoint
                      key="mock-earned-2"
                      date="02/05/2025"
                      points={10}
                      isPositive={true}
                      description="Bônus por indicação - Amanda Silva"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="sticky top-0 bg-background pt-2 pb-2 z-10">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/5 rounded-full p-0.5">
                      <ChevronDown className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary/80">Abril 2025</h3>
                    <Separator className="flex-1" />
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-green-600">+45 pts</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pl-2">
                  <div className="border border-transparent hover:border-green-100 dark:hover:border-green-900/30 hover:bg-green-50/30 dark:hover:bg-green-900/10 rounded-lg transition-colors">
                    <LoyaltyPoint
                      key="mock-earned-3"
                      date="29/04/2025"
                      points={15}
                      isPositive={true}
                      description="Compra na loja - Açaí 700ml + complementos"
                    />
                  </div>
                  <div className="border border-transparent hover:border-green-100 dark:hover:border-green-900/30 hover:bg-green-50/30 dark:hover:bg-green-900/10 rounded-lg transition-colors">
                    <LoyaltyPoint
                      key="mock-earned-5"
                      date="20/04/2025"
                      points={20}
                      isPositive={true}
                      description="Compra online - Combo família"
                    />
                  </div>
                  <div className="border border-transparent hover:border-green-100 dark:hover:border-green-900/30 hover:bg-green-50/30 dark:hover:bg-green-900/10 rounded-lg transition-colors">
                    <LoyaltyPoint
                      key="mock-earned-6"
                      date="12/04/2025"
                      points={10}
                      isPositive={true}
                      description="Bônus de aniversário"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="redeemed" className="space-y-6">
              <div className="space-y-2">
                <div className="sticky top-0 bg-background pt-2 pb-2 z-10">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/5 rounded-full p-0.5">
                      <ChevronDown className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary/80">Abril 2025</h3>
                    <Separator className="flex-1" />
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-red-500">-50 pts</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pl-2">
                  <div className="border border-transparent hover:border-red-100 dark:hover:border-red-900/30 hover:bg-red-50/30 dark:hover:bg-red-900/10 rounded-lg transition-colors">
                    <LoyaltyPoint
                      key="mock-redeemed-1"
                      date="25/04/2025"
                      points={50}
                      isPositive={false}
                      description="Resgate - Cupom de 15% de desconto"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="sticky top-0 bg-background pt-2 pb-2 z-10">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/5 rounded-full p-0.5">
                      <ChevronDown className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary/80">Março 2025</h3>
                    <Separator className="flex-1" />
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-red-500">-100 pts</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pl-2">
                  <div className="border border-transparent hover:border-red-100 dark:hover:border-red-900/30 hover:bg-red-50/30 dark:hover:bg-red-900/10 rounded-lg transition-colors">
                    <LoyaltyPoint
                      key="mock-redeemed-2"
                      date="28/03/2025"
                      points={100}
                      isPositive={false}
                      description="Resgate - Açaí 1L grátis"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
}

export default FidelidadePage;
