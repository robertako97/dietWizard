# Diet Wizard

The Diet Wizard App is a comprehensive solution 
that allows users to create personalized diet plans using their individual preferences and nutritional needs. 
With the integration of an external API, 
this application provides users with accurate and up-to-date diet recommendations.

## Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Usage](#-usage)
- [Contribution](#-contribution)
- [License](#-license)

## 🌟 Features

- **User Authentication**: Secure mechanisms for signup and login.
- **Profile Management**: Users can manage their dietary preferences.
- **Diet Recommendations**: Personalized diet plans generated for users.
- **External API Integration**: Uses a third-party API to fetch the latest diet information.

## 🛠 Prerequisites

Ensure you have the following installed and set up:

- [Node.js and npm](https://nodejs.org/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

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

