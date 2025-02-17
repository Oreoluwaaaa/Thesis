# Book Recommendation App

## Overview
The Book Recommendation App is a full-stack application that provides personalized book recommendations based on user preferences. Users can choose recommendations by selecting genres or describing the kind of books they are interested in, and the app will generate recommendations using machine learning and backend services. The app includes a carousel feature displaying various book covers and offers a final selection of books based on user choices.

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Components](#components)
8. [Context Management](#context-management)
9. [Contributing](#contributing)
10. [License](#license)

## Features
- **User Registration**: Collects basic user information like name and email.
- **Recommendation Methods**: Users can get book recommendations by either:
  - Selecting favorite genres
  - Providing a description of preferred books
- **Carousel Display**: Displays a carousel of book covers on the main pages.
- **Final Recommendations**: Users select their favorite books from an initial list, which leads to a final, refined set of recommendations.
- **Responsive UI**: Adapted for both desktop and mobile devices.

## Tech Stack
- **Frontend**: React, React Router, Axios
- **Backend**: Flask, SBERT (Sentence-BERT) for natural language processing and generating recommendations
- **Database**: CSV file for book data, `.npy` file for embeddings
- **Styling**: CSS with responsive design

## Folder Structure
```plaintext
book_recommendation_app/
├── book_back_end/
│   ├── app.py              # Main backend API
│   ├── books.csv           # Book data in CSV format
│   ├── desc_embeddings.npy # Embeddings for descriptions
│   └── recSystem.py        # Recommendation logic
├── book_ux/
│   ├── src/
│   │   ├── components/     # React components (UI elements)
│   │   ├── context/        # Context management files
│   │   ├── hooks/          # Custom hooks
│   │   ├── App.js          # Main React application
│   │   ├── api.js          # Axios API calls to backend
│   │   ├── index.css       # CSS styles
│   │   └── index.js        # React DOM render
```

## Installation
### Prerequisites
- [React.js](https://nodejs.org/) (for React frontend)
- [Python 3](https://www.python.org/) and \`pip\` (for Flask backend)

### Setup Instructions
1. **Clone the repository**:
   ```shell
   git clone https://github.com/your-username/book-recommendation-app.git
   cd book_recommendation_app
2. **Backend Setup**:
    Navigate to the \`book_backend\` directory:
    ```shell
     cd book_backend
    ```
   Install Python dependencies:
   ```bash
    pip install -r requirements.txt
    ```
    Run the Flask app:
    ```bash
    python app.py
    ```

3. **Frontend Setup**:
    Navigate to the \`book_ux\` directory:
    ```bash
    cd ../book_ux
    ```
    Install Node dependencies:
    ```bash
     npm install
    ```
   Start the React app:
    ```bash
    npm run start
    ```

4. Open the app in a web browser at ````http://localhost:3000/````

## Usage
1. **User Info Entry**: Enter your name and email to start.
2. **Choose Recommendation Method**: Select your preferred method for recommendations (by genre or by description).
3. **Get Initial Recommendations**:
   - **By Genre**: Select up to five genres in order of preference.
   - **By Description**: Enter a description of the kind of books you enjoy.
4. **Final Selection**: From the initial recommendations, choose your top three favorites to receive the final recommendations.

## API Endpoints
The backend Flask API provides the following endpoints:

1. `POST /recommendations/description`: Fetches recommendations based on a user-provided description.
2. `POST /recommendations/genre`: Fetches recommendations based on selected genres.
3. `POST /recommendations/final-recs`: Fetches the final recommendations based on the user’s choices.

## Components
### Main Components in `src/components`
- **Carousel.js**: Displays a scrolling carousel of book cover images.
- **UserInfo.js**: Form for collecting user’s name and email.
- **ChooseRecMethod.js**: Interface for selecting the recommendation method.
- **Genres.js**: Allows users to select genres for recommendations.
- **DescriptionInput.js**: Form for user to describe their book preferences.
- **Recommendations.js**: Displays initial recommendations and allows users to choose three favorites.
- **FinalRecommendations.js**: Shows the final set of book recommendations based on user selections.

## Context Management
`FormContext` and `useFormContext` provide context management for handling user input and choices throughout the app:
- **FormContext**: Stores user data, such as name, email, chosen genres, and indices of selected recommendations.
- **useFormContext**: Custom hook for accessing and updating context data in various components.




