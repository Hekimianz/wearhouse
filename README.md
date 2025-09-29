# Wearhouse 🛒

A practice React project built to explore **Context API** and **React Router** by simulating a small e-commerce clothing store.

## 📖 Purpose

The goal of this project is to practice managing global state in React using **Context API** instead of Redux or prop drilling.  
It also includes routing and localStorage persistence to mimic a more realistic e-commerce workflow.

## 🎯 Features

- **Product Listing Page** – Browse clothing products with image, price, and cart controls.
- **Cart Management (via Context)**
  - Add, remove, and update product quantities.
  - Subtotal per product and total cost.
  - Cart persists in localStorage.
- **Cart Page** – Review your cart, update items, or remove them.
- **Checkout Flow** – Simulate purchase, clear the cart, and display a thank you message.
- **Optional Product Detail Page** – View a single product with its info and cart controls.
- **Empty Cart State** – Friendly message with navigation back to products.
- **Error Handling** – Prevents invalid quantities (below 1 or above max).

## 🛠️ Tech Stack

- React
- Context API
- React Router
- [Fake Store API](https://fakestoreapi.com/) for product data

## 🚀 Why this project?

This app is not meant to be production-ready, but rather a learning sandbox to:

- Understand Context API in practice.
- Avoid prop drilling for global state (cart, totals).
- Practice routing in React.
- Experiment with localStorage persistence.

---
