import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Plus, Minus, ArrowLeft, Clock, Truck, Shield } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    // Mock product fetch
    setTimeout(() => {
      const mockProduct = {
        id: parseInt(id),
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
        origin: 'Local Farms'
      }
      setProduct(mockProduct)
      setLoading(false)
    }, 1000)
  }, [id])

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/products" className="text-green-600 hover:text-green-700 font-medium">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/products"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg font-semibold">
                  {product.discount}% OFF
                </div>
              )}

              {/* Delivery Time */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-lg font-medium flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {product.deliveryTime}
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{product.rating}</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{product.weight}</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-sm font-medium">
                  Save {product.discount}%
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutrition */}
            <div className="bg-gray-100 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Nutrition (per 100g)</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Calories</span>
                  <div className="font-semibold">{product.nutrition.calories}</div>
                </div>
                <div>
                  <span className="text-gray-600">Protein</span>
                  <div className="font-semibold">{product.nutrition.protein}</div>
                </div>
                <div>
                  <span className="text-gray-600">Carbs</span>
                  <div className="font-semibold">{product.nutrition.carbs}</div>
                </div>
                <div>
                  <span className="text-gray-600">Fiber</span>
                  <div className="font-semibold">{product.nutrition.fiber}</div>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold text-gray-900">Quantity</span>
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>
                  <span className="font-bold text-xl w-12 text-center">
                    {quantity}
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add {quantity} to Cart - ₹{product.price * quantity}
              </motion.button>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Clock className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-sm font-semibold">10 min</div>
                <div className="text-xs text-gray-600">Delivery</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Truck className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-semibold">Free</div>
                <div className="text-xs text-gray-600">Shipping</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Shield className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-sm font-semibold">Fresh</div>
                <div className="text-xs text-gray-600">Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
