import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const CartPage = () => {
  const { items, total, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Корзина пуста</h1>
          <Link to="/">
            <Button>Продолжить покупки</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center justify-between p-4 glass rounded-lg">
              <div className="flex items-center space-x-4">
                <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded" />
                <div>
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-muted-foreground">Количество: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold">
                  {new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'RUB',
                    minimumFractionDigits: 0
                  }).format(item.product.price * item.quantity)}
                </span>
                <Button onClick={() => removeItem(item.product.id)} variant="destructive">
                  Удалить
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-right">
          <div className="text-2xl font-bold mb-4">
            Итого: {new Intl.NumberFormat('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              minimumFractionDigits: 0
            }).format(total)}
          </div>
          <Link to="/checkout">
            <Button size="lg">Оформить заказ</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;