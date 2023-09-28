# Diet Wizard 🧙

Diet Wizard is an innovative platform that leverages an external API 
to provide users with personalized diet plans based on their unique preferences and nutritional needs.

![DietWizard](/assets/img/readme-ss.png)

## Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Usage](#-usage)
- [Contribution](#-contribution)
- [License](#-license)
- [Deployed](#deployed)

## 🌟 Features

- **User Authentication**: Secure mechanisms for signup and login.
- **Profile Management**: Users can manage their dietary preferences.
- **Diet Recommendations**: Personalized diet plans generated for users.
- **External API Integration**: Uses a third-party API to fetch the latest diet information.

## 🛠 Prerequisites

Ensure you have the following installed and set up:

- [Node.js and npm](https://nodejs.org/) ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
- [Sequelize](https://sequelize.org/) ![Sequelize](https://img.shields.io/badge/-Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white)
- [MySQL](https://www.mysql.com/) ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

## 🔧 Installation & Setup

1. **Clone the Repository**
    ```bash
    git clone [your-repo-url]
    cd [your-repo-name]
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory.
   - Populate it with the following:

    ```plaintext
    DB_NAME=Your_Database_Name
    DB_USER=Your_Database_User
    DB_PASSWORD=Your_Database_Password
    SESSION_SECRET=Your_Session_Secret
    RAPID_API_KEY=Your_RapidAPI_Key
    ```

4. **Run the Application**
    ```bash
    npm start
    ```

Open your browser and navigate to `http://localhost:3001` to access the application.

## 📘 Usage

1. **Signup/Login**: Begin by creating an account or logging in if you already have one.
2. **Profile Management**: Once logged in, update your dietary preferences from the profile page.
3. **Fetch Diet Plans**: Based on the preferences, get personalized diet recommendations.

## 💬 Contribution

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## 📝 License

This project is [MIT licensed](./LICENSE).
[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)

## Deployed

#### **CLICK [HERE](https://diet-wizard-930125214349.herokuapp.com/) TO SEE APP DEPLOYED**

![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)