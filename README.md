# Team-Profile-Generator

## Description

When trying to keep track of team rosters, it can be tedious log all of the necessary information and keep it organized so you can refer to it later. This app seeks to make that process easier by allowing you to launch the app via a command, answer a few relevant questions, add as many team members as you like, and ultimately see your team members on a sleek and effective webpage. This app boils down hours of administrative work into a short 5 minute questionnaire.

## Installation

To use the app, download the repo to your local machine. You can find more detailed usage instructions below.

*Please note that you will need to install all of the dependencies for the app and tests to run successfully.*

## Usage

In order to use this app, access the repo's root folder in a terminal and run the following command:

    node index.js

In order the run the jest tests, access the repo's root folder in a terminal and run the following command:

    npm run test

![Show jest tests](./assets/img/Show%20tests.gif)

After the app is launched, you are presented with the manager questions. Complete these four questions and you will be presented with a menu allowing you to add an engineer, and intern, or to complete your team.

![Answering questions](./assets/img/Answer%20Questions.gif)

If you chose to continue building your team, you are then presented with relevant questions for the role that you have chosen.

If you chose to complete your roster, the app takes the information that you input and geneerates an html file. This file is created inside of the /dist/ folder.

![Showing Generated HTML file](./assets/img/Show%20Gen%20HTML.gif)

![Showing HTML file in browser](./assets/img/Show%20HTML.gif)



