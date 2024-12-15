# Career Path Navigator

Career Path Navigator is a MERN-stack application designed to help users discover career options aligned with their skills and interests. The platform also provides recommendations for relevant courses and scholarships.

## Features
- **Career Suggestions**: Personalized recommendations based on user input.
- **Courses**: Curated courses to help users gain necessary skills.
- **Scholarships**: Financial aid options tailored to users' needs.
- **Interactive Interface**: A clean and user-friendly React front-end.

## Technologies Used
- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Project Setup

### Prerequisites
- Node.js and npm installed
- MongoDB installed locally or an active MongoDB Atlas account

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```

### Connecting Frontend and Backend
- The frontend is configured to proxy API requests to the backend via `http://localhost:5000`. Ensure both servers are running concurrently.

## Folder Structure
```
career-path-navigator/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md

