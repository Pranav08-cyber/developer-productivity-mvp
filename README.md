# 🚀 DevPulse — AI-Assisted Developer Productivity Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Vite-Build_System-purple?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-UI-cyan?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/AI-Assisted-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-MVP-success?style=for-the-badge" />
</p>

---

# 📌 Overview

Modern engineering teams generate massive amounts of SDLC data every day, but raw metrics alone rarely provide meaningful guidance.

DevPulse is an AI-assisted developer productivity platform focused on transforming engineering workflow signals into actionable insights and productivity coaching.

Metrics like:

* Lead Time
* Cycle Time
* Deployment Frequency
* PR Throughput
* Bug Rate

...are useful, but they rarely explain:

> ❓ *Why is performance changing?*
>
> ❓ *What bottleneck is likely happening?*
>
> ❓ *What should the developer do next?*

This MVP focuses on transforming raw SDLC metrics into:

✅ Understandable insights
✅ Developer-focused coaching
✅ Actionable recommendations
✅ Productivity storytelling instead of generic dashboards

---

# 🎯 Core Philosophy

Instead of building another generic analytics dashboard, DevPulse focuses on helping developers understand:

* What is slowing delivery velocity
* Where workflow bottlenecks exist
* How engineering quality trends evolve
* Which practical improvements can increase productivity

The platform combines SDLC metrics with lightweight AI-driven interpretation to create a more human-centered productivity experience.

---

# ✨ Key Features

## 📊 Developer Productivity Dashboard

* Modern cyber-inspired UI
* Responsive layout
* Animated interactions
* Real-time productivity visualization

---

## 📈 SDLC Metrics Engine

The dashboard calculates:

| Metric               | Description                                    |
| -------------------- | ---------------------------------------------- |
| Lead Time            | Time from PR creation to production deployment |
| Cycle Time           | Time from issue start to completion            |
| Bug Rate             | Production bugs relative to completed work     |
| Deployment Frequency | Number of successful deployments               |
| PR Throughput        | Number of merged pull requests                 |

---

## 🧠 AI Insight Engine

Instead of only showing numbers, the system generates:

* Bottleneck interpretation
* Delivery health analysis
* Workflow observations
* Productivity coaching insights

Example:

> "Lead time is significantly above optimal range, indicating possible review bottlenecks or oversized pull requests."

---

## 💡 Actionable Recommendations

The MVP suggests practical improvements such as:

* Reduce PR size
* Increase deployment cadence
* Improve automated testing
* Break tasks into smaller units

---

## 📉 Trend Analysis

Visual productivity trends powered by workbook-driven data.

---

# 🏗️ Architecture

```text
Excel Workbook
      ↓
JSON Data Conversion
      ↓
Metrics Engine
      ↓
Insight Engine
      ↓
React Dashboard UI
```

---

# 🧰 Tech Stack

| Layer          | Technology            |
| -------------- | --------------------- |
| Frontend       | React.js              |
| Build Tool     | Vite                  |
| Styling        | Tailwind CSS          |
| Icons          | Lucide React          |
| Animations     | Motion                |
| Data Source    | Excel Workbook → JSON |
| State Handling | React Hooks           |
| Charts         | Recharts              |

---

# 📂 Data Sources

The project uses structured workbook data converted into JSON.

## Source Tables Used

```text
Dim_Developers.json
Fact_Jira_Issues.json
Fact_Pull_Requests.json
Fact_CI_Deployments.json
Fact_Bug_Reports.json
```

These simulate:

* Jira
* GitHub/GitLab PR systems
* CI/CD deployment systems
* Post-release bug tracking

---

# 🧠 Responsible AI Usage

AI tools were responsibly used for:

✅ Architecture brainstorming
✅ Debugging support
✅ Metric interpretation ideas
✅ UI scaffolding assistance
✅ Productivity insight refinement

All logic, metric definitions, and implementation decisions were reviewed and understood before integration.

---

# 📷 Prototype Screenshots

## 🖥️ Dashboard Overview

> Paste screenshot here

```md
![Dashboard Screenshot](./screenshots/dashboard.png)
```

---

## 📊 Metrics & Trends

> Paste screenshot here

```md
![Metrics Screenshot](./screenshots/metrics.png)
```

---

## 🧠 AI Insights Panel

> Paste screenshot here

```md
![Insights Screenshot](./screenshots/insights.png)
```

---

# 🚀 Local Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/developer-productivity-mvp.git
```

---

## 2️⃣ Open Project

```bash
cd developer-productivity-mvp
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

---

## 5️⃣ Open Browser

```text
http://localhost:5173
```

---

# 📁 Project Structure

```text
src/
 ├── components/
 ├── data/
 ├── services/
 ├── utils/
 ├── Dashboard.jsx
 ├── App.jsx
 └── main.jsx
```

---

# 🔍 Product Thinking Behind the MVP

This project intentionally focuses on:

> Helping developers move from raw metrics → understanding → action.

Instead of building a broad enterprise analytics platform, the MVP narrows the scope to:

✅ Individual Contributor productivity
✅ Insight-driven interpretation
✅ Lightweight coaching workflows
✅ Action-oriented recommendations

This aligns closely with the assignment objective:

> "Metrics alone do not explain what is happening or what the user should do next."

---

# 📌 Future Improvements

Potential future enhancements:

* Live GitHub/Jira integrations
* Team-level productivity analytics
* AI sprint health summaries
* Predictive burnout detection
* Release risk scoring
* Personalized productivity coaching
* Natural language metric querying

---

---

# ⭐ Final Note

This project was designed with a strong emphasis on:

* Product clarity
* User understanding
* Practical developer workflows
* Responsible AI-assisted engineering

The primary objective was not to build a generic dashboard, but to create a focused productivity coaching experience that helps developers understand and improve their delivery workflow.
