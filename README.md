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

### Necessary Updates

This app creates a foundation from which you can build the rest of your application. Feel free to open the following files/directories and edit/update them to align with your project.

- `./index.html`
- `./public/`
- `./src/assets/`
- `./src/components/`
- `./src/components/Home.tsx`
- `./src/App.tsx`
- `./src/main.tsx`
- `./README.md`
- `../README.md`

Be sure to checkout contents of the `./package.json` file.

- If you want to retain all the installed dependencies in this file, you may leave it as it is.
- If you want to remove a particular dependency from the project, highlight that dependency and delete it (along with the comma at the end of the line).

### Optional Updates

This app sets a foundation for the creation and use of:

- Services in `./src/services/`.
- Forms in `./src/forms/`.
- Utils in `./src/utils/`.

**NOTE (on `services`)**:

- If your project will require services, you can use the `services` directory in `./src/`.
- If your project **does not** require services, you can delete the `services` directory in `./src/`.

**NOTE (on `forms`)**:

- If your project will require forms, you can use the `forms` directory in `./src/`.
- If your project **does not** require forms, you can delete the `forms` directory in `./src/`.

**NOTE (on `utils`)**:

- If your project will require utilities (utils), you can use the `utils` directory in `./src/`.
- If your project **does not** require utilities (utils), you can delete the `utils` directory in `./src/`.

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
