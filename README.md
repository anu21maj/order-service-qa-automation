# ERP Order Processing Service & Automated CI/CD Pipeline

## 📌 Overview
This repository contains a simulated **ERP Order Processing Service** paired with an automated **Quality Gate CI/CD Pipeline**. The goal of this project is to demonstrate end-to-end test automation, Git workflow best practices, and automated continuous integration using **GitHub Actions**.

---

## 🛠️ Tech Stack & Tools
* **Core Runtime:** Node.js (v20)
* **Version Control:** Git & GitHub (Feature Branch / Pull Request Workflow)
* **CI/CD Orchestration:** GitHub Actions
* **Target Environment:** Linux (Ubuntu-latest GitHub Runners)
* **Domain Focus:** ERP Order Management Logic (Validation & Discounts)

---

## 🚀 Key Features & Quality Gates
1. **Automated Verification:** Executes business rule tests (Order ID validation, negative amount checks, discount calculations) automatically.
2. **Pull Request Protection:** Prevents unverified code from merging into `main`.
3. **CI/CD Integration:** Workflow automatically triggers on `push` and `pull_request` events to execute `node test.js` inside an isolated containerized runner.

---

## 💻 Running Locally

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR-USERNAME/order-service-qa-automation.git](https://github.com/YOUR-USERNAME/order-service-qa-automation.git)
cd order-service-qa-automation
