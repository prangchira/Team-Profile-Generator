# Team-Profile-Generator
An application that take in information about employees and generates an HTML webpage that displays summaries for each person

## Installation
The following npm packages below are needed. To install these packages, run the following command in the Integrated Terminal:
```bash
    npm init -y
    npm i inquirer@6.5.0
    npm i jest
```
To run the application, run the following command in the Integrated Terminal:

```bash
node index.js
```

## Features:
* A command-line application, using inquirer.prompt, display questions, asks for User input and accepts User input as information about employees.
* Each team member type is defined as a class. There is a `blue print` class called Employee, and three other extended classes; namely Manager, Engineer and Intern, each with additional properties and methods for their role. 
* User is present with a menu with the option to:
      - Add an engineer
      - Add an intern 
      - Finish building the team
* When User finishes building their team, they exit the application, and a HTML file is generated in "output" folder. 


## Deployed link


## Credit:
I would like to credit to Tutor Samuel Cordova for his guidance on class, constructor function, extends, how to render html and how they all fit in. 


## Licenses
MIT License

Copyright (c) 2023 prangchira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.