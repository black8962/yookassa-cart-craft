import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                ТехЛавка
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Магазин современных технологий. Мы предлагаем только лучшие устройства 
              от проверенных производителей с гарантией качества.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                <Facebook className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                <Instagram className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                <Twitter className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Каталог</h3>
            <div className="space-y-2">
              <Link to="/category/smartphones" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Смартфоны
              </Link>
              <Link to="/category/tvs" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Телевизоры
              </Link>
              <Link to="/category/consoles" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Игровые приставки
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Помощь</h3>
            <div className="space-y-2">
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Доставка и оплата
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Возврат товара
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Гарантия
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">info@techlavka.ru</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Москва, ул. Тверская, д. 1
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 ТехЛавка. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Политика конфиденциальности
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;