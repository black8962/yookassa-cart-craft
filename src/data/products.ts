import { Product } from '@/types/product';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 134990,
    originalPrice: 149990,
    description: 'Самый мощный iPhone с революционным чипом A17 Pro и профессиональной камерой',
    category: 'smartphones',
    brand: 'Apple',
    image: '/api/placeholder/600/600',
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'],
    stock: 15,
    rating: 4.9,
    reviews: 1247,
    specifications: {
      'Экран': '6.7" Super Retina XDR OLED',
      'Процессор': 'Apple A17 Pro',
      'Память': '256GB',
      'Камера': '48MP Pro + 12MP Ultra Wide + 12MP Telephoto',
      'Батарея': 'до 29 часов видео'
    },
    features: [
      'Titanium корпус',
      'USB-C разъем',
      'Action Button',
      'ProRAW и ProRes видео',
      '5G поддержка'
    ],
    inStock: true,
    isNew: true,
    isSale: true
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 119990,
    description: 'Флагман с AI-возможностями, S Pen и профессиональной камерой 200MP',
    category: 'smartphones',
    brand: 'Samsung',
    image: '/api/placeholder/600/600',
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'],
    stock: 8,
    rating: 4.8,
    reviews: 892,
    specifications: {
      'Экран': '6.8" Dynamic AMOLED 2X',
      'Процессор': 'Snapdragon 8 Gen 3',
      'Память': '512GB',
      'Камера': '200MP + 50MP + 12MP + 10MP',
      'Батарея': '5000mAh'
    },
    features: [
      'S Pen встроен',
      'Galaxy AI функции',
      'Gorilla Glass Victus 2',
      '100x Space Zoom',
      'Водонепроницаемый IP68'
    ],
    inStock: true,
    isNew: true
  },
  {
    id: '3',
    name: 'LG OLED65C3',
    price: 199990,
    originalPrice: 249990,
    description: 'OLED телевизор 65" с процессором α9 Gen6 AI для игр и кино',
    category: 'tvs',
    brand: 'LG',
    image: '/api/placeholder/600/600',
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'],
    stock: 5,
    rating: 4.9,
    reviews: 456,
    specifications: {
      'Диагональ': '65 дюймов',
      'Разрешение': '4K Ultra HD (3840x2160)',
      'Технология': 'OLED evo',
      'Процессор': 'α9 Gen6 AI Processor 4K',
      'HDR': 'Dolby Vision IQ, HDR10 Pro, HLG'
    },
    features: [
      'Perfect Black',
      'Gaming Hub',
      'Magic Remote',
      'Dolby Atmos',
      'webOS 23'
    ],
    inStock: true,
    isSale: true
  },
  {
    id: '4',
    name: 'Sony PlayStation 5',
    price: 54990,
    description: 'Игровая консоль нового поколения с SSD и 3D звуком',
    category: 'consoles',
    brand: 'Sony',
    image: '/api/placeholder/600/600',
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'],
    stock: 12,
    rating: 4.7,
    reviews: 2341,
    specifications: {
      'CPU': 'AMD Zen 2, 8 ядер',
      'GPU': 'AMD RDNA 2',
      'Память': '16GB GDDR6',
      'Накопитель': '825GB SSD',
      'Разрешение': 'до 8K'
    },
    features: [
      'Ray Tracing',
      'DualSense контроллер',
      '3D Audio',
      'Backward Compatibility',
      '120fps поддержка'
    ],
    inStock: true,
    isNew: false
  },
  {
    id: '5',
    name: 'Samsung Neo QLED QN95C',
    price: 299990,
    description: 'Премиум QLED телевизор 75" с технологией Quantum Matrix',
    category: 'tvs',
    brand: 'Samsung',
    image: '/api/placeholder/600/600',
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'],
    stock: 3,
    rating: 4.8,
    reviews: 234,
    specifications: {
      'Диагональ': '75 дюймов',
      'Разрешение': '4K Neo QLED',
      'Процессор': 'Neo Quantum Processor 4K',
      'HDR': 'Quantum HDR 2000',
      'Частота': '120Hz'
    },
    features: [
      'Quantum Matrix Technology',
      'Neo Quantum Processor',
      'Anti-Glare Screen',
      'Gaming Hub',
      'Tizen OS'
    ],
    inStock: true,
    isNew: true
  },
  {
    id: '6',
    name: 'Xbox Series X',
    price: 49990,
    description: 'Самая мощная консоль Xbox с 4K игровой производительностью',
    category: 'consoles',
    brand: 'Microsoft',
    image: '/api/placeholder/600/600',
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'],
    stock: 7,
    rating: 4.6,
    reviews: 1876,
    specifications: {
      'CPU': 'AMD Zen 2, 8 ядер 3.8GHz',
      'GPU': 'AMD RDNA 2, 12 TFLOPS',
      'Память': '16GB GDDR6',
      'Накопитель': '1TB NVMe SSD',
      'Разрешение': '4K нативное, 8K поддержка'
    },
    features: [
      'Quick Resume',
      'Smart Delivery',
      'Auto HDR',
      'Spatial Audio',
      'Game Pass совместимость'
    ],
    inStock: true
  }
];

export const categories = [
  {
    id: 'smartphones',
    name: 'Смартфоны',
    description: 'Современные мобильные устройства от ведущих производителей',
    image: '/api/placeholder/400/300',
    productCount: sampleProducts.filter(p => p.category === 'smartphones').length
  },
  {
    id: 'tvs', 
    name: 'Телевизоры',
    description: 'Большие экраны для дома с передовыми технологиями',
    image: '/api/placeholder/400/300',
    productCount: sampleProducts.filter(p => p.category === 'tvs').length
  },
  {
    id: 'consoles',
    name: 'Игровые приставки',
    description: 'Консоли нового поколения для незабываемых игровых впечатлений',
    image: '/api/placeholder/400/300',
    productCount: sampleProducts.filter(p => p.category === 'consoles').length
  }
];