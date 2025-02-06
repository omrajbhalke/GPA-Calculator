# GPA-Calculator

# Vertical CGPA Calculator

## Overview
The **Vertical CGPA Calculator** is a simple web-based application that allows students to calculate their **Cumulative Grade Point Average (CGPA)** based on their subject marks and credits. It dynamically generates input fields based on the number of subjects entered and calculates CGPA using predefined grade point criteria.

## Features
- Users can enter the **number of subjects** they have.
- Dynamically generates input fields for each subject.
- Accepts inputs for:
  - **Credits** per subject
  - **CIE1 (Continuous Internal Evaluation 1)**
  - **CIE2 (Continuous Internal Evaluation 2)**
  - **Component marks**
  - **SEE (Semester End Examination) marks**
- Calculates **total marks** and assigns grade points based on the grading scale.
- Displays the **final CGPA**.
- Responsive **vertical layout** for better usability.

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Styling and layout
- **JavaScript**: Dynamic content generation and CGPA calculation

## Installation & Usage
1. **Clone or Download** the repository.
2. Open `index.html` in any modern web browser.
3. Enter the number of subjects and click **Generate Fields**.
4. Fill in the required fields for each subject.
5. Click **Calculate CGPA** to get the final result.

## Grading System
| Total Marks | Grade Points |
|------------|--------------|
| 90 - 100   | 10           |
| 80 - 89    | 9            |
| 70 - 79    | 8            |
| 60 - 69    | 7            |
| 50 - 59    | 6            |
| 40 - 49    | 5            |
| Below 40   | 0 (Fail)     |

## Project Structure
```
Vertical-CGPA-Calculator/
│── index.html        # Main HTML file
│── style.css         # CSS for styling
│── script.js         # JavaScript logic
```

## Future Enhancements
- **Local Storage** support to save previous CGPA calculations.
- **Dark Mode** for better readability.
- **Grade Breakdown** for each subject.



