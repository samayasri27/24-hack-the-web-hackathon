# 24-HACK THE WEB HACKATHON 
## KK Computers - Digital Youth Connect

A comprehensive web platform for KK Computers, designed to empower youth with digital skills through IT training, certifications, and educational programs.

**🔗 Live Demo:** https://kk-computers-hackathon.vercel.app


## 🚀 Features

- **Responsive Design**: Fully responsive website optimized for all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Course Management**: Comprehensive program information and registration
- **Event Management**: Event listings and registration system
- **User Authentication**: Sign up and sign in functionality
- **Contact System**: Multi-channel contact and consultation booking
- **Community Features**: Different user paths for students, trainers, donors, and partners

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router DOM
- **Animations**: CSS transitions and keyframes
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd digital-youth-connect
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ...
├── pages/              # Route components
│   ├── auth/           # Authentication pages
│   ├── programs/       # Course/program pages
│   ├── services/       # Service detail pages
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## 🎨 Design System

The project uses a comprehensive design system with:

- Consistent spacing and typography
- Professional color palette
- Standardized component patterns
- Responsive breakpoints
- Smooth animations and transitions

## 📱 Responsive Design

The website is fully optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🔧 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project includes:

- TypeScript for type safety
- ESLint for code linting
- Consistent code formatting
- Modern React patterns and hooks
