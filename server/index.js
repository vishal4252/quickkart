require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
})

// Middleware
app.use(helmet())
app.use(limiter)
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Database connection
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err))
}

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'QuickKart API is running' })
})

// Products routes
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Fresh Bananas',
      price: 45,
      originalPrice: 60,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300',
      category: 'Fruits',
      discount: 25,
      rating: 4.5,
      deliveryTime: '10 mins',
      inStock: true
    },
    {
      id: 2,
      name: 'Organic Milk',
      price: 65,
      originalPrice: 75,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300',
      category: 'Dairy',
      discount: 13,
      rating: 4.8,
      deliveryTime: '10 mins',
      inStock: true
    },
    {
      id: 3,
      name: 'Brown Bread',
      price: 35,
      originalPrice: 40,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
      category: 'Bakery',
      discount: 12,
      rating: 4.3,
      deliveryTime: '8 mins',
      inStock: true
    },
    {
      id: 4,
      name: 'Fresh Tomatoes',
      price: 30,
      originalPrice: 40,
      image: 'https://images.unsplash.com/photo-1546470427-e75e18e95b08?w=300',
      category: 'Vegetables',
      discount: 25,
      rating: 4.2,
      deliveryTime: '12 mins',
      inStock: true
    },
    {
      id: 5,
      name: 'Basmati Rice',
      price: 120,
      originalPrice: 150,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300',
      category: 'Grains',
      discount: 20,
      rating: 4.6,
      deliveryTime: '15 mins',
      inStock: true
    },
    {
      id: 6,
      name: 'Greek Yogurt',
      price: 85,
      originalPrice: 100,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300',
      category: 'Dairy',
      discount: 15,
      rating: 4.7,
      deliveryTime: '10 mins',
      inStock: true
    },
    {
      id: 7,
      name: 'Green Apples',
      price: 80,
      originalPrice: 95,
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300',
      category: 'Fruits',
      discount: 16,
      rating: 4.4,
      deliveryTime: '10 mins',
      inStock: true
    },
    {
      id: 8,
      name: 'Potato Chips',
      price: 25,
      originalPrice: 30,
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300',
      category: 'Snacks',
      discount: 17,
      rating: 4.0,
      deliveryTime: '8 mins',
      inStock: true
    }
  ]

  const { category, search, sort } = req.query
  let filteredProducts = [...products]

  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    )
  }

  // Search filter
  if (search) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    )
  }

  // Sort products
  if (sort) {
    switch (sort) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
      case 'discount':
        filteredProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0))
        break
      default:
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
    }
  }

  res.json({
    success: true,
    data: filteredProducts,
    total: filteredProducts.length
  })
})

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id)
  
  // Mock detailed product data
  const product = {
    id: productId,
    name: 'Fresh Organic Bananas',
    price: 45,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600',
    category: 'Fruits',
    discount: 25,
    rating: 4.5,
    deliveryTime: '10 mins',
    description: 'Fresh, organic bananas sourced directly from local farms. Rich in potassium and perfect for a healthy diet. These premium quality bananas are handpicked and delivered fresh to your doorstep.',
    features: [
      'Organic & Fresh',
      'Rich in Potassium',
      'Perfect for Smoothies',
      'Natural Energy Source'
    ],
    nutrition: {
      calories: 89,
      protein: '1.1g',
      carbs: '22.8g',
      fiber: '2.6g'
    },
    weight: '1 kg',
    origin: 'Local Farms',
    inStock: true
  }

  res.json({
    success: true,
    data: product
  })
})

// Categories
app.get('/api/categories', (req, res) => {
  const categories = [
    { id: 1, name: 'Fruits & Vegetables', icon: '🥬', color: 'bg-green-100' },
    { id: 2, name: 'Dairy & Bakery', icon: '🥛', color: 'bg-blue-100' },
    { id: 3, name: 'Snacks & Beverages', icon: '🥤', color: 'bg-purple-100' },
    { id: 4, name: 'Personal Care', icon: '🧴', color: 'bg-pink-100' },
    { id: 5, name: 'Home Care', icon: '🧽', color: 'bg-yellow-100' },
    { id: 6, name: 'Baby Care', icon: '👶', color: 'bg-orange-100' }
  ]

  res.json({
    success: true,
    data: categories
  })
})

// Mock orders endpoint
app.get('/api/orders', (req, res) => {
  res.json({
    success: true,
    data: []
  })
})

app.post('/api/orders', (req, res) => {
  const { items, total, address } = req.body

  // Mock order creation
  const order = {
    id: Math.floor(Math.random() * 10000),
    items,
    total,
    address,
    status: 'confirmed',
    estimatedDelivery: '10-15 mins',
    createdAt: new Date().toISOString()
  }

  res.status(201).json({
    success: true,
    data: order
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  })
})

app.listen(PORT, () => {
  console.log(`🚀 QuickKart server running on port ${PORT}`)
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`)
})
