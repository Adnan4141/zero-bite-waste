# Zero-Bite-Waste

A Node.js + MongoDB powered donation backend to reduce food waste and connect donors with those in need.

## 🌱 Overview

**Zero-Bite-Waste** is an initiative to minimize food waste by enabling individuals and businesses to donate excess food and help those in need. Users can register, log in, submit donations, and send inquiries.

## 🔐 Authentication

- 🔸 `POST /api/auth/register` - Register a new user
- 🔸 `POST /api/auth/login` - Log in and receive a JWT token

Users must be authenticated to submit donations (if protected).

## 📡 API Endpoints

### 🥘 Donations
- `POST /api/donate` - Submit a new food donation (with name, food type, quantity, location, contact)

### 📬 Contact
- `POST /api/contact` - Submit a contact message

### 👤 Auth
- `POST /api/auth/register` - Register with name, email, password
- `POST /api/auth/login` - Login and get token

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- RESTful API
- React (for frontend)
- Tailwind CSS 

## 🚀 Getting Started

```bash
git clone https://github.com/Adnan4141/zero-bite-waste.git
cd zero-bite-waste-frontend
cd zero-bite-waste-backend
npm install
npm run dev
cd ..

cd zero-bite-waste-backend
npm install
npm run dev
