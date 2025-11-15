# 🌟 Model Stack Client  
**AI Model Inventory Management Application**

Model Stack Client is a full-stack AI Model Inventory Manager inspired by platforms like Hugging Face and Model Zoo. It lets users store, organize, update, search, filter, and explore AI models with rich metadata. The project combines real AI workflow concepts with modern full-stack development practices.

---

## 🧩 Backend Repository
https://github.com/AdalOnShow/Model-Stack-Server-Site
---

## 🚀 Core Features

### 1. Authentication (Firebase)
- Email/password registration and login  
- Google Sign-In  
- Redirect to intended route after login  
- Auto-login persistence  
- Private routes protected with context + routing guards  

---

### 2. Full CRUD for AI Models
Users can:
- Create new models with detailed metadata  
- View all models or open a single detailed page  
- Edit only their own models  
- Delete only their own models  

**Each model stores:**  
`name, framework, useCase, dataset, imageURL, description, createdBy, createdAt, purchaseCount`

---

### 3. Model Details Page
Shows:
- Full metadata  
- Purchase count  
- Creator info  
- Edit/Delete buttons (creator only)  

**Purchase flow includes:**  
- Adding a purchase document  
- Increasing purchase count  
- Live UI updates (no reload)  

---

### 4. Search System
- Search models by name  
- Backend uses **case-insensitive MongoDB regex**  
- Real-time filtered results  

---

### 5. Framework Filter
- Framework list loads dynamically from DB  
- Multi-select filtering supported  
- Query-based filtering  
- Backend uses **array matching**  

---

### 6. Purchase System
When a user buys a model:
- Purchase data is stored  
- `purchaseCount` increments using MongoDB `$inc`  
- UI updates instantly  
- Items appear in **My Purchased Models**  

---

### 7. User-Specific Pages
#### **My Models**
- All models created by the logged-in user  
- Card layout on mobile, table layout on desktop  

#### **My Purchased Models**
- All purchased models  
- Shows both buyer and seller information  

---

### 8. Home Page
- Featured: 6 most recently added models  
- About AI Models section  
- CTA section for login/registration  

---

### 9. Responsive UI
- Mobile-first approach  
- Cards on mobile, tables on desktop  
- Matching image dimensions  
- Fully responsive navbar + footer  

---

### 10. Dark/Light Theme
- DaisyUI themes  
- Toggle switch  
- User preference stored in **localStorage**  

---

### 11. Loading & Error Handling
- Skeleton loaders  
- Button spinners on form submit  
- Toast notifications (Sonner)  
- No warnings or errors on refresh  

---

### 12. Custom 404 Page
- Friendly error message  
- Navigation button  
- Works across all routes, even after hard reload  

---

## 🛠️ Tech Stack

### Frontend
- React  
- React Router  
- Context API  
- Axios  
- TailwindCSS + DaisyUI  
- Firebase Authentication  
- Swiper  
- Sonner Toast  

### Backend
- Node.js  
- Express.js  
- MongoDB Official Driver  
- CORS  
- Environment Variables  

### Database
- **MongoDB Atlas**  
  - `models` collection  
  - `purchases` collection  

### Deployment
- Client: **Netlify / Vercel**  
- Server: **Vercel**  
- Stable private routes on reload  

---

## 🎯 What This Project Demonstrates
- Strong modern React workflow  
- Clean Firebase Auth integration  
- Proper use of MongoDB operations: regex search, array filters, `$inc`  
- Well-structured REST API  
- Responsive UI with consistent design  
- Protected routing done correctly  
- Good UX with loaders and toasts  
- Solid understanding of full-stack architecture  

---
## 📦 Installation & Setup

### Install dependencies
npm install

### Environment variables
Create a `.env` file in the project root:

VITE_apiKey=your_firebase_key  
VITE_authDomain=your_domain  
VITE_projectId=your_project_id  
VITE_storageBucket=bucket  
VITE_messagingSenderId=sender_id  
VITE_appId=your_app_id  
VITE_SERVER_URL=https://your-server.vercel.app  

### Start the development server
npm run dev

---


