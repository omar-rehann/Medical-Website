# 🏥 Medical Website — React Project

## 📋 Overview
This is a **fully responsive medical website** built using **React.js**, designed for healthcare centers or clinics.  
The website includes several sections such as **Home**, **About Us**, **Our Team**, **FAQs**, **Booking**, **Services**, **Service Details**, **Blog**, **Blog Details**, and **Contact Us**.

The project is organized in a modular structure for easy maintenance and scalability.

---

## 🚀 Features
- 🏠 **Home Page** — Modern landing page with hero banner, features, and services overview.  
- ℹ️ **About Us** — Information about the clinic, mission, and achievements.  
- 👩‍⚕️ **Our Team** — Section displaying doctors and staff with details.  
- ❓ **FAQs** — Common questions displayed using an accordion layout.  
- 📅 **Booking Page** — Appointment booking form for patients.  
- ⚙️ **Services** — List of available medical services.  
- 🩺 **Service Details** — Detailed information about a selected service.  
- 📰 **Blog** — Articles and updates from the medical team.  
- 🧾 **Blog Details** — Full article view with comments and related posts.  
- 📞 **Contact Us** — Contact form, map, and clinic information.

---

## 🧱 Folder Structure
medical-website/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── img/              # All images and icons
│   │
│   ├── component/            # All reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── etc...
│   │
│   ├── dropdown/             # Folder containing page-specific collections
│   │   ├── home/             # Contains all Home components (Hero, Features, etc.)
│   │   ├── about/            # About Us page sections
│   │   ├── team/             # Our Team sections
│   │   ├── faq/              # FAQ accordion sections
│   │   ├── booking/          # Appointment booking form
│   │   ├── services/         # Services and Service Details
│   │   │   ├── Services.jsx
│   │   │   ├── ServiceDetails.jsx
│   │   │
│   │   ├── blog/             # Blog list and Blog Details
│   │   │   ├── Blog.jsx
│   │   │   ├── BlogDetails.jsx
│   │   │
│   │   ├── contact/          # Contact Us page
│   │   │   ├── Contact.jsx
│   │
│   ├── pagesstyles/          # CSS files for each page
│   │   ├── home.css
│   │   ├── about.css
│   │   ├── services.css
│   │   ├── servicedetails.css
│   │   ├── blog.css
│   │   ├── contact.css
│   │
│   ├── App.jsx               # Main React component (routes + layout)
│   ├── index.js              # React DOM entry point
│   └── routes.js             # Routing configuration (optional)
│
├── package.json
├── README.md
└── .gitignore

---

## ⚙️ Technologies Used
- ⚛️ **React.js** (Frontend framework)
- 🎨 **Bootstrap  / Custom CSS** (Styling)
- 🧭 **React Router DOM** (Page navigation)
- 💬 **Font Awesome** (Icons)
- 🖼️ **Swiper.js** (Sliders, if used)
- 📱 **Responsive Design** (Fully optimized for mobile and desktop)

---

## 🧩 How It Works
Each major section (Home, About, Services, Blog, Contact) is organized in the **dropdown** folder.  
Inside each folder:
- All related components (Hero, Cards, Sections, etc.) are grouped together.
- Each component imports its styles from the `/pagesstyles/` directory.
- Shared elements (like Navbar, Footer, etc.) are stored inside `/component/`.

---

## 🧠 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/medical-website.git
