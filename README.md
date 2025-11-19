

# Model Stack 🌟

Manage your AI models with efficiency and clarity using Model Stack.

## Table of Contents 📖

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Contributing](#contributing)
- [Contact](#contact)

## About the Project 📃

Model Stack is a full-stack AI Model Inventory Management platform where users can create, manage, edit, filter, and purchase AI model entries in a clean and intuitive interface.
The system is designed for AI learners, developers, and researchers who need a simple yet powerful dashboard for organizing AI models with metadata like framework, dataset, use case, and creation details.

Built with a strong focus on usability, authentication, secure operations, and responsive UI, the platform feels like a simplified version of model hubs such as Hugging Face or Model Zoo.


## Project Overview 📊

Summarize the project objectives, key metrics, and any relevant statistics.

- **Objective:** Build a complete AI model management platform featuring authentication, CRUD operations, filtering, real-time purchase tracking, and user-specific dashboards.
- **Target Audience:** Developers, students, and AI enthusiasts.
- **Key Metrics:**  
  - Real-time Purchase Counter
  - Multiple Framework Filtering
  - Secure CRUD Operations
  - Firebase Authentication
  - Responsive UI
  - Private Routes Protected
  - Clean RESTful API architecture
- **Deployment:** 
  - Client: Firebase Hosting
  - Server: Vercel

## ✨ Key Features  

#### 1. **Full CRUD for AI Models**  
- Add, edit, delete, and browse AI models
- Each model displays name, framework, dataset, use case, description, and image  
- Secure update/delete actions (creator-only)  

#### 2. **Authentication System (Firebase)**  
- Email/Password login  
- Google Sign-In
- Auth persistence on reload
- Protected private routes

#### 3. **Search Functionality**  
- Search by model name 
- Case-insensitive search using MongoDB `$regex`   

#### 4. **Framework-Based Filtering**  
- Multi-framework filtering (e.g., TensorFlow, PyTorch) 
- Dynamic frameworks list fetched from MongoDB  
- Backend filtering using `$in` operator


#### 5. **Model Purchase System**  
- Purchase a model from its detail page  
- Increments purchase count using `$inc` 
- Stores purchase record in a separate collection
- Updates UI instantly

#### 6. **User Dashboards**  
- **My Models:**
  - Shows all models created by the logged-in user  
- **My Purchases:**
  - Lists all models purchased by the user
  - Includes seller and buyer details

#### 7. **Responsive Design**  
- Mobile cards    
- Desktop table layout  
- Consistent styles using shared components

#### 9. **Dark/Light Theme Toggle**  
- Integrated DaisyUI theme support   
- Saved in localStorage
- Applies across full site

#### 9. **Additional Features**  
- Custom 404 Page   
- Loading Skeletons & Spinners
- Global toast notifications (Sonner)
- Swiper-based homepage slider
 
## Tech Stack 🛠️

- **Frontend:** React Router, TailwindCSS, DaisyUI, Context API, Axios, Firebase Auth, Swiper, Sonner Toast  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB
- **Authentication:** Firebase, JWT  


## Installation ⚙️

Clone the repo and install dependencies:

```bash
git clone https://github.com/AdalOnShow/Model-Stack-Client-Site
cd Model-Stack-Client-Site
npm install
```

Set up environment variables by creating a `.env` file in the root directory:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_measurementId=your_firebase_measurement_id
VITE_SERVER_URL=your_server_url

```

Run the application:

```bash
npm run dev
```

## Contributing 🤝

Contributions are always welcome.

### Steps to contribute:
  - Fork the Project
  - Create a branch (`git checkout -b feature/AmazingFeature`)
  - Commit changes (`git commit -m 'Add some AmazingFeature'`)
  - Push the branch (`git push origin feature/AmazingFeature`)
  - Open a Pull Request

## Contact 📬

**🔗 Live URL:** [Model Stack](https://model-stack.web.app/)

Sharif Adal - [@AdalOnShow](https://www.linkedin.com/in/adalonshow/) - sharifadal2008@gmail.com  

Client GitHub: [Model Stack Client](https://github.com/AdalOnShow/Model-Stack-Client-Site)
 

🔗 Server GitHub: [Model Stack Server](https://github.com/AdalOnShow/Model-Stack-Server-Site)
