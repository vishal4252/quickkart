import { motion } from 'framer-motion'
// import { useUser, SignOutButton } from '@clerk/clerk-react'
import { User, MapPin, Clock, Heart, Settings, LogOut } from 'lucide-react'

const Profile = () => {
  // const { user } = useUser()
  const user = null // Temporarily disable Clerk

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">👤</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in</h2>
          <p className="text-gray-600">You need to be logged in to view your profile</p>
        </div>
      </div>
    )
  }

  const orderHistory = [
    {
      id: 1,
      date: '2024-01-15',
      items: ['Fresh Bananas', 'Organic Milk', 'Brown Bread'],
      total: 145,
      status: 'Delivered'
    },
    {
      id: 2,
      date: '2024-01-12',
      items: ['Fresh Tomatoes', 'Greek Yogurt'],
      total: 115,
      status: 'Delivered'
    },
    {
      id: 3,
      date: '2024-01-10',
      items: ['Basmati Rice', 'Green Apples'],
      total: 200,
      status: 'Delivered'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <User className="w-12 h-12 text-white" />
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {user.fullName || user.firstName || 'User'}
          </h1>
          <p className="text-gray-600">{user.primaryEmailAddress?.emailAddress}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Profile Info</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Full Name</div>
                    <div className="font-medium">
                      {user.fullName || `${user.firstName} ${user.lastName}` || 'Not provided'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="font-medium">New Delhi, India</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Member Since</div>
                    <div className="font-medium">
                      {new Date(user.createdAt).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <SignOutButton>
                  <button className="w-full flex items-center justify-center space-x-2 text-red-600 hover:text-red-700 font-medium py-2 transition-colors">
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </SignOutButton>
              </div>
            </div>
          </motion.div>

          {/* Order History */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Order History</h2>
              </div>
              <div className="p-6">
                {orderHistory.length > 0 ? (
                  <div className="space-y-4">
                    {orderHistory.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-semibold text-gray-900">
                              Order #{order.id}
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(order.date).toLocaleDateString('en-IN')}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-gray-900">
                              ₹{order.total}
                            </div>
                            <div className="text-sm text-green-600 font-medium">
                              {order.status}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Items: </span>
                          {order.items.join(', ')}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-4xl mb-4">📦</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No orders yet
                    </h3>
                    <p className="text-gray-600">
                      Start shopping to see your order history here
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {orderHistory.length}
            </div>
            <div className="text-gray-600">Total Orders</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              ₹{orderHistory.reduce((sum, order) => sum + order.total, 0)}
            </div>
            <div className="text-gray-600">Total Spent</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              0
            </div>
            <div className="text-gray-600">Favorite Items</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile
