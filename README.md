# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it,
see [this documentation](https://react.dev/learn/react-compiler/installation).

## Project Structure

```bash
my-react-app/
├── public/                  # Static assets served directly (favicon, robots.txt)
├── src/
│   ├── assets/              # Global media (images, icons, global styles)
│   ├── components/          # Shared, reusable UI components (Buttons, Inputs, Modals)
│   │   ├── ui/              # Low-level primitive UI elements
│   │   └── Layout.tsx       # Main page layouts (Navbar, Sidebar, Footer)
│   ├── context/             # Global React Contexts (ThemeContext, AuthContext)
│   ├── features/            # Feature-based modules (Domain Logic)
│   │   ├── auth/            # Auth feature: components, hooks, services, types
│   │   │   ├── components/  # Feature-specific components (LoginForm.tsx)
│   │   │   ├── hooks/       # Feature-specific hooks (useAuth.ts)
│   │   │   ├── services/    # Feature-specific API calls (authApi.ts)
│   │   │   └── types/       # Feature-specific TypeScript definitions
│   │   └── products/        # Products feature module
│   ├── hooks/               # Global custom React hooks (useWindowSize, useDebounce)
│   ├── pages/               # Top-level page views (Home, Dashboard, Settings)
│   ├── routes/              # Routing definitions (React Router config)
│   ├── services/            # Global API clients (Axios/Fetch instances, base URL setup)
│   ├── types/               # Global TypeScript interfaces and types
│   ├── utils/               # Pure utility/helper functions (date formatting, validators)
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point (Mounts React to the DOM)
│   └── vite-env.d.ts        # Vite environment TypeScript definitions
├── .env.example             # Template for environment variables
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier code formatting rules
├── index.html               # Main HTML entry point (Vite places this at root)
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check
out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information
on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
