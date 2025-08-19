# QuickKart 🛒

A modern, fast grocery delivery platform similar to Blinkit, built with React, Node.js, and Clerk authentication.

## ✨ Features

- **10-Minute Delivery**: Lightning-fast grocery delivery
- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **User Authentication**: Secure login/signup with Clerk
- **Product Catalog**: Browse and search through various grocery categories
- **Shopping Cart**: Add, remove, and manage items
- **Real-time Updates**: Smooth animations with Framer Motion
- **Mobile Responsive**: Optimized for all devices

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Clerk** - Authentication
- **Axios** - HTTP client
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** (optional) - Database
- **Helmet** - Security
- **CORS** - Cross-origin requests
- **Rate Limiting** - API protection

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- Clerk account for authentication

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd quickkart
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies  
cd ../server && npm install
```

### 3. Environment Setup

#### Client Environment
1. Copy `client/.env.example` to `client/.env`
2. Get your Clerk Publishable Key from [Clerk Dashboard](https://clerk.com)
3. Update the `.env` file:
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxx
VITE_API_URL=http://localhost:5000/api
```

#### Server Environment
1. Copy `server/.env.example` to `server/.env`
2. Update the `.env` file with your configurations

### 4. Run the application

#### Development Mode (Both frontend and backend)
```bash
# From the root directory
npm run dev
```

#### Run separately
```bash
# Backend (Terminal 1)
npm run server

# Frontend (Terminal 2)  
npm run client
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## 📱 Screenshots

### Home Page
- Hero section with delivery promise
- Category browsing
- Featured products
- Modern gradient design

### Products Page  
- Advanced filtering and search
- Grid/List view toggle
- Real-time product filtering
- Smooth animations

### Shopping Cart
- Item quantity management
- Order summary
- Delivery information
- Responsive design

### User Profile
- Clerk authentication integration
- Order history
- User statistics

## 🔧 Project Structure

```
quickkart/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   └── ...
│   ├── public/
│   └── package.json
├── server/                 # Express backend
│   ├── models/            # Database models (if using MongoDB)
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── index.js           # Server entry point
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the client: `cd client && npm run build`
2. Deploy the `client/dist` folder
3. Update environment variables in deployment platform

### Backend (Railway/Heroku/DigitalOcean)
1. Deploy the `server` folder
2. Set environment variables
3. Update CORS settings for production URL

## 🔑 Environment Variables

### Client (.env)
- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk authentication key
- `VITE_API_URL` - Backend API URL

### Server (.env)
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port
- `CLIENT_URL` - Frontend URL for CORS
- `MONGODB_URI` - MongoDB connection string (optional)
- `CLERK_SECRET_KEY` - Clerk secret key

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

If you have any questions or need help with setup, please create an issue in the repository.

---

Made with ❤️ for fast grocery delivery
