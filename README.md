# DietWizard 🧙‍♂️

[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)

Welcome to DietWizard, your personalized diet companion. Tailor-made diets based on your age, gender, height, weight, activity level, food preferences, and weight goals. Achieve your health objectives effortlessly.

![DietWizard](./Screenshot.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Unique user when sign up.
- Tailor-made plan according to your anatomy. 
- 30-days plan generated.
- Up to 7-days plan displayed when login. 
- Weight goal and food prerences are considered.
- Simple and intuitive user interface.
- Data persistence using a JSON file.

# Installation

To run Note Taker on your local machine, follow these steps:

1. Clone this repository to your local system:

   ```bash
   git clone https://github.com/robertako97/dietWizard

2. Navigate to the project directory:
    
    ```bash
   cd dietWizard

3. Install the required dependencies using npm:
   
    ```bash
   npm install

## Usage

1. Rename the .env file and add your user (root usually) and mySQL password in case you have one.

2. Run mySQL
   ```bash
   mySQL -u -root -p
    ```
   _After entering the informaation required:_

      ```bash
   source db/schema.sql

    exit
    ```

    _Once exit:_

    ```bash
    npm run seeds

    npm start
    ```

3. Open your web browser and go to http://localhost:3000 to access the homepage.

4. Click on the ***"Sign up"*** button to create an account. 

5. Enter all the information required.

6. 

## Contributing
Contributions to DietWizard are welcome! If you have any ideas, bug reports, or feature requests, please open an issue or submit a pull request on GitHub.
=======
# Diet Wizard 🧙

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


