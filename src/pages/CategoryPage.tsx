import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const { products, loading } = useProducts(category);

  const getCategoryName = (cat: string) => {
    const names: Record<string, string> = {
      smartphones: 'Смартфоны',
      tvs: 'Телевизоры', 
      consoles: 'Игровые приставки'
    };
    return names[cat] || cat;
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{getCategoryName(category || '')}</h1>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="glass rounded-lg h-96 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;