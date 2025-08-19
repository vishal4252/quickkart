import { motion } from 'framer-motion'
import { Plus, Star, Clock } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-gray-100 dark:border-gray-700 group"
    >
      {/* Product Image */}
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl"
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
            {product.discount}% OFF
          </div>
        )}

        {/* Delivery Time */}
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {product.deliveryTime}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
            {product.category}
          </span>
          {product.rating && (
            <div className="flex items-center">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">{product.rating}</span>
            </div>
          )}
        </div>

        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center group"
        >
          <Plus className="w-4 h-4 mr-1 group-hover:rotate-90 transition-transform" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProductCard
