import React from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const CheckoutPage = () => {
  const { items, total, clearCart } = useCart();

  const handleCheckout = () => {
    // Here you would integrate with Youkassa payment
    // For now, just simulate successful order
    toast({
      title: "Заказ оформлен!",
      description: "Спасибо за покупку. Мы свяжемся с вами для подтверждения.",
    });
    clearCart();
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Оформление заказа</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Ваш заказ</h2>
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between p-4 glass rounded-lg">
                <span>{item.product.name} x{item.quantity}</span>
                <span className="font-semibold">
                  {new Intl.NumberFormat('ru-RU', {
                    style: 'currency', 
                    currency: 'RUB',
                    minimumFractionDigits: 0
                  }).format(item.product.price * item.quantity)}
                </span>
              </div>
            ))}
            <div className="text-xl font-bold text-right">
              Итого: {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB', 
                minimumFractionDigits: 0
              }).format(total)}
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Оплата</h2>
            <div className="p-4 glass rounded-lg">
              <p className="text-center text-muted-foreground mb-4">
                Для полной интеграции с YooKassa требуется подключение к Supabase
              </p>
              <Button onClick={handleCheckout} className="w-full" size="lg">
                Оплатить {new Intl.NumberFormat('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                  minimumFractionDigits: 0
                }).format(total)}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;