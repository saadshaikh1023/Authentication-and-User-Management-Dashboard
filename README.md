# Next.js Authentication and User Management Dashboard

## Overview

This project is a Next.js application that demonstrates authentication, protected routes, and a user management dashboard. It showcases skills in Next.js, React, Material-UI (MUI), and API integration.

## Features

1. **Authentication**
   - Login page with email and password fields
   - Authentication guard for protected routes
   - Redirect to login page for unauthenticated access attempts

2. **Dashboard**
   - Protected route accessible only to authenticated users
   - Data table displaying user information (name, age, date of birth)
   - Age automatically calculated from date of birth
   - Actions for each user entry (edit, delete)
   - Option to add new users
   - Toast notifications for add/edit/delete actions
   - Skeleton loaders for asynchronous operations

3. **API Integration**
   - Fetches 20 user entries from a backend API
   - Implements CRUD operations (Create, Read, Update, Delete) for user management

## Tech Stack

- Next.js 13+ (App Router)
- React 18
- Material-UI (MUI)
- React Query for API calls and state management
- React Hot Toast for notifications
- date-fns for date calculations

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Authentication-and-User-Management-Dashboard.git
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

5. Demo
6. 
   https://www.loom.com/share/ef546fdaf83d409aa5890acc5526eaff?sid=77b71b26-e29f-48c6-8166-04e03dd00ebd



