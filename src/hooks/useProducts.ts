import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { sampleProducts } from '@/data/products';

export const useProducts = (category?: string, searchTerm?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = () => {
      setLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        let filteredProducts = [...sampleProducts];

        // Filter by category
        if (category) {
          filteredProducts = filteredProducts.filter(
            product => product.category === category
          );
        }

        // Filter by search term
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          filteredProducts = filteredProducts.filter(
            product =>
              product.name.toLowerCase().includes(searchLower) ||
              product.brand.toLowerCase().includes(searchLower) ||
              product.description.toLowerCase().includes(searchLower)
          );
        }

        setProducts(filteredProducts);
        setLoading(false);
      }, 300);
    };

    loadProducts();
  }, [category, searchTerm]);

  const getProductById = (id: string): Product | undefined => {
    return sampleProducts.find(product => product.id === id);
  };

  return {
    products,
    loading,
    getProductById
  };
};