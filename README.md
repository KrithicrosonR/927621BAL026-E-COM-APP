# 927621BAL026-E-COM-APP
This React application allows users to input a specified number of array elements and displays them from left to right. It includes form handling for user input and validation to ensure the correct number of elements are entered. The application demonstrates state management, event handling, and dynamic rendering in React.

Top Products React App
This React application allows users to input a specified number of top products for a particular company within a specified maximum price range. It then displays the filtered products based on the given criteria.

Features
Input form for the company name, maximum price, and the number of top products.
Displays the filtered products based on the input criteria.
Simple and user-friendly interface.
Mock product data for demonstration purposes.
Getting Started
These instructions will help you set up and run the project on your local machine for development and testing purposes.

Prerequisites
Make sure you have Node.js and npm installed on your system. You can download them from here.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/top-products.git
cd top-products
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your web browser and navigate to http://localhost:3000 to see the application in action.

Usage
Enter the company name.
Specify the maximum price range.
Enter the number of top products to display.
Click the "Submit" button to see the filtered products.
Example Output
json
Copy code
{
  "productName": "Laptop 1",
  "price": 2233,
  "rating": 9.0,
  "discount": 34,
  "availability": "yes"
}
Code Structure
src/App.js: Main component containing the form and logic to display the filtered products.
src/App.css: Styling for the application.
