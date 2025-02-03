# 🚀 HCLTech - Node.js, GraphQL, Kafka, MongoDB, BDD & More


## 📌 Overview
We have built a **high-performance, scalable microservices application** utilizing modern technologies such as:
- **Node.js** (Backend API)
- **GraphQL** (Efficient data fetching)
- **Kafka & Zookeeper** (Event-driven architecture)
- **MongoDB** (NoSQL Database)
- **Kong API Gateway** (Secure API management)
- **JWT Authentication** (Secure user authentication)
- **BDD Testing** (Cucumber + Playwright for end-to-end automation)
- **Docker & Kubernetes** (Containerization and orchestration)
- **CI/CD Pipelines** (Automated testing & deployment with GitHub Actions)

This project showcases **HCLTech's focus on innovation and excellence** in engineering.

---

## 🛠️ Tech Stack
| Category         | Technology Used |
|----------------|----------------|
| Backend       | Node.js, Express.js, GraphQL |
| Database      | MongoDB |
| Message Queue | Kafka, Zookeeper |
| API Gateway   | Kong |
| Authentication | JWT, OAuth |
| Containerization | Docker, Kubernetes |
| Automation Testing | Cucumber, Playwright |
| CI/CD         | GitHub Actions |

---

## 🎯 Key Features
✅ **Microservices Architecture**: Scalable and modular backend system built with **Node.js & GraphQL**
✅ **Kong API Gateway**: Centralized API security and traffic management
✅ **Event-driven Architecture**: Kafka + Zookeeper for real-time processing
✅ **JWT-based Authentication**: Secure access using token-based authentication
✅ **BDD Testing with Cucumber + Playwright**: Ensuring application stability with behavior-driven testing
✅ **CI/CD with GitHub Actions**: Automated testing, Docker builds, and deployment

---

## 🏗️ Project Structure
```
/project-root
 ├── src/
 │   ├── controllers/
 │   ├── models/
 │   ├── services/
 │   ├── routes/
 │   ├── graphql/
 │   ├── kafka/
 │   ├── middleware/
 │   ├── utils/
 │   └── app.ts
 │
 ├── tests/
 │   ├── features/
 │   ├── steps/
 │   ├── pages/
 │   └── cucumber.mjs
 │
 ├── docker-compose.yml
 ├── .github/workflows/ci-cd.yml
 ├── package.json
 ├── README.md
 ├── tsconfig.json
 └── .env
```

---

## 🔧 Setup & Installation
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Start Services (MongoDB, Kafka, Kong, etc.)**
```bash
docker-compose up -d
```

### **4️⃣ Run the Application**
```bash
npm run dev
```

### **5️⃣ Run Tests (BDD with Playwright & Cucumber)**
```bash
npm test
```

---

## 🛡️ Authentication (JWT-based)
- User authentication is handled via **JWT (JSON Web Token)**.
- Secure API endpoints with token-based authentication.
- Example login request:
  ```bash
  curl -X POST http://localhost:8000/login -d '{"username": "test", "password": "123456"}' -H "Content-Type: application/json"
  ```

---

## 📜 API Gateway (Kong)
We use **Kong API Gateway** to manage and secure our APIs:
- Handles authentication, rate-limiting, and routing.
- CORS is enabled globally.
- Example plugin setup:
  ```bash
  curl -i -X POST --url http://localhost:8001/plugins/ \
    --data "name=cors"  \
    --data "config.origins=*"
  ```

---

## 🚀 CI/CD Pipeline (GitHub Actions)
The CI/CD pipeline automates:
1️⃣ **Linting & Unit Tests** ✅
2️⃣ **BDD Testing (Cucumber + Playwright)** ✅
3️⃣ **Docker Build & Push to Docker Hub** ✅
4️⃣ **Automated Deployment to Server** ✅

See `.github/workflows/ci-cd.yml` for full configuration.

---

## 🎯 Why This Matters for HCLTech
- Demonstrates **scalability, security, and automation**.
- Uses **industry best practices** for API design, microservices, and event-driven systems.
- Ensures **high test coverage** with **BDD (Behavior-Driven Development)**.
- **CI/CD ensures rapid deployments** and smooth **DevOps workflows**.
- **JWT authentication** and **Kong API Gateway** secure our APIs.

This project showcases **HCLTech’s commitment to innovation, excellence, and cutting-edge technology** in Node.js, GraphQL, Kafka, MongoDB, Docker, Kubernetes, CI/CD, and BDD testing.

---

## 📩 Contact
For inquiries, reach out to: **sbala.dubai@gmail.com**


