# Pet Scheduler App



Welcome to the Pet Scheduler App! This project is a modern web application designed to help pet owners schedule and manage their pets' activities efficiently. Built with React, Next.js, TypeScript, and Tailwind CSS, and backed by Supabase, the app is both robust and visually appealing. The app is hosted on Vercel for seamless deployment and scalability.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Features

- User authentication and profile management
- Schedule management for multiple pets
- Reminders and notifications
- Responsive design
- Fast and secure backend integration with Supabase

## Tech Stack

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

Make sure you have the following tools installed on your development machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/scottpickering31/petschedules.git
   cd petschedules

2. **Install dependencies**:

```bash
npm install
# or
yarn install
```
Set up environment variables:

3. **Create a .env.local file in the root of your project and add the following environment variables**:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
**Replace your_supabase_url and your_supabase_anon_key with your actual Supabase credentials**.
```

### Running the App
4. **To start the development server, run**:

```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 with your browser to see the result.

## Contact
If you have any questions or suggestions, feel free to contact me at your-email@example.com.
