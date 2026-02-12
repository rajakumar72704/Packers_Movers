# 🚚 Packers & Movers - Full Stack MERN Application

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green)
![Node.js](https://img.shields.io/badge/Backend-Node.js-brightgreen)
![React](https://img.shields.io/badge/Frontend-React-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Stripe](https://img.shields.io/badge/Payments-Stripe-purple)

---

## 📌 Project Overview

Packers & Movers is a full-stack web application that allows users to:

- Register & Login
- Browse categories and subcategories
- Book consignments
- Make secure online payments
- Use AI-powered suggestions
- Manage their bookings

The project is built using modern MERN stack architecture with a separate frontend and backend.

---

## 🏗 Project Architecture

Packers_Movers
│
├── API → Backend (Node.js + Express)
│ ├── controller
│ ├── middleware
│ ├── models
│ ├── routes
│ ├── app.js
│ └── package.json
│
└── UI → Frontend (React.js)
├── public
├── src
└── package.json

---

## 🚀 Tech Stack

### 🔹 Frontend
- React.js
- React Router
- Axios
- CSS

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Stripe Payment Gateway
- JWT Authentication
- AI Integration

### 🔹 Deployment
- Render (Backend)
- Render / Netlify (Frontend)
- MongoDB Atlas (Database)

---

## ✨ Key Features

- 🔐 User Authentication (JWT Based)
- 📦 Consignment Booking System
- 💳 Stripe Payment Integration
- 🤖 AI-Based Assistance
- 📂 Category & Subcategory Management
- 🌐 RESTful API Architecture
- 🔒 Environment Variable Security

---

## 🔐 Environment Variables Setup

Create a `.env` file inside the `API` folder.

Example:
PORT=3001
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_secret_key


⚠ IMPORTANT:
- Never push `.env` to GitHub
- Always use environment variables for secret keys

---

## ⚙ Installation & Local Setup

### 1️⃣ Clone Repository
git clone https://github.com/rajakumar72704/Packers_Movers.git
cd Packers_Movers


---

### 2️⃣ Setup Backend
npm install
npm run dev app.js

Backend runs on:
http://localhost:3001

---

### 3️⃣ Setup Frontend
Open new terminal:
cd UI
npm install
npm start

Frontend runs on:
http://localhost:3000


---

## 💳 Stripe Payment Flow

- Backend creates Stripe Checkout session
- Frontend redirects user to Stripe
- On success, user is redirected back to application

All Stripe keys are securely managed using environment variables.

---

## 🌐 Deployment Guide

### Backend Deployment (Render)

- Create Web Service
- Root Directory → API
- Build Command → npm install
- Start Command → node app.js
- Add environment variables in Render dashboard

---

### Frontend Deployment (Render / Netlify)

- Root Directory → UI
- Build Command → npm install && npm run build
- Publish Directory → build

---

## 📸 Screenshots

(Add screenshots here)

Example:

---

## 📊 Future Enhancements

- Admin Dashboard
- Real-time tracking system
- Email notifications
- Booking history management
- Rating & Review system

---

## 👨‍💻 Author

Raja Kumar  
GitHub: https://github.com/rajakumar72704  

---

## 📄 License

This project is built for educational and portfolio purposes.
