# React Starter Kit

A template repository for creating a react app with Vite and using SCSS for styles.

## Description

This app is meant to cut the manual work in the development of React projects, by creating reusable essentials that are uniform in most projects. Some of these essentials are:

- Elements & resources in `index.html`.
- Components in `components` folder.
- Project icon/logo in `assets` and `public` directories.
- Packages in `package.json`.
- Documentation structure in `README.md`.
- Routing configuration in `main.tsx` and `App.tsx`.

This app creates a foundation from which you can build the rest of your application. Feel free to open the above mentioned files/directories and edit/update them to align with your project.

## Structure

Navigate through the project in the following structure:

```
.
├── react-starter/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   └── ...
│   ├── ...
│   │
│   ├── README.md
│   └── ...
├── LICENSE
└── README.md
```

- The `public` directory contains production-ready resources that the application can access upon deployment.
- The `src` directory contains the project's source code, including components and styles, among other files.
  - The `assets` subdirectory contains static resources like images and icons.
  - The `components` subdirectory contains reusable components that can be shared across the application.

## Setup

Follow the steps below to get the project ready for local development.

### 1. Dependencies - Packages

Install package dependencies by running the following command:

```
npm i
```

or

```
npm install
```

or

```
yarn i
```

or

```
yarn install
```

### 2. Development Server

Start the development server by running the following command:

```
npm run dev
```
