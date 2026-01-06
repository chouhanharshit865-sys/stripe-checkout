# MERN Stack Stripe Checkout Application

This project implements a **simple checkout flow using Stripe** in a **MERN stack** application.  
It allows users to browse products, add them to a cart, and complete payments securely using **Stripe Checkout**, with **server-side payment verification via Stripe webhooks**.

---

## 🚀 Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Stripe API

---

## ✨ Features

- Product listing using mock data
- Add to cart functionality
- Cart item count indicator
- Checkout page with mandatory email input
- Secure Stripe Checkout redirect
- Server-side payment verification using Stripe webhooks
- Order tracking in MongoDB
- Success & failure payment handling

---

## 🔐 Payment Flow (High Level)

1. User selects products and proceeds to checkout
2. Frontend calls backend to create a Stripe Checkout Session
3. User is redirected to Stripe-hosted checkout page
4. Stripe processes the payment
5. Stripe sends a webhook event to backend
6. Backend verifies webhook signature
7. Order status is saved/updated in database
8. User is redirected to success or failure page

> ⚠️ Payment confirmation is **never trusted from the frontend** and is always verified using Stripe webhooks.

---

## 📂 Project Structure

root
│
├── client/ # React frontend
│
└── server/ # Node + Express backend
├── routes
├── controllers
├── models
└── config


---

## ⚙️ Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=8800
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLIENT_URL=http://localhost:5173

## Start server
cd server
npm install
npm run dev

##  Start React app
Open a new terminal:
cd client
npm install
npm run dev

## Webhook
To test webhooks locally, use Stripe CLI:
stripe listen --forward-to localhost:8800/api/stripe/webhook

