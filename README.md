# Hyperspace Test Project

This repository contains a Next.js project created as part of the application process for the Junior Front-end Developer position at Hyperspace. The project includes two pages demonstrating specific requirements.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Pages](#pages)
  - [Page 1: Popup with Blurred Background](#page-1-popup-with-blurred-background)
  - [Page 2: Creative Html/Css Animation](#page-2-creative-html-css-animation)
- [Linting and Formatting](#linting-and-formatting)
- [Deployment](#deployment)

## Overview

This project is a simple Next.js application featuring two pages:
1. A page with a button that opens a popup, blurring the background.
2. A page showcasing a creative canvas animation.

The project is styled using Tailwind CSS and written in TypeScript. ESLint and Prettier are configured for code linting and formatting.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Setup and Installation

1. **Clone the repository:**

   ```bash
   https://github.com/nihalmmuneer/Hyper_Space_Test.git
   cd Hyper_Space_Test

2. **Install dependencies:**
    ```bash
    npm install

3. **Run the development server:**
   ```bash
   npm run dev

Open http://localhost:3000 in your browser to see the application.

## Usage
Navigate to the home page to find links to the two pages demonstrating the required features.

## Pages
**Page 1: Popup with Blurred Background**
This page features a button that opens a popup. When the popup is opened, the background is blurred.

  - **File: pages/index.tsx**
  - **[Url]:**http://localhost:3000

**Page 2: Creative Css Animation**
This page demonstrates a creative animation using the HTML5 <canvas> element. The animation is a simple pulsating circle.

- **File: pages/css-animation.tsx**
- **[Url]:**http://localhost:3000/css-animation

## Linting and Formatting
This project uses ESLint and Prettier for code quality and formatting.

- **Lint the code:**
    ```bash
    npm run lint

- **Format the code:**
    ```bash
    npm run format

## Deployment
This application is deployed on Vercel. You can access the live version [here](https://hyper-space-test.vercel.app/)
