# API Forms Dashboard

## Overview

This is a full-stack web application built as a dashboard for managing API forms with three main functions: adding rules, submitting user cases, and uploading training cases. The application features a React frontend with shadcn/ui components and an Express.js backend, designed to handle form submissions and API interactions in a clean, user-friendly interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom design system variables and the "new-york" shadcn style
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation through @hookform/resolvers

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) and interface for database operations
- **API Structure**: RESTful API with routes prefixed under `/api`
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Database Design
- **Primary Database**: PostgreSQL using Neon Database serverless driver
- **Schema Management**: Drizzle Kit for migrations and schema management
- **User Schema**: Simple user table with id, username, and password fields
- **Migration Strategy**: Schema definitions in `shared/schema.ts` with automated UUID generation

### Development Environment
- **Build System**: Vite for frontend, esbuild for backend bundling
- **Development Server**: Hot module replacement enabled with Vite middleware integration
- **TypeScript Configuration**: Unified tsconfig with path mapping for clean imports
- **Code Organization**: Monorepo structure with shared types and schemas

### Form Management System
The application centers around three main form types:
- **Add Rule Form**: For defining new rules with file uploads and text input
- **User Case Form**: For submitting user cases with metadata and document uploads
- **Training Case Form**: For uploading training cases with admin feedback and context

Each form includes comprehensive validation, loading states, and error handling with real-time API response feedback displayed in a dedicated response panel.

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon Database serverless PostgreSQL driver
- **drizzle-orm & drizzle-kit**: Modern TypeScript ORM and migration toolkit
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form & @hookform/resolvers**: Form management with validation
- **zod & drizzle-zod**: Schema validation and type safety

### UI and Styling
- **@radix-ui/***: Complete set of accessible UI primitives for components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional className utilities

### Development and Build Tools
- **vite**: Next-generation frontend build tool
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific error handling
- **@replit/vite-plugin-cartographer**: Development environment integration

### Additional Integrations
- **wouter**: Minimalist routing library
- **date-fns**: Date manipulation utilities
- **nanoid**: Unique ID generation
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality