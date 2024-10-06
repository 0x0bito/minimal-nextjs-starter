# Next.js Minimal Starter

A basic [Next.js](https://nextjs.org) starter with sensible defaults for eslint, prettier, typescript and vscode.

## Features
- Light and dark mode
- A Minimal Database integration using Prisma
- State Management: Integrated [Zustand](https://github.com/pmndrs/zustand) for global state management + Persisting State (SessionStorage or LocalStorage).
- Styled with Tailwind CSS.

### Installation

1. Clone the repository:

   git clone https://github.com/0x0bito/minimal-nextjs-starter
   cd minimal-nextjs-starter

2. Install dependencies:

   pnpm install

### Configuration

1. Database Setup: set your PostgreSQL connection string:

   DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"

2. Run Migrations: run the migrations to set up the database:

   npx prisma migrate dev --name init

### Running the Development Server


pnpm run dev

Navigate to http://localhost:3000 to see your application in action.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
