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
