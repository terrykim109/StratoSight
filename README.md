<div align="center">

**StratoSight**

A group of six students from Centennial Software Engineering Program and Seneca College Computer Programming and Analysis Program for NASA Hackathon Oct 4-5, 2025.

Terry Kim - Seneca College Computer Programming And Analysis 
Asra Jannat Bari - Centennial College Software Engineering  
Kayal Jennnifer Christopher - Centennial College Software Engineering   
Jeremy Ng  - Seneca Collge Computer Programming And Analysis  
Ashwin Parackal Aji - Centennial College Software Engineering     
Lamia Alam Shova - Centennial College Software Engineering   

</div>

# 🧬 BioVerse - Smart NASA Science Dashboard

<div align="center">

![BioVerse Banner](https://img.shields.io/badge/NASA-Space%20Biology-0B3D91?style=for-the-badge&logo=nasa&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

**Transforming NASA's space biology research into interactive, AI-powered insights**

</div>

---

## 🌟 What is BioVerse?

BioVerse is an **AI-powered dashboard** that revolutionizes how we interact with NASA's space biology research archive. Instead of manually searching through hundreds of scientific papers, BioVerse uses artificial intelligence to:

- **📚 Read & Understand** - Analyzes hundreds of NASA space biology papers
- **🧠 Summarize Intelligently** - Extracts key insights and findings automatically  
- **🔗 Connect the Dots** - Maps relationships between experiments, organisms, and discoveries
- **🎯 Answer Questions** - Provides instant answers through smart search

> *Think of it as a brilliant librarian that not only finds books but reads them for you, summarizes the key points, and shows you how everything connects.*

---

## ✨ Key Features

### 🔍 **Smart Search & Summaries**
Get instant AI-generated summaries of any NASA space biology paper. No more reading through dense scientific documents!

### 🕸️ **Knowledge Graph Explorer**
Visualize connections between organisms, experiments, and missions. Discover hidden relationships in the research.

### 📈 **Research Trends & Analytics**
- See what areas NASA has researched extensively
- Identify research gaps and opportunities
- Track publication trends over time

### 🎓 **Interactive Learning Hub**
- Take quizzes about space biology topics
- Earn badges for completing challenges
- Test and expand your knowledge

### 👤 **Personal Progress Tracking**
- Save your favorite papers
- Track your learning journey
- Monitor your quiz scores and achievements

### 📊 **Visual Insights**
Charts, graphs, and interactive visualizations that make complex science accessible and engaging.

---

## 🎯 Who Can Use BioVerse?

### 👨‍🔬 **NASA Scientists**
- Quickly find relevant research and avoid duplicating experiments
- Discover new connections between studies
- Stay updated on the latest findings in their field
- **Benefit:** Save countless hours of literature review

### 👔 **Research Managers**  
- Make data-driven decisions about research funding
- Identify high-impact research areas
- Spot emerging trends and opportunities
- **Benefit:** Allocate resources more effectively

### 🚀 **Mission Planners**
- Access critical information for astronaut health and safety
- Understand risks from past research
- Plan better missions to the Moon and Mars
- **Benefit:** Design safer, more successful missions

### 🎓 **Students & Public**
- Learn about space biology in an engaging way
- Explore NASA's cutting-edge research
- Get inspired by real scientific discoveries
- **Benefit:** Make space science accessible and exciting

---

## 💡 How BioVerse Helps NASA

<table>
<tr>
<td width="50%">

### 🚀 **Accelerate Discovery**
Speed up scientific innovation by making research insights instantly accessible

### 💰 **Optimize Spending**
Ensure research funding is invested in high-impact areas

### 🔗 **Connect Research**
Uncover hidden relationships between studies, fostering breakthrough ideas

</td>
<td width="50%">

### 🛡️ **Safer Missions**
Provide critical insights to protect astronaut health on deep space missions

### 📊 **Smarter Decisions**
Enable evidence-based choices in research planning and mission design

### 🌍 **Public Engagement**
Make NASA's amazing science accessible and interesting to everyone

</td>
</tr>
</table>

### 🎁 **Maximize Research Value**
Extract maximum value from NASA's existing scientific publications, ensuring no insight goes undiscovered.

---

## 🛠️ Technology Stack

- **Frontend:** Next.js 14, React 18
- **Backend:** Next.js API Routes, Node.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT with httpOnly cookies
- **AI/ML:** Natural Language Processing for paper analysis
- **Styling:** Custom CSS with modern design patterns
- **Deployment:** Vercel

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- MongoDB Atlas account (free tier available)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bioverse.git
   cd bioverse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key_min_32_chars
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

4. **Add your background image**
   
   Place your space-themed background image in:
   ```
   public/assets/homepage.jpg
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Usage Guide

### 1️⃣ **Create an Account**
Register to track your progress, save papers, and earn badges.

### 2️⃣ **Search & Explore**
Use the smart search to find papers on topics like "microgravity effects on plants" or "astronaut muscle atrophy."

### 3️⃣ **Bookmark Papers**
Save interesting research for later reference.

### 4️⃣ **Take Quizzes**
Test your knowledge and earn badges as you learn.

### 5️⃣ **View Your Dashboard**
Track your learning progress, quiz scores, and achievements.

---

## 📂 Project Structure

```
bioverse/
├── public/
│   └── assets/          # Static assets (images, icons)
├── src/
│   ├── app/
│   │   ├── api/         # API routes (auth, progress tracking)
│   │   ├── dashboard/   # User dashboard page
│   │   ├── login/       # Login page
│   │   ├── register/    # Registration page
│   │   ├── page.js      # Homepage
│   │   ├── layout.js    # Root layout
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   ├── lib/             # Utility functions (DB, auth)
│   └── models/          # Database models
├── .env.local          # Environment variables (not in repo)
├── jsconfig.json       # Path aliases configuration
├── next.config.js      # Next.js configuration
└── package.json        # Project dependencies
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔀 Open a Pull Request

---

<div align="center">

### 🌟 Star this repository if you find it helpful!

**Made with ❤️ for NASA and the space biology community**

[⬆ Back to Top](#-bioverse---smart-nasa-science-dashboard)

</div>
