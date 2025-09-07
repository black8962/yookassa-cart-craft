import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Добавлено в избранное",
      description: product.name,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group h-full glass hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0">
        <CardContent className="p-0">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-t-lg aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col space-y-2">
              {product.isNew && (
                <Badge className="bg-accent hover:bg-accent-hover text-accent-foreground">
                  Новинка
                </Badge>
              )}
              {product.isSale && discount > 0 && (
                <Badge className="bg-destructive hover:bg-destructive text-destructive-foreground">
                  -{discount}%
                </Badge>
              )}
              {!product.inStock && (
                <Badge variant="secondary">
                  Нет в наличии
                </Badge>
              )}
            </div>

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                variant="secondary"
                className="w-10 h-10 p-0 rounded-full glass"
                onClick={handleWishlist}
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="w-10 h-10 p-0 rounded-full glass"
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>

            {/* Add to Cart Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="m-4 w-[calc(100%-2rem)] bg-gradient-primary hover:bg-gradient-tech text-white border-0"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                В корзину
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-3">
            {/* Rating */}
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews})
              </span>
            </div>

            {/* Brand */}
            <div className="text-sm text-primary font-medium">
              {product.brand}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>

            {/* Price */}
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              
              {/* Stock Status */}
              <div className="text-sm">
                {product.inStock ? (
                  <span className="text-accent">В наличии: {product.stock} шт.</span>
                ) : (
                  <span className="text-destructive">Нет в наличии</span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;