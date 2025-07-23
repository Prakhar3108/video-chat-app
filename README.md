# 🌍 Streamify - Full-Stack Real-Time Chat & Video App

It is a scalable, production-ready language exchange platform featuring real-time messaging, video calling (with screen sharing, reactions, and call recording), friend requests, profile onboarding, and 32 dynamic UI themes. Built using the **MERN stack**, Stream's powerful infrastructure, and modern state management and data-fetching tools, this app offers a seamless communication experience.


---

## 🚀 Features

- 🔐 **Secure Authentication** – JWT-based auth with HTTP-only cookies
- 🧑‍🤝‍🧑 **Friend Requests** – Send/accept/cancel requests and view suggestions
- 💬 **Real-Time Messaging** – Typing indicators, reactions, threads, image uploads
- 📞 **Video Calls** – Screen sharing, reactions, and call recordings
- 🗂️ **Modular Code Structure** – Routes, controllers, middleware separation
- 🎨 **32 Themes** – Light/dark and custom themes via DaisyUI + Zustand + localStorage
- 🌐 **Full Deployment** – Backend and frontend deployed on Render under one domain

---

## 🛠️ Tech Stack

### Backend:
- Node.js, Express
- MongoDB & Mongoose
- JWT (auth), Bcrypt (password hashing)
- Stream Chat & Video API
- Cookie-parser, dotenv, CORS

### Frontend:
- React (with Vite)
- TailwindCSS + DaisyUI (UI & Themes)
- React Router (navigation)
- Zustand (global state)
- React Query (data fetching/mutations)
- Axios (API requests)
- Stream Chat & Video SDKs

---


---

## 🧪 Key Concepts

- 🧩 **Custom React Hooks** – Auth state, signup, login/logout, theme toggle
- ⚡ **React Query** – Efficient and reactive data handling
- 🌈 **Theme Persistence** – UI preference stored in localStorage
- 🔒 **Protected Routes** – Middleware to verify JWT and onboarding status

---

## 🧑‍💻 Getting Started

### Prerequisites:
- Node.js v18+
- MongoDB Atlas account
- Stream.io account (for API keys)

### Setup Instructions:

1. **Clone Repo:**

```bash
git clone https://github.com/Prakhar3108/video-chat-app
cd video-chat-app
```

2. **Set up environment variables:**
Create a .env file in /server:
```bash
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_key
STREAM_API_SECRET=your_stream_secret 
```
3. Install Dependencies:
```bash
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
```

4. Run Locally:
```bash
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev
```
## 🤝 Credits

- Built using [**Stream.io**](https://getstream.io/) Chat & Video SDK  
- UI powered by [**TailwindCSS**](https://tailwindcss.com/) + [**DaisyUI**](https://daisyui.com/)  
- State management via [**Zustand**](https://github.com/pmndrs/zustand)  
- Data fetching via [**React Query (TanStack Query)**](https://tanstack.com/query/latest)

