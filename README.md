﻿# School Manage

# School Management System

## Overview
The **School Management System** is a **full-stack application** consisting of a **backend (Java)** and a **frontend (HTML, CSS, JavaScript)**. It is designed to manage students, teachers, and courses in a school environment. The backend uses a local SQLite database, while the frontend provides a user-friendly interface with responsive design, validation, and interactivity.

---

## Features
### Backend:
- **Login System**: Admin access for managing records and login authentication.
- **Student Management**: Add, view, and manage student details.
- **Database Integration**: Data is stored in an SQLite database.

### Frontend:
- **Login Page**: A professional login form that uses HTML, CSS (Bootstrap), and JavaScript for validation.
- **Dashboard**: Displays a student management interface for adding and viewing students.
- **Responsiveness**: The UI is fully responsive across all devices (desktop, tablet, mobile).
- **Form Validation**: Uses JavaScript for form validation (username, password, and student fields).

---

## Folder Structure
```
SchoolManagementSystem/
│
├── src/
│   ├── ui/
│   │   ├── LoginPage.java
│   │   ├── Dashboard.java
│   │   ├── StudentManagement.java
│   ├── model/
│   │   ├── Student.java
│   ├── controller/
│   │   ├── DatabaseConnector.java
│   │   ├── StudentController.java
│   ├── Main.java
│
├── db/
│   ├── schema.sql
├── lib/
│   ├── sqlite-jdbc.jar
├── frontend/
│   ├── assets/
│   ├── index.html
│   ├── dashboard.html
│   ├── css/
│   │   ├── styles.css
│   ├── js/
│   │   ├── formValidation.js
│   ├── README.md
└── README.md
```

---

## Requirements
### Backend:
1. **Java Development Kit (JDK)** - Version 8 or later.
2. **Integrated Development Environment (IDE)**: IntelliJ IDEA, Eclipse, or NetBeans.
3. **SQLite JDBC Library** - Download the `sqlite-jdbc.jar` file from [Maven Repository](https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc).
4. **Database File**: `db/school.db` (included in the `db/` folder).

### Frontend:
1. **Web Browser**: Any modern browser (Chrome, Firefox, Safari, Edge).
2. **Optional**: Node.js for running a local server (not required for simple file viewing).

---

## Setup Instructions

### Backend (Java Setup):
1. Download or clone this repository to your local machine.
2. Import the project into your Java IDE (IntelliJ IDEA, Eclipse, or NetBeans).
3. Ensure that the `sqlite-jdbc.jar` is added to the project dependencies.
4. Run the `Main.java` class to start the application.
   - The login page will be displayed.
   - Use the default admin login (`username: admin`, `password: password`) to access the dashboard.

### Frontend (HTML, CSS, JavaScript):
1. Open the `frontend/index.html` file in a browser to access the login page.
2. The page is fully responsive and provides a user-friendly experience across devices.
3. Use JavaScript to handle form validation (username, password, and student details).

### Optional: Running the Frontend with a Local Server:
1. Install Node.js (if not already installed) from [Node.js website](https://nodejs.org/).
2. Install a simple HTTP server using npm:
   ```bash
   npm install -g http-server
   ```
3. Run the server from the `frontend/` folder:
   ```bash
   http-server
   ```
4. Open the browser and visit `http://localhost:8080` to view the application.

---

## How to Use
1. **Login Page**: Enter the admin credentials to access the dashboard.
2. **Dashboard**: After logging in, navigate to the student management section where you can add, update, or view student details.

---

## Testing
- Test the frontend on different devices to ensure responsiveness.
- Validate the form inputs (username, password, student details) to ensure proper JavaScript validation is working.

---

## Contributions
Feel free to fork the repository, contribute improvements, or submit bug reports. Contributions are always welcome!
