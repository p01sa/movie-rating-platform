# 🎬 Movie Rating Platform

Movie Rating Platform is a web application built with Node.js and Express.js.  
It provides a secure and user-friendly environment for managing and reviewing movies.  
The project implements JWT (JSON Web Token) authentication to ensure secure access and role-based permissions.

---

## 🔑 Key Features
- User Registration & Login: Users can create accounts and log in securely using JWT tokens.
- Role-Based Access Control:
  - Admin (admin@admin.com / j12nd0): Full privileges to add, edit, and delete movies.
  - Regular Users: Can browse the movie list, view details, and add movies to their watchlist.
- Movie Management: Admins can manage the movie database, while users can explore and interact with available movies.
- Database Integration: Uses SQLite for storing user accounts, movies, and ratings.
- Secure Authentication: Token-based system ensures that only authorized users can access protected routes.

---

## ⚙️ Tech Stack
- Backend: Node.js, Express.js  
- Authentication: JWT (JSON Web Token)  
- Database: SQLite  
- Libraries: bcrypt (password hashing), dotenv (environment variables), and other npm packages  

---

## 🚀 Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/USERNAME/movie-rating-platform.git

2. 	Navigate to the project folder:
cd movie-rating-platform

3. 	Install dependencies:
npm install

4. 	Start the server:
npm run start
5. 	Access the application at:
http://localhost:3000
## 🎯 Purpose
This project demonstrates how to build a complete backend application with authentication, authorization, and database integration. It highlights the use of modern Node.js practices, secure token-based login, and role management. The platform can serve as a foundation for larger applications, such as streaming services or content management systems.
## 👤 Admin Credentials
• 	Email: admin@admin.com
• 	Password: j12nd0