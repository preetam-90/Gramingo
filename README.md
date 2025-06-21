# Gramigo Platform

Gramigo is a platform connecting farmers with agricultural equipment owners, making it easier to rent and manage agricultural machinery.

## Features

- User authentication with NextAuth.js
- Equipment booking and tracking
- Real-time updates
- Responsive design for mobile and desktop
- Secure payment processing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/preetam-90/Grammigo.git
   cd Grammigo
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/gramigo"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"

   # Google OAuth (optional)
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. Initialize the database:
   ```bash
   pnpm prisma generate
   pnpm prisma db push
   ```

5. Run the development server:
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The application is set up for deployment on Vercel. Make sure to configure the environment variables in your Vercel project settings.

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Prisma](https://www.prisma.io/) - Database ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
