<div align="center">

<img src="./frontend/public/Winkly.jpg" alt="Winkly Logo" width="140"/>

# Winkly

**A modern real-time chat application built with the MERN Stack.**

Secure authentication, real-time messaging, image sharing, online presence, and a responsive user experience.

<p>
  <a href="https://winkly-chat-app.onrender.com/">Live Demo</a> •
  <a href="https://github.com/Amreen-Shaikh-2727/Winkly-Chat-App">Repository</a>
</p>

<p>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge\&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4-010101?style=for-the-badge\&logo=socketdotio)
![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge\&logo=render)

</p>

</div>

---

## Preview

> Replace the image below with your application screenshot.

<p align="center">
<img src="./frontend/public/preview.png" width="900"/>
</p>

---

## Features

* Secure JWT Authentication
* Cookie-based Sessions
* Real-Time Messaging with Socket.IO
* Online User Status
* Image Sharing with Cloudinary
* Profile Picture Upload
* Responsive Design
* Protected Routes
* Toast Notifications
* Modern UI using Tailwind CSS & DaisyUI

---

## Tech Stack

<table>
<tr>
<td align="center" width="180">

### Frontend

React

Vite

Zustand

React Router

Axios

Tailwind CSS

DaisyUI

Socket.IO Client

</td>

<td align="center" width="180">

### Backend

Node.js

Express.js

MongoDB

Mongoose

Socket.IO

JWT

BcryptJS

Cookie Parser

</td>

<td align="center" width="180">

### Services

MongoDB Atlas

Cloudinary

Render

GitHub

</td>
</tr>
</table>

---

## Project Structure

```text
Winkly
├── backend
│   ├── src
│   ├── routes
│   ├── models
│   ├── controllers
│   ├── middleware
│   └── lib
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── store
│   └── lib
│
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/Amreen-Shaikh-2727/Winkly-Chat-App.git
```

Navigate to the project

```bash
cd Winkly-Chat-App
```

Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

---

## Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5001

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

---

## Running Locally

Backend

```bash
cd backend
npm run dev
```

Frontend

```bash
cd frontend
npm run dev
```

---

## Deployment

The application is deployed on **Render** with:

* Frontend
* Backend API
* MongoDB Atlas
* Cloudinary

**Live Application**

https://winkly-chat-app.onrender.com/

---

## Future Improvements

* Read Receipts
* Typing Indicators
* Group Chats
* Voice Messages
* Push Notifications
* Emoji Reactions
* File Sharing

---

## Author

**Amreen Shaikh**

GitHub: https://github.com/Amreen-Shaikh-2727
