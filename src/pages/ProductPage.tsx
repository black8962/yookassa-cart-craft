import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/contexts/CartContext';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();
  const { addItem } = useCart();
  const product = getProductById(id || '');

  if (!product) {
    return <div className="pt-20 min-h-screen flex items-center justify-center">
      <h1 className="text-2xl">Товар не найден</h1>
    </div>;
  }

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="w-full rounded-lg" />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground">{product.description}</p>
            <div className="text-2xl font-bold text-primary">
              {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 0
              }).format(product.price)}
            </div>
            <Button onClick={handleAddToCart} className="w-full">
              Добавить в корзину
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;