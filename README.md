# Challenge: BMI Calculator - Body Mass Index

Body Mass Index (BMI) is a measure that associates a person's weight and height. It is used as one of several indicators to assess nutritional status.

## Formula: weight (kg) / [height (m)]²  
Using the metric system, the formula for BMI is the weight in kilograms divided by the height in meters squared. Since height is generally measured in centimeters, divide the height in centimeters by 100 to get the height in meters.

**Example:**  
Weight = 68 kg, Height = 165 cm (1.65 m)  
Calculation: 68 ÷ (1.65)² = 24.98

## Technical Requirements

A nutritional company in Colombia wants to assess the nutritional status of the city of Medellín, so they want to develop an application to measure people's BMI. The following technical requirements should be considered for the application development:

- **User Registration:** User information must be stored in `localStorage`.
- **BMI Calculation:** The app must calculate BMI for both men and women.
- **Statistics:** The app must handle BMI data for 15 people, which should be stored in a JSON file and consumed in the statistics component.

### BMI Categories

Use the following table to determine in which category your BMI falls:

| **BMI Range**    | **Category**                       |
|------------------|------------------------------------|
| Below 18.5       | Underweight                        |
| 18.5 to 24.9     | Healthy                            |
| 25.0 to 29.9     | Overweight                         |
| 30.0 to 39.9     | Obese                              |
| Over 40          | Extreme obesity or high risk      |

## Installation and Usage

1. Clone the repository to your local machine.
2. Open the `index.html` file in your browser to use the app.

```bash
git clone <REPOSITORY_URL>
```

3. Fill in your weight and height to calculate your BMI.
4. The app will store the results in `localStorage` and will display statistics for the 15 users.

## Technologies Used

- **HTML**: For the page structure.
- **CSS**: For styling the application.
- **JavaScript**: For handling BMI calculations, user registration, and statistics.

## Contributions

Contributions are welcome! Fork the repository and submit a pull request with your changes.
