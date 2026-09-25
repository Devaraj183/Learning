# Student Management System

A simple **Student Management System** built with **HTML, CSS, and
JavaScript**. The project allows users to add students, view student
details, search records, calculate marks and grades, and delete
students. Student data is stored in the browser using `localStorage`.

## Features

-   Dashboard with:
    -   Total number of students
    -   Average mark
    -   Highest average mark
    -   Lowest average mark
-   Add student details:
    -   Name
    -   Email
    -   Age
    -   Department
    -   Five subject marks
-   Form validation for required fields
-   Automatic total-mark calculation
-   Automatic grade calculation
-   Student list displayed in a table
-   Search students by:
    -   Name
    -   Email
    -   Department
-   Delete student records
-   Data persistence using browser `localStorage`
-   Responsive table layout with horizontal scrolling when required

## Grade System

    Total Marks  Grade
  ------------- -------
      450 - 500    A
      400 - 449    B
      350 - 399    C
      300 - 349    D
      Below 300    F

Each student has five subjects, with each subject marked from **0 to
100**.

## Project Structure

``` text
student-management-system/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

### `index.html`

Contains the structure of the application, including:

-   Navigation bar
-   Dashboard
-   Add Student form
-   Student list
-   Search input
-   Student table

### `style.css`

Contains the styling for:

-   Navigation
-   Dashboard cards
-   Student form
-   Table
-   Buttons
-   Validation messages
-   Layout and spacing

### `app.js`

Contains the application logic for:

-   Navigation between sections
-   Form validation
-   Adding students
-   Calculating marks and grades
-   Rendering the student table
-   Searching students
-   Deleting students
-   Updating dashboard statistics
-   Saving and loading data from `localStorage`

## How to Run

No backend or package installation is required.

1.  Download or clone the project.
2.  Make sure `index.html`, `style.css`, and `app.js` are in the same
    folder.
3.  Open `index.html` in a web browser.

For the best development experience, you can use **Visual Studio Code**
with the **Live Server** extension.

## How to Use

### Dashboard

The dashboard displays the current student statistics:

-   Total Students
-   Average Mark
-   Highest Mark
-   Lowest Mark

### Add Student

1.  Click **Add Student**.
2.  Enter the student's name, email, age, and department.
3.  Enter marks for all five subjects.
4.  Click **Submit**.
5.  The student is saved to `localStorage` and appears in the student
    list.

### Student List

Click **Students List** to view all saved students.

The table displays:

-   S.No
-   Name
-   Email
-   Age
-   Department
-   Total Marks
-   Grade
-   Delete button

### Search

Use the search box to filter students by name, email, or department.

### Delete

Click the **Delete** button for a student to remove that record from the
application and `localStorage`.

## Data Storage

This project uses the browser's `localStorage` API.

Student records are stored under:

``` text
students
```

Because the data is stored locally in the browser:

-   No database is required.
-   No server is required.
-   Data remains available after refreshing the page.
-   Clearing the browser's site data will remove the saved records.

## Technologies Used

-   **HTML5** --- application structure
-   **CSS3** --- styling and layout
-   **JavaScript (ES6)** --- application logic and DOM manipulation
-   **localStorage** --- client-side data persistence

## Future Improvements

Possible improvements include:

-   Edit student records
-   More advanced form validation
-   Sorting by marks, name, or department
-   Pagination for large student lists
-   Export student data to CSV
-   Import student data
-   Dark mode
-   Backend/database integration
-   User authentication

## Author

Developed as a frontend Student Management System project using HTML,
CSS, and JavaScript.
