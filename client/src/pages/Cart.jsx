import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center mx-auto"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Start Shopping
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Shopping Cart
            </h1>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium transition-colors flex items-center"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Clear Cart
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {items.length} {items.length === 1 ? "item" : "items"} in your cart
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm"
            >
              <div className="p-6">
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-sm dark:hover:bg-gray-700/50 transition-all"
                    >
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.category}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                            ₹{item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                              ₹{item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Minus className="w-4 h-4 dark:text-gray-300" />
                        </motion.button>
                        <span className="font-semibold text-gray-900 dark:text-white w-8 text-center">
                          {item.quantity}
                        </span>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Plus className="w-4 h-4 dark:text-gray-300" />
                        </motion.button>
                      </div>

                      {/* Total Price */}
                      <div className="text-right">
                        <div className="font-bold text-gray-900 dark:text-white">
                          ₹{item.price * item.quantity}
                        </div>
                      </div>

                      {/* Remove Button */}
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 p-1 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm sticky top-8"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Subtotal
                    </span>
                    <span className="font-semibold dark:text-white">
                      ₹{getTotalPrice()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Delivery Fee
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      Free
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Tax
                    </span>
                    <span className="font-semibold dark:text-white">
                      ₹{Math.round(getTotalPrice() * 0.05)}
                    </span>
                  </div>
                  <div className="border-t dark:border-gray-700 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="dark:text-white">Total</span>
                      <span className="dark:text-white">
                        ₹{getTotalPrice() + Math.round(getTotalPrice() * 0.05)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-700 dark:text-green-400 font-medium">
                      Delivery in 10-15 mins
                    </span>
                    <span className="text-green-600 dark:text-green-400">
                      🚀
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center group"
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Continue Shopping */}
                <Link to="/products" className="block mt-4">
                  <button className="w-full text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium py-2 transition-colors">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
