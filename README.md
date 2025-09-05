
# MERN Product Management App

This is a **MERN (MongoDB, Express.js, React.js, Node.js)** project that allows users to **add, edit, delete, and manage a list of products**. The project is also **Dockerized** for easy deployment.
✅ **Successfully deployed and tested in Docker containers.**

---

## 🚀 Features

* Add new products
* Edit existing products
* Delete products
* View product list in real-time
* Full-stack app (MongoDB + Express + React + Node)
* Docker support for containerized deployment
* **Deployed using Docker for smooth local setup & deployment**

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js + Express.js
* **Database:** MongoDB
* **Containerization:** Docker & Docker Compose

---

## 📂 Project Structure

```
MERN_Project/
├── backend/          # Express + Node.js server
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API routes
│   ├── server.js     # Entry point
│
├── frontend/         # React app (product-crud-app)
│   ├── src/          # Components & pages
│   ├── package.json
│
├── docker-compose.yml
├── Dockerfile
├── README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/hibasharif/MERN_Project.git
cd MERN_Project
```

### 2️⃣ Run with Docker

Make sure you have **Docker & Docker Compose** installed.

```bash
docker-compose up --build
```

### 3️⃣ Access the app

* Frontend: [http://localhost](http://localhost)
* Backend API: [http://localhost:5000](http://localhost:5000)
* MongoDB: Runs inside Docker on port `27017`

---

## 📦 Environment Variables

The backend automatically connects to MongoDB using this URI (from `docker-compose.yml`):

```
MONGO_URI=mongodb://mongodb:27017/Inventory
PORT=5000
```

⚠️ You don’t need a `.env` file when running with Docker, since these are passed directly in `docker-compose.yml`.

---

## 🐳 Docker Services

Your `docker-compose.yml` defines:

```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:latest
    container_name: mongodb_container
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

  backend:
    build: ./backend
    container_name: backend_container
    ports:
      - "5000:5000"
    environment:
      MONGO_URI: mongodb://mongodb:27017/Inventory
    depends_on:
      - mongodb

  frontend:
    build: ./frontend/product-crud-app
    container_name: frontend_container
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  mongo_data: {}
```

---

## 🖼️ Screenshots

<img width="1447" height="778" alt="image" src="https://github.com/user-attachments/assets/265519e0-4f89-4a9d-8de7-199802d27bff" />
<img width="1374" height="751" alt="image" src="https://github.com/user-attachments/assets/0d42a5c3-cf59-45cf-b1d2-aab7c85d8b7c" />
<img width="1438" height="847" alt="image" src="https://github.com/user-attachments/assets/92e5417d-c4fa-415a-8813-c775461d741d" />
<img width="1408" height="771" alt="image" src="https://github.com/user-attachments/assets/b38975ae-3dcb-4ae6-a79c-52744013cbfe" />


---

## 🔮 Future Enhancements

* User authentication
* Product image upload
* Pagination & search
* Deployment to cloud (Docker)

---

## 👩‍💻 Author

**Hiba Sharif**
🔗 [GitHub Profile](https://github.com/hibasharif)

---

👉 Do you also want me to add a **step-by-step "Verify Deployment" section** (like checking running containers with `docker ps` and accessing MongoDB logs), or just keep it simple like this?
