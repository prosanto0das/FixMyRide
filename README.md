# FixMyRide - Professional Automotive Service Platform

A modern, responsive web platform for professional car maintenance and repair services. Built with React, TypeScript, and Vite for optimal performance and user experience.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Pages](#pages)
- [Design System](#design-system)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## 🎯 Overview

FixMyRide is a professional automotive service platform dedicated to providing top-quality car maintenance and repair solutions. The platform showcases our expertise, services, and work through an intuitive web interface, making it easy for customers to understand our offerings and get in touch.

**Founder**: Prosanto Das  
**Live**: https://fix-my-ride-pro.vercel.app/

## ✨ Features

- **Professional Service Showcase**: Comprehensive gallery displaying automotive services and completed work
- **Detailed Service Pages**: Individual pages for each service with pricing and benefits
- **Company Information**: About page featuring founder background and company mission
- **FAQ Section**: Common questions and answers about services
- **Customer Feedback**: Feedback submission system for customer testimonials
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Professional gradient designs, smooth animations, and intuitive navigation
- **Fast Performance**: Built with Vite for rapid development and optimized builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with custom gradients and animations
- **Routing**: React Router v6
- **Code Quality**: ESLint configuration included
- **Development Server**: Vite HMR (Hot Module Replacement)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/prosanto0das/FixMyRide.git
   cd FixMyRide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```
FixMyRide/
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navbar.tsx       # Navigation bar with logo and menu
│   │   ├── Navbar.css       # Navbar styling
│   │   ├── Hero.tsx         # Hero section component
│   │   └── Hero.css         # Hero styling
│   │
│   ├── pages/               # Page components
│   │   ├── Gallery.tsx      # Service gallery showcase
│   │   ├── Gallery.css      # Gallery styling
│   │   ├── About.tsx        # Company information and founder details
│   │   ├── About.css        # About page styling
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── FAQ.css          # FAQ styling
│   │   ├── Feedback.tsx     # Customer feedback form
│   │   ├── Feedback.css     # Feedback form styling
│   │   ├── Services.tsx     # Services listing page
│   │   ├── services/        # Service detail pages
│   │   │   ├── ServiceDetail.tsx
│   │   │   └── ServiceDetail.css
│   │
│   ├── assets/              # Images and media
│   │   └── profile_resize.jpg
│   │
│   ├── App.tsx              # Main application component
│   ├── App.css              # Global application styles
│   ├── index.css            # Base styles
│   └── main.tsx             # Entry point
│
├── public/
│   ├── assets/
│   │   └── pic_for_gallary/ # Service gallery images
│   └── vite.svg
│
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── eslint.config.js         # ESLint rules
└── README.md               # This file
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR (http://localhost:5173) |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📄 Pages

### Home Page
- Eye-catching hero section with call-to-action
- Navigation menu to all services
- Quick access to main features

### Services
- Complete listing of available automotive services
- Service categories and descriptions
- Links to detailed service pages with pricing

### Service Details
- Comprehensive service information
- Service duration and availability
- Pricing options with featured options
- Benefits and advantages list
- Sticky contact sidebar
- "Back" button for easy navigation

### Gallery
- Professional showcase of completed work
- 14 high-quality service images
- Services include:
  - Premium Car Detailing
  - Manual Car Wash
  - Professional Car Wash
  - Scratch Removal
  - Battery Service
  - Engine Service
  - Paint Coating & Detailing
  - Brake Service
  - Professional Detailing
  - Vehicle Inspection
  - Interior Restoration
  - Full Vehicle Restoration
  - Exterior Cleaning & Care
  - Professional Mechanical Work

### About
- Company mission and vision
- Founder information: Prosanto Das
- Educational background
- Company values and commitment
- Contact methods

### FAQ
- Common customer questions
- Detailed answers about services
- Service information and policies
- Contact information

### Feedback
- Customer testimonial submission form
- Email integration for feedback collection
- Professional form design

## 🎨 Design System

### Color Palette
- **Primary**: Dark (#1A1A1A, #2D2D2D)
- **Accent Red**: #DC2F2F
- **Gold**: #FFD700
- **Orange**: #FF9800
- **Cyan**: #00D9FF
- **Text Light**: #CCC, #AAA

### Design Features
- Gradient backgrounds with radial overlays
- Smooth hover animations and transitions
- Semi-transparent cards with backdrop blur
- Professional typography with proper spacing
- Responsive breakpoints for mobile/tablet/desktop
- Consistent styling across all pages

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 👤 Author

**Prosanto Das**
- **Title**: Founder & CEO
- **Education**: BSc in Computer Science & Engineering, Shahjalal University of Science and Technology (SUST)
- **Email**: prosantodas2020331008@gmail.com
- **Phone**: +880 1715954503

---

**FixMyRide** - Your Trusted Car Care Partner  
*Professional automotive maintenance and repair services*
```
