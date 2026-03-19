# Ecommerce Fullstack Design

This is a **full-stack eCommerce web application** built with React.js (frontend), Node.js + Express (backend), MongoDB database, and TailwindCSS for styling. The project is fully responsive for desktop and mobile devices and includes authentication, cart management, product CRUD, and checkout.

---

## **Features**

### Frontend
- Home page with welcoming message.
- Products page showing product images and names.
- Product Detail page with full description and "Add to Cart" functionality.
- Cart page with increment, decrement, remove, and total price calculation.
- Checkout page (mock checkout for demonstration).
- Admin panel to add/edit/delete products (protected route).
- Login & Register pages with authentication.
- Fully responsive layout for desktop and mobile.

### Backend
- Node.js + Express server.
- MongoDB database for product storage.
- API routes:
  - `GET /api/products` → fetch all products.
  - `GET /api/products/:id` → fetch product by ID.
  - `POST /api/products` → create product (admin only).
  - `PUT /api/products/:id` → update product (admin only).
  - `DELETE /api/products/:id` → delete product (admin only).

---

## **Screenshots**

### Home Page
![Home Page](<img width="1894" height="882" alt="homepage-screenshot" src="https://github.com/user-attachments/assets/1869358c-8e7a-475f-bbdf-a6f4db333ef9" />
)

### Products Page
![Products Page](<img width="1898" height="914" alt="productspage-screenshot" src="https://github.com/user-attachments/assets/4efda62b-b947-4608-87bb-e138e18d89ef" />
)

### Product Detail Page
![Product Detail](<img width="1878" height="630" alt="productdetail-screenshot" src="https://github.com/user-attachments/assets/936854db-35bf-48a2-bd96-c0ae34a2b427" />
)

### Cart Page
![Cart Page](<img width="1877" height="827" alt="cartpage-screenshot" src="https://github.com/user-attachments/assets/87991a5d-841a-412f-9b8f-41a321307e90" />
)

### Login / Register Page
![Login Page](<img width="1874" height="894" alt="loginpage-screenshot" src="https://github.com/user-attachments/assets/1e5a7e2c-7168-49a7-b16a-f87a636a0222" />
)
![Register Page](<img width="1884" height="866" alt="registerpage-screenshot" src="https://github.com/user-attachments/assets/a820f428-f603-4317-927b-0837a20a8302" />
)

---

## **Technology Stack**

- Frontend: React.js, TailwindCSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Routing: React Router DOM
- State management: React Context API
- Deployment: Vercel / Render

---

## **Local Setup**

### 1. Clone repository
```bash
git clone <your-github-repo-link>
cd ecommerce-fullstack-design
