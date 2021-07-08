# **DRF Toy Project**

## **Objective**

The Django Rest Framework version of the Toy Project.

This application demonstrates a Library Management System consisting of an admin and several users. All CRUD operations and authentications have been implemented using Django Rest Framework and tested via Postman.

## **Contents**

The contents of this directory include:

- **src**: This folder contains the project directories and files.
- **create_db.sql**: This file contains the SQL script to create the database for the project.
- **drop_db.sql**: This file contains the SQL script to delete the database created for the project after use.
- **README.md**: This is the file we are in. It contains details about this project, its files and specific instructions on how to run the code.
- **requirements.txt**: This file contains all the dependencies that need to be installed prior to running the code.
- **USER-STORIES.md**: This file contains the user stories for the project.
- **.flake8**: This file contains settings with which flake8 should operate on the project.
- **Postman**: This folder contains a file containing the exported workspace of Postman for this project.

## **Instructions to run the code**

1. Create a separate directory for this project using ```mkdir```.
2. Clone the project using the submitted URL using ```git clone``` inside this directory.
3. Create a virtual environment for the project using ```virtualenv my_env``` and activate it using ```source my_env/bin/activate```.
4. Enter the project directory using ```cd```.
5. Ensure that all dependencies have been downloaded from ```requirements.txt``` file using ```pip install -r requirements.txt```.
6. Open Postgres prompt using ```sudo -u postgres psql```.
7. Type ```\i create_db.sql``` to create the database for the project. Type ```\q``` to exit this prompt.
8. Type ```cd src``` to enter the source directory.
9. In the terminal, type ```python manage.py makemigrations``` to get the data ready for transfer.
10. Then type ```python manage.py migrate``` to transfer the data to the database.
11. To create a superuser, type ```python manage.py createsuperuser```.
12. Follow the prompts to create superuser name and password. (Email can be skipped).
13. To run the server, type ```python manage.py runserver```. A link will appear.
14. Copy this link and paste in your browser. It will open the user login page.
15. Append only ```admin``` after the link to open the admin login page.
16. Here, you can perform all operations as an admin. Here, you can preferably add a few customers, products, tags, and orders.
17. Open up Postman application.
18. Copy the link for the admin page and paste it in the given bar. Instead of ```admin```, enter ```viewset```. You will be able to see links for every model in the project.
19. After that you can proceed to perform all ```GET```, ```POST```, ```PUT```, and ```DELETE``` operations for all the models.
20. You can also refer the included Postman workspace file by importing it inside Postman.
21. After inspection, close the browser tab and Postman.
22. Return to the terminal and press ```Ctrl + C``` to stop the server.
23. Type ```cd ..``` to go back one level in the directory structure.
24. Repeat Step 6.
25. Type ```\i drop_db.sql``` to drop the database for the project. Type ```\q``` to exit this prompt.
26. Type ```deactivate``` to deactivate the virtual environment.

## **Steps to generate tokens for every user (Token Authentication)**

1. Open Postman application.
2. Enter the link for the project in the bar.
3. Go to ```gettoken``` page. Ensure that request mode is set to ```POST```.
4. Click on ```Body``` tab just below the bar.
5. Select the ```form-data``` option from the options presented.
6. In the ```KEY``` column, enter ```username``` as the first key and ```password``` as the second.
7. In the ```VALUE``` column, enter any username from the database and its corresponding password.
8. Click on ```Send```.
9. A token will be generated corresponding to that particular user in the space below.
10. Repeat the above steps for another user.

## **Notes**

1. Dependencies that need to be installed have been included in the ```requirements.txt file```.
2. The admin will have to add a user as a customer before testing is conducted using Postman.
