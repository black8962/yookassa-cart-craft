import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setIsMenuOpen(false);
    }
  };

  const categories = [
    { name: 'Главная', path: '/' },
    { name: 'Смартфоны', path: '/category/smartphones' },
    { name: 'Телевизоры', path: '/category/tvs' },
    { name: 'Приставки', path: '/category/consoles' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 shadow-glass backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:animate-glow-pulse transition-all duration-300">
              <Zap className="text-white w-6 h-6" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
                ТехЛавка
              </span>
              <div className="text-xs text-muted-foreground">Магазин будущего</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
              >
                {category.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></div>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="flex w-full">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-r-none border-r-0 glass"
              />
              <Button 
                type="submit" 
                variant="secondary"
                className="rounded-l-none border-l-0"
              >
                <Search className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative group">
                <ShoppingCart className="w-5 h-5 transition-transform group-hover:scale-110" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-gradient-primary text-white border-0 animate-glow-pulse">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 glass">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex mb-4 md:hidden">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-r-none border-r-0"
              />
              <Button type="submit" variant="secondary" className="rounded-l-none">
                <Search className="w-4 h-4" />
              </Button>
            </form>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className="block py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;