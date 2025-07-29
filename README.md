# Aptora - Building Management System

## Purpose

Aptora is a comprehensive building management system designed to simplify and automate the management of apartments, agreements, users, and administrative operations. It provides an intuitive interface for both admins and users to efficiently handle apartment listings, agreement requests, coupons, payments, and more.

## Live URL

(https://aptora-25.web.app/)

## Key Features

- **User & Admin Dashboards**
  - Admins manage apartments, agreements, coupons, announcements, and members.
  - Users browse apartments, send agreement requests, and view their payment history.
- **Apartment Management**
  - View apartment details including floor, block, apartment number, and rent.
  - Add, update, and delete apartments (admin only).
- **Agreement Requests**
  - Users can request agreements for apartments.
  - Admins review and accept/reject requests, updating user roles accordingly.
- **Coupon Management**
  - Admins can create discount coupons with code, description, and discount percentage.
- **Payment System**
  - Users can pay rent securely via Stripe integration.
  - Payment history is available for each user.
- **Announcement System**
  - Admins can make announcements visible to all users.
- **Admin Profile & Statistics**
  - Displays total rooms, availability percentages, user and member counts.
- **Responsive Design**
  - Mobile and desktop optimized with TailwindCSS.

## NPM Packages Used

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
