
# Movies Application - Frontend

This is the frontend component of the Movies Application built using React. It provides an intuitive user interface to manage movies and actors, view associations, and update movie details.

## Overview

This is a single-page React application that interacts with a Spring Boot backend over REST APIs. It enables users to:
- View a list of movies along with their cast.
- View a list of actors and the movies they have appeared in.
- Edit movie details, including associated actors.
- Perform search functionality on both movies and actors.
- Experience dynamic updates with toast notifications and modal editing.

## Features

- **Routing**: Implemented using `react-router-dom` to navigate between Movies and Actors views.
- **HTTP Requests**: Uses `axios` to communicate with the backend APIs.
- **Movie Management**: Users can browse all movies, view descriptions, associated actors, and edit movie details via a modal in default route "/".
- **Actor Display**: Actors are listed with bios, images, and the movies they have acted in "/actors" route.
- **Live Search**: Search movies by title or actors by name with instant filtering.
- **Modal Editing**: Edit movie title, description, image URL, and associated actors via a responsive modal.
- **Toast Notifications**: Integrated using `react-hot-toast` for success feedback on movie edits.
- **Responsive UI**: Built using Tailwind CSS and DaisyUI components for modern styling.

## API Integration

All API calls from the frontend are handled using `axios`.
The frontend consumes the following backend endpoints:

### Movies API

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/api/movies`        | Fetch all movies             |
| PUT    | `/api/movies/{id}`   | Update a movie by ID         |

### Actors API

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/api/actors`        | Fetch all actors             |


## Screenshots
![Home page with default route for dsipalying list of movies](https://github.com/user-attachments/assets/144ac6e9-0ff3-4566-9893-2e0e56830f50)
![List of all actors in /actors route](https://github.com/user-attachments/assets/5440a88f-015d-447c-aeb7-dece15f47380)
![Modal for updating movie details](https://github.com/user-attachments/assets/e40b98c7-c215-405a-86de-47fe0a9e85c1)
![Updated movie details with success toast](https://github.com/user-attachments/assets/15cd1b89-c360-40b8-9f69-1b794dd197a4)
![Search functionality with actor's name](https://github.com/user-attachments/assets/0b7e9a3a-266d-4db3-b104-2053817bcfc3)
![Search funcationality with movie's title](https://github.com/user-attachments/assets/f4a53295-c841-48a0-bb0e-dea878727374)







