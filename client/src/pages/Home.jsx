import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Clock, Shield, Truck, Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])

  // Mock featured products
  useEffect(() => {
    setFeaturedProducts([
      {
        id: 1,
        name: 'Fresh Bananas',
        price: 45,
        originalPrice: 60,
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300',
        category: 'Fruits',
        discount: 25,
        rating: 4.5,
        deliveryTime: '10 mins'
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
        deliveryTime: '10 mins'
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
        deliveryTime: '8 mins'
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
        deliveryTime: '12 mins'
      }
    ])
  }, [])

  const categories = [
    { name: 'Fruits & Vegetables', icon: '🥬', color: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'Dairy & Bakery', icon: '🥛', color: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Snacks & Beverages', icon: '🥤', color: 'bg-purple-100 dark:bg-purple-900/30' },
    { name: 'Personal Care', icon: '🧴', color: 'bg-pink-100 dark:bg-pink-900/30' },
    { name: 'Home Care', icon: '🧽', color: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { name: 'Baby Care', icon: '👶', color: 'bg-orange-100 dark:bg-orange-900/30' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Groceries delivered in
                <span className="block text-yellow-300">10 minutes</span>
              </h1>
              <p className="text-xl text-green-100 max-w-lg">
                Get fresh groceries, daily essentials & everything you need delivered to your doorstep
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-gray-800 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center group"
                  >
                    Start Shopping
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">10min</div>
                  <div className="text-green-100 text-sm">Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-green-100 text-sm">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-green-100 text-sm">Available</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
                  alt="Fresh Groceries"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold animate-bounce-subtle">
                🚀 10 min delivery
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 transition-colors"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">10 Minute Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">Lightning fast delivery to your doorstep</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 transition-colors"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Quality Assured</h3>
              <p className="text-gray-600 dark:text-gray-400">Fresh and quality products guaranteed</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 transition-colors"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Free Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">Free delivery on orders above ₹199</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our wide range of categories for all your daily needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${category.color} p-6 rounded-2xl text-center cursor-pointer hover:shadow-lg transition-all duration-200`}
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{category.name}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Best deals on fresh groceries
              </p>
            </div>
            <Link to="/products" className="hidden md:block">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                View All
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/products">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start shopping?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Download our app or start shopping online for the fastest grocery delivery experience
            </p>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-gray-800 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Start Shopping Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
