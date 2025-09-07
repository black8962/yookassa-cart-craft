import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Smartphone, Tv, Gamepad2, Zap, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';

const Home = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const { products, loading } = useProducts(undefined, searchTerm);

  const categories = [
    {
      name: 'Смартфоны',
      icon: Smartphone,
      path: '/category/smartphones',
      description: 'Современные мобильные устройства',
      color: 'text-blue-500',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Телевизоры',
      icon: Tv,
      path: '/category/tvs',
      description: 'Большие экраны для дома',
      color: 'text-purple-500',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Приставки',
      icon: Gamepad2,
      path: '/category/consoles',
      description: 'Игровые консоли нового поколения',
      color: 'text-green-500',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Официальная гарантия на всю продукцию'
    },
    {
      icon: Truck,
      title: 'Быстрая доставка',
      description: 'Доставка по Москве за 2 часа'
    },
    {
      icon: Zap,
      title: 'Новейшие технологии',
      description: 'Только последние модели и новинки'
    }
  ];

  const featuredProducts = products.slice(0, 6);

  if (searchTerm && !loading) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Результаты поиска: "{searchTerm}"
            </h1>
            <p className="text-muted-foreground">
              Найдено товаров: {products.length}
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                Товары не найдены
              </p>
              <Link to="/">
                <Button>Вернуться к каталогу</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Откройте для себя
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                новейшие технологии
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Магазин премиальной электроники с гарантией качества и быстрой доставкой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant"
              >
                Смотреть каталог
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 glass"
              >
                Новинки
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse transition-all">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Категории товаров</h2>
            <p className="text-xl text-muted-foreground">
              Выберите категорию для просмотра товаров
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} to={category.path} className="group">
                <Card className="h-full glass hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow-pulse transition-all`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    <Button className="w-full bg-gradient-primary hover:bg-gradient-tech text-white border-0">
                      Смотреть товары
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Рекомендуемые товары</h2>
            <p className="text-xl text-muted-foreground">
              Популярные товары с отличными отзывами
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="glass rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/category/smartphones">
              <Button size="lg" variant="outline" className="glass">
                Смотреть все товары
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;