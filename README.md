# FormFlowConnect

A React-based UI application for form flow management and case handling.

## Project Structure

```
FormFlowConnect/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility libraries
│   │   └── main.tsx       # Application entry point
│   └── index.html         # HTML template
├── attached_assets/        # Static assets
├── dist/                  # Build output (generated)
└── package.json           # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Type Checking

Run TypeScript type checking:
```bash
npm run check
```

## Features

- Modern React application with TypeScript
- Tailwind CSS for styling
- Radix UI components for accessible UI elements
- React Query for data fetching
- Form handling with React Hook Form
- Responsive design with mobile support

## API Integration

The application makes API calls to external endpoints:
- Rules definition: `http://localhost:8000/rules/define/`
- Training case upload: `http://localhost:8000/upload_training_case`
- User case upload: `http://localhost:8000/upload_case/`

Make sure these endpoints are available and running when using the application.
