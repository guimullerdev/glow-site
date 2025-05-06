import Image from 'next/image';

import { BannerSlider } from '@/components/shared/BannerSlider';
import { ProductCarousel } from '@/components/shared/ProductCarousel';
import { PageLayout } from '@/components/layout/PageLayout';

function Home() {
  const bannerData = [
    {
      id: '1',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      title: 'ELE CHEGOU! DOCE DE LEITE',
      subtitle: '#COMBINA COM TUDO',
    },
    {
      id: '2',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      title: 'Shake Triplo Chocolate',
      subtitle: 'Experimente nosso novo shake!',
    },
    {
      id: '3',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      title: 'DESCUBRA A JAH:',
      subtitle: 'SABOR, QUALIDADE E INOVAÇÃO',
    },
  ];

  const popularProducts = [
    {
      id: 'p1',
      name: 'Açaí Tradicional 500ml',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      price: 19.9,
      discountPrice: 16.9,
    },
    {
      id: 'p2',
      name: 'Açaí com Banana 500ml',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      price: 22.9,
    },
    {
      id: 'p3',
      name: 'Açaí Premium 700ml',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      price: 25.9,
      discountPrice: 21.9,
    },
    {
      id: 'p4',
      name: 'Açaí com Morango 500ml',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      price: 23.9,
    },
    {
      id: 'p5',
      name: 'Açaí Mix Frutas 700ml',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      price: 27.9,
    },
  ];

  const newProducts = [
    {
      id: 'n1',
      name: 'Shake Triplo Chocolate',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      price: 18.9,
      discountPrice: 15.9,
    },
    {
      id: 'n2',
      name: 'Açaí com Doce de Leite',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      price: 26.9,
    },
    {
      id: 'n3',
      name: 'Smoothie de Morango',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      price: 17.9,
    },
    {
      id: 'n4',
      name: 'Smoothie de Manga',
      thumb: 'https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png',
      price: 17.9,
    },
  ];

  return (
    <PageLayout>
      <div className="flex flex-col gap-6 pb-20">
        <BannerSlider banners={bannerData} autoPlay={true} interval={5000} />

        <section className="px-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary rounded-lg p-4 text-white flex flex-col">
              <span className="text-sm">Seja Bem-vind@</span>
              <span className="font-bold">Primeira compra</span>
              <span className="text-xl font-bold mb-2">50% OFF</span>
            </div>

            <div className="bg-primary rounded-lg p-4 text-white flex flex-col">
              <span className="text-sm">Combo Perfeito</span>
              <span className="font-bold">Pote 1,5L + Pote 500ml</span>
            </div>
          </div>
        </section>

        <section className="px-6">
          <ProductCarousel title="Mais Populares" products={popularProducts} />
        </section>

        <section className="px-6">
          <ProductCarousel title="Novidades" products={newProducts} />
        </section>

        <section className="px-4">
          <div className="bg-amber-100 rounded-lg p-4">
            <div className="flex items-center">
              <div className="relative w-24 h-24 mr-4 flex-shrink-0">
                <Image
                  src="https://jahdoacai.com.br/wp-content/uploads/2023/08/1-2.png"
                  alt="Açaí Especial JAH"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Açaí Especial JAH</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Nosso produto premium com granola, banana, morango e leite
                  condensado
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-xs line-through text-muted-foreground">
                      R$ 29,90
                    </span>
                    <span className="text-lg font-bold">R$ 24,90</span>
                  </div>
                  <button className="bg-primary text-white px-3 py-1 rounded-md text-sm">
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default Home;
