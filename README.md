# Jordan Portfolio

This is a portfolio website project built using **React**. Follow the instructions below to download, set up, and customize the project on your Mac.

---

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Editing and Customizing](#editing-and-customizing)
- [FAQs](#faqs)

---

## Getting Started
These steps will guide you to download the repository and run it on your Mac.

---

## Prerequisites
Before starting, ensure you have the following installed:
1. **Git**: 
   - Open your terminal and run:
     ```bash
     git --version
     ```
   - If Git is not installed, install it via Xcode Command Line Tools by running:
     ```bash
     xcode-select --install
     ```

2. **Node.js and npm**:
   - Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).
   - After installation, verify by running:
     ```bash
     node -v
     npm -v
     ```

---

## Installation
### Step 1: Clone the Repository
1. Open your terminal.
2. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/thounny/jordan-portfolio.git
   ```
3. Navigate into the project folder:
   ```bash
   cd jordan-portfolio
   ```

### Step 2: Install Dependencies
Install the required packages using npm:
   ```bash
   npm install
   ```

---

## Running the Project
To start the project locally, run the following command:
   ```bash
   npm start
   ```
This will:
1. Start the development server.
2. Automatically open the project in your default browser at:
   ```
   http://localhost:3000
   ```

---

## Editing and Customizing
You can customize the website by editing the files in the project folder:

### 1. **Change Text and Content**
   - Navigate to `src/Components/Home/Home.js` to edit the homepage content.
   - Update details like your name, portfolio title, or project descriptions.

### 2. **Change Styling**
   - Modify `src/Components/Home/Home.css` for homepage styling.
   - Use `src/index.css` to adjust global styles and the color palette.

### 3. **Add/Remove Projects**
   - Add or remove projects by editing the `Projects` component in the `src/Components/Project` folder.

### 4. **Replace Images**
   - Replace the images in the `public/Images` folder with your own.
   - Update the image paths in the respective `.js` files.

---

## FAQs

### 1. **How do I install Node.js and npm on a Mac?**
   - Visit [Node.js Downloads](https://nodejs.org/) and install the **LTS version**.
   - After installation, open your terminal and run:
     ```bash
     node -v
     npm -v
     ```
   - These commands should display the installed versions of Node.js and npm.

### 2. **I made changes but don’t see them in the browser. What do I do?**
   - Ensure your development server is running (`npm start`).
   - Save the file you edited, and the browser will automatically refresh.

### 3. **How do I deploy the website?**
   - Build the project for production:
     ```bash
     npm run build
     ```
   - Host the `build` folder on a platform like:
     - [Netlify](https://www.netlify.com/)
     - [Vercel](https://vercel.com/)

---

## Additional Tips for Mac Users
1. Use **Command (⌘) + Spacebar** to search and open the terminal quickly.
2. Use `ls` to list files and `cd folder-name` to navigate between folders in the terminal.

---
