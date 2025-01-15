# 🍋 Little Lemon Capstone Project

## 📖 Description
**Little Lemon** is a Mediterranean restaurant website created as the capstone project for **Meta's Frontend Developer Professional Certificate**. This project aims to deliver a modern, responsive, and interactive user experience that allows customers to explore the menu, learn more about the restaurant, and easily make table reservations through an interactive booking system.

---

## 💻 Technologies Used

### 🖥️ Frontend
- **⚛️ React**: Main library for building user interfaces.
- **📘 TypeScript**: Adds static typing to JavaScript, improving code quality and maintainability.
- **⚡ Vite**: A fast development tool for building modern web applications.
- **🎨 Tailwind CSS**: A utility-first CSS framework for rapid and customizable design.

### 🖼️ Assets
- **🖼️ Images**: Optimized images to improve performance.
- **🔤 Google Fonts**: 'Markazi Text' font for an elegant and readable style.

### 🛠️ Development Tools
- **🧩 Node.js**: Runtime environment for building server-side and networking applications.
- **🧹 ESLint and Prettier**: Tools to ensure code quality and consistency.
- **🔗 Git and GitHub**: Version control and remote repository management.

---

## 🌟 Features
- **📱 Responsive Design**: The website adapts to different screen sizes, ensuring an optimal user experience on both mobile and desktop devices.
- **🎯 Active Navigation**: Menu links change color based on the active section.
- **💡 Interactive Elements**: Buttons and visual transitions enhance user interaction.
- **📅 Booking System**: Users can select a day, table, and available time slot to make a reservation.
- **💌 SweetAlert Integration**: Used to show booking confirmation and ticket download messages with stylish alerts.
- **⚡ Fast Performance**: Thanks to Vite and optimized assets.

---

## 🗂️ Project Structure
### 🏛️ Architecture: Component-Based Architecture
The project follows a component-based architecture, where each part of the UI is broken down into reusable components. The structure is organized into logical folders to separate concerns and improve maintainability.

```
/ Little Lemon
|-- /public
|   |-- favicon.png
|   |-- logo.svg
|   |-- og-image.png
|
|-- /src
|   |-- /assets
|       |-- /images
|           |-- restaurantfood.png
|   |-- /components
|       |-- /About
|           |-- index.tsx
|       |-- /Alert
|           |-- index.tsx
|       |-- /Booking
|           |-- BookingTable.tsx
|           |-- BookingTicket.tsx
|       |-- /Footer
|           |-- index.tsx
|       |-- /Header
|           |-- index.tsx
|       |-- /Menu
|           |-- index.tsx
|       |-- /Nav
|           |-- index.tsx
|   |-- /pages
|       |-- /Booking
|           |-- index.tsx
|       |-- /Home
|           |-- index.tsx
|   |-- App.tsx
|   |-- main.tsx
|   |-- index.css
|   |-- vite-env.d.ts
|
|-- .gitignore
|-- eslint.config.js
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.js
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
```

---

## ⚙️ Installation and Setup

### ✅ Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### 📦 Steps to Install
1. **Clone the repository**:
   ```bash
   git clone https://github.com/b1too/little-lemon-capstone-bito.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd little-lemon-capstone-bito
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser** and go to `http://localhost:5173`.

---

## 📋 Booking Process
1. **Select a Day**: Choose a day from the available next 7 days.
2. **Select a Table**: Click on an available table to see the time slots.
3. **Select a Time**: Pick an available time slot.
4. **Enter Your Details**: Provide your name and email to confirm the booking.
5. **Confirm and Download Ticket**: The booking is confirmed via SweetAlert, and users can download the booking ticket.

---

## 🤝 Contribution
If you would like to contribute to the project, follow these steps:
1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Make your changes and commit them**:
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push your changes**:
   ```bash
   git push origin feature/new-feature
   ```
5. **Open a pull request** on GitHub.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact
For questions or suggestions about the project, feel free to contact us:
- **📩 Email**: contacto@b1to.dev
- **🐙 GitHub**: [b1too](https://github.com/b1too)

---

© 2025 🍋 Little Lemon. All rights reserved.

