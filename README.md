# Aptora - Building Management System

Aptora is a modern web application for managing apartment buildings, agreements, users, and administrative operations. It streamlines apartment listings, agreement requests, coupon management, payments, and announcements for both admins and users.

## Live Demo

- [Aptora](https://aptora-25.web.app/)

## Preview

![Aptora Screenshot](/public//Aptora-live.png)

## Technologies Used

- **Frontend:** React, Vite, TailwindCSS
- **Routing & State:** React Router, React Query
- **Forms & Validation:** React Hook Form
- **Authentication:** Firebase
- **Payments:** Stripe
- **Backend:** MongoDB (API not included in this repo)
- **Other:** Axios, Headless UI, React Icons, React Hot Toast

## Core Features

- **User & Admin Dashboards:** Role-based dashboards for managing apartments, agreements, coupons, and announcements.
- **Apartment Management:** Admins can add, update, and delete apartments; users can browse listings.
- **Agreement Requests:** Users request agreements; admins review and update user roles.
- **Coupon Management:** Admins create and manage discount coupons.
- **Payment System:** Secure rent payments via Stripe with payment history.
- **Announcement System:** Admins post announcements for all users.
- **Statistics:** Admin dashboard displays key building stats.
- **Responsive Design:** Optimized for mobile and desktop.

## Dependencies

- react
- react-router-dom
- tailwindcss
- @headlessui/react
- react-icons
- axios
- react-hook-form
- firebase
- mongodb
- @tanstack/react-query
- react-hot-toast
- stripe
- @stripe/react-stripe-js
- @stripe/stripe

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/fuadhasan05/aptora.git
   cd aptora
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local`.
   - Fill in your Firebase and Stripe credentials in `.env.local`.

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Open the app in your browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

6. **(Optional) Build for production:**
   ```sh
   npm run build
   ```
