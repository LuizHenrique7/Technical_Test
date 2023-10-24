Installation and Project Execution Instructions

Backend Configuration (Django):

Make sure you have Python installed on your system.

Clone or download this repository to your environment

In the terminal type: cd backend

Activate the virtual environment (on Windows): venv\Scripts\activate

Install Django dependencies: pip install -r requirements.txt

Apply the migrations to create the database: python manage.py migrate

Start the Django server: python manage.py runserver

Frontend Configuration (React):

In the terminal type: cd frontend

Install React dependencies: npm install

Start the React application: npm start


1. What would be your first improvements if you had more implementation time?

R: If I had more time to implement, I would add an authentication system so that users can log into the system, improve error handling, develop product editing and deletion functionality, and also introduce pagination to improve the experience navigation.


2. Thinking about your solution, how would maintenance be in case of adding new product
categories? What would need to be changed?

R: To add new product categories it would be necessary to update the models in the backend (Django) add the new categories in the product_category field and also update the product registration form in the frontend (React) to include the new categories.

3. What changes would need to be made to support updates in the product category's discount
percentage so that whenever the discount percentage was changed, the new price would be
reflected in all products of the same category?

R: It would be necessary to create an interface on the frontend to manage discount percentages with automatic updating of prices for products that have changed and also implement a function on the backend to recalculate promotional prices for products in the same category